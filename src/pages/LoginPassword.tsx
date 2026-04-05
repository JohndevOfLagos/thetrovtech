import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import Logo from "@/assets/xfinity-logo-grey.svg";
import Footer from "@/components/Footer/Footer";

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
    <main className="h-screen overflow-y-auto bg-background">
          <section className="h-[95vh] flex items-center justify-center px-6">
                  <div className="w-full max-w-xl space-y-7 mt-28">
         
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
              placeholder=""
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              required
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
              required
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
            aria-busy={loading}
            className="group relative block h-12 w-28 items-center justify-center overflow-hidden rounded-sm bg-xfinity-purple px-4 font-semibold leading-none text-primary-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-xfinity-purple-hover hover:shadow-md active:translate-y-0 active:scale-[0.99] disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:opacity-60"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary-foreground/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />
            <span className="relative z-10 inline-flex min-h-5 items-center justify-center gap-2">
              {loading ? (
                <>
                  <LoaderCircle className="h-4 w-4 flex-shrink-0 animate-spin" />
                  {/* <span>Signing in…</span> */}
                </>
              ) : (
                <span className="transition-transform duration-300 group-hover:scale-[1.02]">Sign in</span>
              )}
            </span>
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

          </section>

{/* FOOTER (only shows when scrolling) */}
    <footer className="bg-white">
      <Footer />
    </footer>
    </main>
  );
};

export default LoginPassword;
