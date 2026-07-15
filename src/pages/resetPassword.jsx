import loginhook from "../assets/loginhook.webp";
import icon from "../assets/icon.svg";
import meta from "../assets/meta.svg";
import famora from "../assets/famora.svg";
import { FaFacebook } from "react-icons/fa";
import { Eye, EyeOff, X } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MobileContext } from "../context/context";

export default function ResetPass() {
  const now = new Date();
  const year = now.getFullYear();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");
  const showFindAccount = !token;
  const showNewPassword = !!token;

  const { isMobile, setIsMobile } = useContext(MobileContext);

  const [dropdown, setDropdown] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [setIsMobile]);

  const [email, setEmail] = useState("");

  async function handleSubmit() {
    try {
      const res = await fetch("http://localhost:1111/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setDropdown(true);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  }

 async function handlePasswordChange() {
  try {
    const res = await fetch("http://localhost:1111/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        password: newPassword,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Password Changed");
      navigate("/login");
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.log(err);
  }
}

  return (
    <div className="min-h-screen bg-bg text-white overflow-x-hidden">
      {!isMobile ? (
        <img className="w-[70px] sm:w-[80px]" src={icon} alt="Famora icon" />
      ) : (
        <header className="border-b p-4 bg-surface border-[#494D53]/60 flex justify-between">
          <img src={famora} alt="Famora" />

          <div className="flex gap-2 text-sm font-semibold">
            <button onClick={() => navigate("/login")}>Log in</button>

            <button className="bg-[#8B5CF6] rounded-xl px-2">Open app</button>
          </div>
        </header>
      )}

      {/* FIND ACCOUNT */}
      {showFindAccount && (
        <main className="bg-bg relative min-h-[calc(100vh-70px)] border-b border-[#494D53]/60 flex flex-col md:w-1/2 md:mx-auto items-center">
          <div className="p-4 space-y-3 w-full">
            <h1 className="text-2xl font-semibold">Find your account</h1>

            <p>
              Enter your username or email.{" "}
              <a href="#">Can't reset your password?</a>
            </p>

            <div className="relative mb-5 w-full">
              <input
                type="text"
                id="account"
                placeholder=" "
                autoComplete="account"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full rounded-[22px] border border-[#4b5563] bg-[#1d1d20] px-6 pb-3 pt-8 text-white outline-none transition-all duration-200 focus:border-accent focus:ring-4 focus:ring-cyan-400/10 mb-3"
              />

              <label
                htmlFor="account"
                className="pointer-events-none absolute left-6 top-2 text-[14px] font-medium text-[#b8c4d4] transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[14px]"
              >
                Username or Email
              </label>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full rounded-full bg-primary py-3 text-base font-semibold text-white transition hover:scale-[1.01] active:scale-[0.99]"
            >
              Next
            </button>
          </div>
        </main>
      )}

      {/* EMAIL SENT MODAL */}
      {dropdown && (
        <main
          onClick={() => setDropdown(false)}
          className="absolute inset-0 bg-bg/10 backdrop-blur-[2px] flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full md:w-2/5 bg-surface rounded-lg p-4 space-y-3"
          >
            <div className="flex justify-between">
              <div className="text-xl font-semibold">
                Check your Email or Phone
              </div>

              <X onClick={() => setDropdown(false)} />
            </div>

            <p>
              If an account matches the information you entered, you'll receive
              a message with a link to reset your password.
            </p>

            <button
              onClick={() => setDropdown(false)}
              className="w-full rounded-full bg-primary py-3 text-base font-semibold text-white transition hover:scale-[1.01] active:scale-[0.99]"
            >
              OK
            </button>
          </div>
        </main>
      )}
      {/* RESET PASSWORD */}
      {showNewPassword && (
        <main className="bg-bg relative min-h-[calc(100vh-70px)] border-b border-[#494D53]/60 flex flex-col md:w-1/2 md:mx-auto items-center">
          <div className="p-4 space-y-3 w-full">
            <h1 className="text-2xl font-semibold">Reset your password</h1>

            <p>
              Create a password with at least 6 letters and numbers. You'll need
              this password to log into your account.
            </p>

            <div className="relative mb-5 w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="newPass"
                placeholder=" "
                autoComplete="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="peer w-full rounded-[22px] border border-[#4b5563] bg-[#1d1d20] px-6 pb-3 pt-8 text-white outline-none transition-all duration-200 focus:border-accent focus:ring-4 focus:ring-cyan-400/10"
              />

              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-[40%] right-4 cursor-pointer"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </div>

              <label
                htmlFor="newPass"
                className="pointer-events-none absolute left-6 top-2 text-[14px] font-medium text-[#b8c4d4] transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[14px]"
              >
                New Password
              </label>
            </div>

            <button
              type="button"
              onClick={handlePasswordChange}
              className="w-full rounded-full bg-primary py-3 text-base font-semibold text-white transition hover:scale-[1.01] active:scale-[0.99]"
            >
              Continue
            </button>
          </div>
        </main>
      )}

      {!isMobile && (
        <footer className="px-4 py-7">
          <div className="w-full space-y-4 text-xs text-[#A8A8A8]">
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
