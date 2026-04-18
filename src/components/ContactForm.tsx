"use client";

import { useState } from "react";
import { Loader2, ArrowUpRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Record<string, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s().+\-]{7,20}$/;

function validateFields(data: FormData): FieldErrors {
  const errs: FieldErrors = {};
  const name = (data.get("name") as string | null)?.trim() ?? "";
  const email = (data.get("email") as string | null)?.trim() ?? "";
  const message = (data.get("message") as string | null)?.trim() ?? "";
  const phone = (data.get("phone") as string | null)?.trim() ?? "";

  if (!name) errs.name = "Name is required.";
  else if (name.length < 2) errs.name = "Name must be at least 2 characters.";

  if (!email) errs.email = "Email is required.";
  else if (!EMAIL_RE.test(email)) errs.email = "Enter a valid email address.";

  if (phone && !PHONE_RE.test(phone)) errs.phone = "Enter a valid phone number.";

  if (!message) errs.message = "Please describe what you're trying to solve.";
  else if (message.length < 10) errs.message = "Message must be at least 10 characters.";

  return errs;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const { toast } = useToast();

  const formspreeId = site.formspreeId;
  const endpoint = formspreeId
    ? `https://formspree.io/f/${formspreeId}`
    : null;

  function clearFieldError(name: string) {
    if (fieldErrors[name]) {
      setFieldErrors((prev) => { const next = { ...prev }; delete next[name]; return next; });
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const errs = validateFields(data);
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});

    if (!endpoint) {
      const body = [
        `Name: ${data.get("name")}`,
        `Company: ${data.get("company") || "—"}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone") || "—"}`,
        "",
        `${data.get("message")}`,
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        "New MakeItGo inquiry",
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    try {
      setStatus("submitting");
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Submission failed");
      }
      setStatus("success");
      form.reset();
      toast({
        title: "Brief received",
        description:
          "Thanks — Raphi will be in touch within one business day.",
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      setError(message);
      setStatus("error");
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: message,
      });
    }
  }

  if (status === "success") {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-amber-glow" />
        <h3 className="mt-4 font-display text-xl font-semibold text-white">
          Got it — we&rsquo;ll be in touch.
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          You&rsquo;ll hear from Raphi within one business day. In the meantime,{" "}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="text-amber-glow underline-offset-4 hover:underline"
          >
            grab a time on his calendar
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass grid gap-4 rounded-2xl p-6 md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Your name" name="name" required error={fieldErrors.name} onClearError={clearFieldError} />
        <Field label="Company" name="company" error={fieldErrors.company} onClearError={clearFieldError} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Email" name="email" type="email" required error={fieldErrors.email} onClearError={clearFieldError} />
        <Field label="Phone (optional)" name="phone" type="tel" error={fieldErrors.phone} onClearError={clearFieldError} />
      </div>
      <Field
        label="What are you trying to solve?"
        name="message"
        required
        textarea
        placeholder="A few sentences on the business problem, where the friction is, and what 'success' looks like for you."
        error={fieldErrors.message}
        onClearError={clearFieldError}
      />

      {!formspreeId && (
        <p className="rounded-lg border border-amber-glow/25 bg-amber-glow/5 px-3 py-2 text-xs text-amber-glow">
          Form backend not configured yet — submissions currently open your
          email client. Set{" "}
          <code className="font-mono">NEXT_PUBLIC_FORMSPREE_ID</code> to enable
          direct submissions.
        </p>
      )}

      {status === "error" && error && (
        <p className="flex items-start gap-2 rounded-lg border border-red-400/30 bg-red-400/5 px-3 py-2 text-xs text-red-300">
          <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="group"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send the brief
            <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  placeholder,
  error,
  onClearError,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
  error?: string;
  onClearError?: (name: string) => void;
}) {
  const id = `field-${name}`;
  const errId = `${id}-error`;
  const invalid = Boolean(error);
  const sharedProps = {
    id,
    name,
    required,
    "aria-invalid": invalid || undefined,
    "aria-describedby": invalid ? errId : undefined,
    onChange: () => onClearError?.(name),
    className: invalid ? "border-red-400 focus-visible:ring-red-400" : undefined,
  };
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={id}>
        {label}
        {required && <span className="ml-1 text-amber-glow">*</span>}
      </Label>
      {textarea ? (
        <Textarea {...sharedProps} rows={5} placeholder={placeholder} />
      ) : (
        <Input {...sharedProps} type={type} placeholder={placeholder} />
      )}
      {error && (
        <p id={errId} className="flex items-center gap-1 text-xs text-red-400">
          <AlertTriangle className="h-3 w-3 flex-shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}
