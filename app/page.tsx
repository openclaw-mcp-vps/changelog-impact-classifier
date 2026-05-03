export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          AI Classifies Changelog Impact{" "}
          <span className="text-[#58a6ff]">For Your Users</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your GitHub or GitLab repo. Our AI analyzes every commit and PR, classifies impact as breaking, feature, fix, or docs, and writes polished release notes your users actually understand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Free Trial — $25/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            See How It Works
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { label: "Impact Levels", value: "4" },
            { label: "Repos Supported", value: "GitHub + GitLab" },
            { label: "Setup Time", value: "< 5 min" },
            { label: "AI Model", value: "GPT-4o" }
          ].map((stat) => (
            <div key={stat.label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-bold text-lg">{stat.value}</div>
              <div className="text-[#8b949e] text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Connect Repo", desc: "Link your GitHub or GitLab repository in one click using OAuth." },
            { step: "02", title: "AI Analyzes", desc: "GPT-4o reads commits and PRs, classifying each change by impact level." },
            { step: "03", title: "Publish Notes", desc: "Get polished, user-facing release notes ready to ship instantly." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <div className="text-[#58a6ff] font-mono text-sm font-bold mb-3">{item.step}</div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-[#8b949e] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$25</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited repos",
              "AI impact classification (breaking / feature / fix / docs)",
              "Auto-generated user-facing release notes",
              "GitHub & GitLab integration",
              "Webhook & API access",
              "Priority support"
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started — $25/mo
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which repositories are supported?",
              a: "We support GitHub and GitLab repositories. Connect via OAuth in under 5 minutes — no manual token setup required."
            },
            {
              q: "How does the AI classify impact levels?",
              a: "GPT-4o analyzes commit messages, PR descriptions, and diffs to categorize each change as breaking, feature, fix, or docs — with reasoning you can review."
            },
            {
              q: "Can I edit the generated release notes?",
              a: "Yes. Every generated changelog is fully editable before publishing. You stay in control of what your users see."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Changelog Impact Classifier. All rights reserved.
      </footer>
    </main>
  );
}
