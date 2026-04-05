import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Logo from "@/assets/xfinity-logo-grey.svg";


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
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-xl space-y-7 border border-red-700 translate-y-[28px]">
         
    {/* Logo */}
    <img
      src={Logo}
      alt=""
      className="translate-y-[6px]"
      width={70}
    />

        <div className="space-y-4 translate-y-[16px]">
          <p className="text-sm text-black font-semibold">{email}</p>
          <h1 className="text-3xl font-bold text-foreground leading-tight">Enter your password</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 translate-y-[6px]">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              className="w-full rounded-sm border border-neutral-500 bg-neutral-100 px-4 py-4 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
            <Link to="#" className="text-xfinity-purple font-semibold hover:underline">Forgot password?</Link>
            <span className="text-muted-foreground">·</span>
            
          </div>

          <label className="flex items-center gap-4 text-md text-foreground cursor-pointer select-none">
            <input
              type="checkbox"
              checked={keepSignedIn}
              onChange={(e) => setKeepSignedIn(e.target.checked)}
              className="h-6 w-6 rounded border-border accent-xfinity-purple"
            />
            Keep me signed in
          </label>

       
     <p className="text-sm text-neutral-900 leading-relaxed">
        By signing in, you agree to our{" "}
        <Link to="#" className="text-xfinity-purple underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link to="#" className="text-xfinity-purple underline">
          Privacy Policy
        </Link>.
      </p>

          <button
            type="submit"
            disabled={loading}
            className="w-28 block rounded-sm bg-xfinity-purple py-4 font-semibold text-primary-foreground transition hover:bg-xfinity-purple-hover disabled:opacity-60"
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

          <button type="button" onClick={handleSwitchUser} className="text-black font-semibold text-sm hover:underline">
              Sign in as someone else
            </button>

                 <p className="text-sm text-neutral-900 leading-relaxed gap-2 flex">
       Trouble signing in?
        <Link to="#" className="text-xfinity-purple underline">
          Get help
          </Link>
      </p>
        </form>
      </div>
    </main>
  );
};

export default LoginPassword;
