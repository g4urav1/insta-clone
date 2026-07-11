import loginhook from "../assets/loginhook.webp";
import icon from "../assets/icon.svg";
import meta from "../assets/meta.svg";
import famora from "../assets/famora.svg";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MailContext, MobileContext } from "../context/context";
import { ChevronLeftIcon } from "lucide-react";

export default function Signup() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  const { isMobile, setIsMobile } = useContext(MobileContext);

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
  }, [navigate]);

  const { mail, setMail } = useContext(MailContext);

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:1111/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Confirmation code sent on email");
        navigate("/auth");
      } else {
        console.log(data.message)
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-bg text-white overflow-x-hidden">
      {!isMobile ? (
        <img className=" w-[70px] sm:w-[80px] " src={icon} alt="Famora icon" />
      ) : (
        <header className="border-b p-4 bg-surface border-[#494D53]/60 flex justify-between">
          <div>
            <img src={famora} alt="" />
          </div>
          <div className="flex gap-2 text-sm font-semibold ">
            <button>Log in</button>
            <button className="bg-[#8B5CF6] rounded-xl px-2">Open app</button>
          </div>
        </header>
      )}
      <main className="bg-bg relative min-h-[calc(100vh-70px)] border-b border-[#494D53]/60 flex flex-col md:w-1/2 md:mx-auto  justify-center items-center">
        <div className="p-4 space-y-3">
          <h1 className="text-2xl font-semibold">What's your email?</h1>
          <p>
            Enter the email where you can be contacted. No one will see this on
            your profile.
          </p>
          <div className="relative mb-5 w-full">
            <input
              type="email"
              id="Email"
              placeholder=" "
              autoComplete="Email"
              autoFocus
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
              className="peer w-full rounded-[22px] border border-[#4b5563] bg-[#1d1d20] px-6 pb-3 pt-8 text-white outline-none transition-all duration-200 focus:border-accent focus:ring-4 focus:ring-cyan-400/10 mb-3"
            />

            <label
              htmlFor="Email"
              className="pointer-events-none absolute left-6 top-2 text-[14px] font-medium text-[#b8c4d4] transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[14px]"
            >
              Email
            </label>
          </div>
          <button
            type="submit"
            onClick={() => {
              handleSignup();
            }}
            className="w-full rounded-full bg-primary py-3 text-base font-semibold text-white  transition hover:scale-[1.01] active:scale-[0.99]"
          >
            Next
          </button>
          <button
            type="button"
            className="w-full rounded-full py-3 text-base transition hover:bg-white/10"
          >
            sign up with your mobile number
          </button>
        </div>
        <footer className="mt-auto text-center mb-4">
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="text-secondary hover:bg-white/10 px-2 py-1"
          >
            I already have an account
          </button>
        </footer>
      </main>

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
