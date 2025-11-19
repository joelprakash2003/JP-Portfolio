"use client";

import { FormEvent, useState } from "react";
import { FiAlertCircle, FiCheckCircle, FiSend } from "react-icons/fi";

const WEB3FORMS_ACCESS_KEY = "f6ebb7b6-0422-4228-87b3-f4fa6e32f226";

type SubmissionState = "idle" | "loading" | "success" | "error";

const fieldStyles =
  "w-full rounded-2xl border border-primary/10 bg-white/90 px-4 py-3.5 text-base text-primary placeholder:text-secondary/50 focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition";

const Contact = () => {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  const isSubmitting = submissionState === "loading";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.set("access_key", WEB3FORMS_ACCESS_KEY);
    formData.set("subject", "New portfolio message");

    const nameValue = formData.get("name");
    const emailValue = formData.get("email");

    if (typeof nameValue === "string") {
      formData.set("from_name", nameValue);
    }

    if (typeof emailValue === "string") {
      formData.set("from_email", emailValue);
      formData.set("replyto", emailValue);
    }

    setSubmissionState("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        form.reset();
        setSubmissionState("success");
        setFeedbackMessage("Thanks for reaching out! I’ll reply as soon as possible.");
        return;
      }

      throw new Error(data.message || "Unable to send your message right now. Please try again.");
    } catch (error) {
      setSubmissionState("error");
      setFeedbackMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again or reach me via email."
      );
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28">
      <div className="container">
        <div className="rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] border border-white/80 bg-white/95 p-6 sm:p-8 lg:p-12 shadow-floating">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-4 sm:space-y-5 max-w-2xl">
              <p className="eyebrow text-secondary/70">Reach out</p>
              <h2>Want my resume or a quick chat? I&apos;m easy to reach.</h2>
              <p className="text-base sm:text-lg">
                Email, text, or connect on LinkedIn and I&apos;ll respond as soon as I step away from class or the code
                editor. Happy to share more about my internships, projects, or availability.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-secondary/80" htmlFor="contact-name">
                  Name
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className={fieldStyles}
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-secondary/80" htmlFor="contact-email">
                  Email
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={fieldStyles}
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm font-medium text-secondary/80" htmlFor="contact-message">
                Message
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  className={`${fieldStyles} resize-none`}
                />
              </label>

              <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="space-y-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <FiSend className="h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>

                <div aria-live="polite">
                  {submissionState === "success" && (
                    <p className="inline-flex items-center gap-2 rounded-2xl bg-mint/60 px-4 py-3 text-sm font-semibold text-teal">
                      <FiCheckCircle className="h-4 w-4" />
                      {feedbackMessage}
                    </p>
                  )}
                  {submissionState === "error" && (
                    <p className="inline-flex items-center gap-2 rounded-2xl bg-peach/60 px-4 py-3 text-sm font-semibold text-amber">
                      <FiAlertCircle className="h-4 w-4" />
                      {feedbackMessage}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
