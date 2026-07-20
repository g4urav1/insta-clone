import loginhook from "../assets/loginhook.webp";
import icon from "../assets/icon.svg";
import meta from "../assets/meta.svg";
import famora from "../assets/famora.svg";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MobileContext } from "../context/context";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  const { isMobile, setIsMobile } = useContext(MobileContext);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;

      setIsMobile(width < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [sending, setSending] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch("http://localhost:1111/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier,
          password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        localStorage.setItem("loggedin", true);
        navigate("/");
      }
      else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface text-text overflow-x-hidden">
      {!isMobile ? (
        <img
          className="absolute left-4 top-4 z-20 w-[70px] sm:w-[80px]"
          src={icon}
          alt="Famora icon"
        />
      ) : (
        <header className="border-b p-4 bg-surface border-[#494D53]/60 flex justify-between">
          <div>
            <img src={famora} alt="" />
          </div>
          <div className="flex gap-2 text-sm font-semibold ">
            <button
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </button>
            <button className="bg-primary rounded-xl px-2">Open app</button>
          </div>
        </header>
      )}
      <main className="relative min-h-[calc(100vh-82.67px)] md:border-b md:border-[#494D53]/60 md:grid md:grid-cols-2">
        <section className="hidden bg-bg md:flex md:flex-col md:items-center md:justify-center border-r border-[#494D53]/40 px-6 pt-24">
          <div className="w-full max-w-[620px] text-center">
            <h1 className="text-2xl lg:text-4xl font-medium leading-relaxed">
              See everyday moments from <br className="hidden lg:block" />
              your{" "}
              <span className="bg-fm-gradient bg-clip-text text-transparent">
                close friends
              </span>
              .
            </h1>

            <img
              className="mx-auto mt-12 w-[420px] max-w-full"
              src={loginhook}
              alt="Login preview"
            />
          </div>
        </section>

        <section
          className={`flex min-h-[calc(100vh-120px)] w-full items-center justify-center   px-6 py-24 md:py-10} ${isMobile ? "bg-bg" : "bg-surface"}`}
        >
          <form className="w-full max-w-md">
            <h2 className="mb-4 text-left text-lg font-medium">
              Log into Famora
            </h2>

            <div className="relative mb-5 w-full">
              <input
                type="text"
                id="username"
                placeholder=" "
                autoComplete="username"
                autoFocus
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="peer w-full rounded-[22px] border border-[#4b5563] bg-bg px-6 pb-3 pt-8 text-text outline-none transition-all duration-200 focus:border-accent focus:ring-4 focus:ring-cyan-400/10"
              />

              <label
                htmlFor="username"
                className="pointer-events-none absolute left-6 top-2 text-[14px] font-medium text-muted transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[14px]"
              >
                Mobile number, username or email
              </label>
            </div>

            <div className="relative mb-6 w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder=" "
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full rounded-[22px] border border-[#4b5563] bg-bg px-6 pb-3 pt-8 text-text outline-none transition-all duration-200 focus:border-accent focus:ring-4 focus:ring-cyan-400/10"
              />
              <div
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="absolute top-[40%] right-4 peer-placeholder-shown:hidden transition-all duration-200"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </div>

              <label
                htmlFor="password"
                className="pointer-events-none absolute left-6 top-2 text-[14px] font-medium text-muted transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[14px]"
              >
                Password
              </label>
            </div>

            <div className="space-y-4">
              <button
                type="button"
                onClick={handleLogin}
                className="w-full rounded-full bg-primary py-3 text-base font-semibold text-text  transition hover:scale-[1.01] active:scale-[0.99] justify-center flex gap-2 items-center"
              >
                {sending ? <div className="h-5 w-5 animate-spin   rounded-full border-l-[2px] border-b-[1.5px] border-r-[1px] border-text border-t-transparent"></div> : "Log in"}
              </button>

              <button
                type="button"
                onClick={() => {
                  navigate("/password/reset");
                }}
                className="w-full rounded-full py-3 text-base transition hover:bg-hover text-hover-text"
              >
                Forgot password?
              </button>

              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs uppercase tracking-wider text-muted">
                  or
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <button
                type="button"
                className="w-full rounded-full border border-accent py-3 text-base font-semibold transition hover:bg-white/10 flex justify-center gap-2"
              >
                <FaFacebook size={24} /> Login with Facebook
              </button>

              <button
                type="button"
                onClick={() => {
                  navigate("/signup");
                }}
                className="w-full rounded-full border border-primary py-3 text-base font-semibold text-primary transition hover:bg-white/10"
              >
                Create new account
              </button>
            </div>
            <div className="w-[100%] flex justify-center items-center mt-10 gap-1">
              <img src={meta} alt="" />
              <span>Meta</span>
            </div>
          </form>
        </section>
      </main>

      {!isMobile && (
        <footer className="px-4 py-7">
          <div className="w-full space-y-4 text-xs text-text">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-3">
              <a href="#">Meta</a>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Jobs</a>
              <a href="#">Help</a>
              <a href="#">API</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Location</a>
              <a href="#">Popular</a>
              <a href="#">Instagram Lite</a>
              <a href="#">Meta AI</a>
              <a href="#">Threads</a>
              <a href="#">Contact Uploading & Non-Users</a>
              <a href="#">Meta Verified</a>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a href="#">English</a>
              <span>© {year} Famora from Meta</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
