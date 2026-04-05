import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";

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
            aria-busy={loading}
            className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-lg bg-xfinity-purple px-4 font-semibold leading-none text-primary-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-xfinity-purple-hover hover:shadow-md active:translate-y-0 active:scale-[0.99] disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:opacity-60"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary-foreground/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />
            <span className="relative z-10 inline-flex min-h-5 items-center justify-center gap-2">
              {loading ? (
                <>
                  <LoaderCircle className="h-4 w-4 flex-shrink-0 animate-spin" />
                  <span>Signing in…</span>
                </>
              ) : (
                <span className="transition-transform duration-300 group-hover:scale-[1.02]">Sign in</span>
              )}
            </span>
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginPassword;
