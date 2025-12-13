"use client";

import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(7, "Phone number is required")
    .max(20, "Phone number is too long"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type ToastState = {
  type: "success" | "error";
  message: string;
} | null;

const ContactPage = () => {
  const [toast, setToast] = useState<ToastState>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: useMemo(
      () => ({
        name: "",
        email: "",
        phone: "",
        message: "",
      }),
      []
    ),
  });

  const showToast = (nextToast: ToastState) => {
    setToast(nextToast);
    if (nextToast) {
      setTimeout(() => setToast(null), 4000);
    }
  };

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    showToast(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || "Failed to send message");
      }

      showToast({
        type: "success",
        message: result?.message || "Message sent successfully.",
      });
      reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      showToast({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${inter.variable} font-sans`}>
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold leading-tight">
              Let&apos;s Create Something Better{" "}
              <span className="bg-linear-to-r from-[#0059FF] to-[#377DFF] bg-clip-text text-transparent">
                Together
              </span>
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-6 sm:p-8 md:p-10 lg:p-12 mb-12 sm:mb-16 md:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-[#F3F7FF] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-8 sm:mb-10">
                  Contact Info
                </h2>

                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <p className="text-sm sm:text-base text-gray-500 mb-2">
                      Address
                    </p>
                    <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                      428 DLF Cybercity, Chandaka Industrial Estate, Patia,
                      Bhubaneswar, Odisha 751024
                    </p>
                  </div>

                  <div>
                    <p className="text-sm sm:text-base text-gray-500 mb-2">
                      Number
                    </p>
                    <p className="text-sm sm:text-base text-gray-900">
                      +91-7809424281
                    </p>
                  </div>

                  <div>
                    <p className="text-sm sm:text-base text-gray-500 mb-2">
                      Email
                    </p>
                    <p className="text-sm sm:text-base text-gray-900">
                      info@appstone.in
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 sm:space-y-8"
                  noValidate
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm sm:text-base text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name")}
                      className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#0059FF] focus:outline-none pb-2 text-sm sm:text-base text-gray-900 transition-colors duration-300"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm sm:text-base text-gray-700 mb-2"
                    >
                      Mail Id
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#0059FF] focus:outline-none pb-2 text-sm sm:text-base text-gray-900 transition-colors duration-300"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm sm:text-base text-gray-700 mb-2"
                    >
                      Phone No.
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone")}
                      className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#0059FF] focus:outline-none pb-2 text-sm sm:text-base text-gray-900 transition-colors duration-300"
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm sm:text-base text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message")}
                      className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#0059FF] focus:outline-none pb-2 resize-none text-sm sm:text-base text-gray-900 transition-colors duration-300"
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#0059FF] hover:bg-[#0047CC] text-white px-8 py-6 text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.563733571515!2d85.80520327533252!3d20.348840610783558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909a936a16c3d%3A0xf7da9ede68b283d9!2sAppstone%20Pvt.%20Ltd!5e1!3m2!1sen!2sin!4v1765430088100!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Appstone Location"
            />
          </div>
        </div>
      </section>

      {toast && (
        <div className="fixed top-6 right-6 z-50 sm:top-8 sm:right-8">
          <div
            className={`rounded-xl px-4 py-3 shadow-lg text-sm sm:text-base text-white ${
              toast.type === "success" ? "bg-emerald-600" : "bg-red-600"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;