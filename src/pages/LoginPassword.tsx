import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const LoginPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = (location.state as { email?: string })?.email || "user@example.com";

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Signed in successfully! (mock)");
    }, 800);
  };

  const handleSwitchUser = () => {
    navigate("/", { replace: true });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-md space-y-8">
        <span className="text-2xl font-bold tracking-tight text-foreground">xfinity</span>

        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{email}</p>
          <h1 className="text-3xl font-bold text-foreground">Enter your password</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
            {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
          </div>

          <div className="flex items-center gap-x-4 text-sm">
            <a href="#" className="text-xfinity-link hover:underline">Forgot password?</a>
            <span className="text-muted-foreground">·</span>
            <button type="button" onClick={handleSwitchUser} className="text-xfinity-link hover:underline">
              Sign in as someone else
            </button>
          </div>

          <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer select-none">
            <input
              type="checkbox"
              checked={keepSignedIn}
              onChange={(e) => setKeepSignedIn(e.target.checked)}
              className="h-4 w-4 rounded border-border accent-xfinity-purple"
            />
            Keep me signed in
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-xfinity-purple py-3 font-semibold text-primary-foreground transition hover:bg-xfinity-purple-hover disabled:opacity-60"
          >
            {loading ? (
              <span className="inline-flex items-center justify-center gap-2">
                <svg className="h-4 w-4 animate-spin flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                  <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" className="opacity-75" />
                </svg>
                <span>Signing in…</span>
              </span>
            ) : (
              "Sign in"
            )}
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginPassword;
