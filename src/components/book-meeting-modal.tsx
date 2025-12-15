"use client";

import { useState } from "react";
import { MeetingRequest } from "@/types/booking";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
};

type StatusState =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const initialForm: MeetingRequest = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  message: "",
  meetingType: "Google Meet",
};

export function BookMeetingModal({ open, onClose }: Props) {
  const [form, setForm] = useState<MeetingRequest>(initialForm);
  const [status, setStatus] = useState<StatusState>({ state: "idle" });

  const handleChange = (key: keyof MeetingRequest, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus({ state: "loading" });

    try {
      const response = await fetch("/api/book-meeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      setStatus({ state: "success", message: result.message || "Meeting request sent." });
      setForm(initialForm);
      // Close automatically after a short delay for smoother UX
      setTimeout(() => {
        onClose();
        setStatus({ state: "idle" });
      }, 600);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send meeting request.";
      setStatus({ state: "error", message });
    }
  };

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogContent className="max-w-2xl w-[95vw] sm:w-[90vw] p-0 max-h-[90vh] overflow-auto">
        <DialogHeader className="border-b border-neutral-100 px-5 pb-4 pt-6 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Book a Meeting</p>
          <DialogTitle>Let’s schedule your session</DialogTitle>
          <DialogDescription>
            Choose a date and time, then share your details. We’ll confirm with a Google Meet invite.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 px-5 py-5 sm:px-6 sm:py-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-neutral-800">Date</label>
            <input
              type="date"
              required
              value={form.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-xs outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-neutral-800">Time</label>
            <input
              type="time"
              required
              value={form.time}
              onChange={(e) => handleChange("time", e.target.value)}
              className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-xs outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-neutral-800">Full Name</label>
            <input
              type="text"
              required
              placeholder="enter your full name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-xs outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-neutral-800">Email</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-xs outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-neutral-800">Phone Number</label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-xs outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-col gap-2 sm:col-span-1">
            <label className="text-sm font-medium text-neutral-800">Meeting Type</label>
            <select
              value={form.meetingType}
              onChange={(e) => handleChange("meetingType", e.target.value)}
              className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-xs outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="Google Meet">Google Meet</option>
              <option value="Zoom">Zoom</option>
              <option value="Microsoft Teams">Microsoft Teams</option>
              <option value="Phone Call">Phone Call</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-sm font-medium text-neutral-800">Message (optional)</label>
            <textarea
              rows={3}
              placeholder="enter your message"
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-xs outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <div
              className={cn(
                "text-sm",
                status.state === "success" && "text-emerald-600",
                status.state === "error" && "text-red-600",
                status.state === "idle" && "text-neutral-500",
                status.state === "loading" && "text-blue-600"
              )}
            >
              {status.state === "success" && status.message}
              {status.state === "error" && status.message}
              {status.state === "loading" && "Sending your request..."}
              {status.state === "idle" && "We’ll send you a confirmation email with the meeting link."}
            </div>

            <DialogFooter className="sm:col-span-1 sm:justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="px-5"
                disabled={status.state === "loading"}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-linear-to-r from-blue-600 to-blue-500 px-6 text-white shadow-lg shadow-blue-500/30 transition hover:shadow-xl hover:shadow-blue-500/40"
                disabled={status.state === "loading"}
              >
                {status.state === "loading" ? "Sending..." : "Send Request"}
              </Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

