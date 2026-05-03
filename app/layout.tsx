import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog Impact Classifier — AI-Powered Release Notes",
  description: "AI classifies changelog impact for users. Analyze code changes, categorize impact levels, and generate user-friendly release notes automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f5f0418a-a741-4c3a-a268-7a727e71f6ac"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
