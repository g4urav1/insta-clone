import loginhook from "../assets/loginhook.webp"
import icon from "../assets/icon.svg"
import meta from "../assets/meta.svg"
import famora from "../assets/famora.svg"
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { MobileContext } from "../context/context"
import { Eye, EyeOff } from "lucide-react";

export default function setupAcc() {
    const now = new Date();
    const year = now.getFullYear();
    const getToday = () => {

        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

    const today = getToday();

    const [birthday, setBirthday] = useState(today);
    const [error, setError] = useState("");


    const [showPasswordPage, setShowPasswordPage] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [showAge, setShowAge] = useState(false)
    const [showName, setShowName] = useState(false)
    const [showUserName, setShowUserName] = useState(false)
    const [showTerms, setShowTerms] = useState(false)

    const navigate = useNavigate();


    const { isMobile, setIsMobile } = useContext(MobileContext)

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

    function Age() {
        setShowPasswordPage(false)
        setShowAge(true)
    }
    function Name() {
        setShowAge(false)
        setShowName(true)
    }
    function UserName() {
        setShowName(false)
        setShowUserName(true)
    }
    function Terms() {
        setShowUserName(false)
        setShowTerms(true)
    }

    return (
        <div className="min-h-screen bg-bg text-white overflow-x-hidden">
            {!isMobile ? <img
                className=" w-[70px] sm:w-[80px] "
                src={icon}
                alt="Famora icon"
            /> :
                <header className="border-b p-4 bg-surface border-[#494D53]/60 flex justify-between">
                    <div>
                        <img src={famora} alt="" />
                    </div>
                    <div className="flex gap-2 text-sm font-semibold ">
                        <button>Log in</button>
                        <button className="bg-[#8B5CF6] rounded-xl px-2">Open app</button>
                    </div>
                </header>
            }

            {showPasswordPage &&
                <main className="bg-bg relative min-h-[calc(100vh-70px)] border-b border-[#494D53]/60 flex flex-col  md:w-1/2 md:mx-auto  justify-center items-center">
                    <div className="p-4 space-y-3">
                        <h1 className="text-2xl font-semibold">Create a password</h1>
                        <p>
                            Create a password with at least 6 letters or numbers.
                            It should be something others can't guess.
                        </p>
                        <div className="relative mb-5 w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder=" "
                                autoComplete="current-password"
                                className="peer w-full rounded-[22px] border border-[#4b5563] bg-[#1d1d20] px-6 pb-3 pt-8 text-white outline-none transition-all duration-200 focus:border-accent focus:ring-4 focus:ring-cyan-400/10"
                            />
                            <div onClick={() => { setShowPassword(!showPassword) }} className="absolute top-[40%] right-4 peer-placeholder-shown:hidden transition-all duration-200">
                                {showPassword ? <EyeOff /> : <Eye />}</div>

                            <label
                                htmlFor="password"
                                className="pointer-events-none absolute left-6 top-2 text-[14px] font-medium text-[#b8c4d4] transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[14px]"
                            >
                                Password
                            </label>
                        </div>
                        <button
                            type="submit"
                            onClick={() => { Age() }}
                            className="w-full rounded-full bg-primary py-3 text-base font-semibold text-white  transition hover:scale-[1.01] active:scale-[0.99]"
                        >
                            Next
                        </button>

                    </div>
                    <footer className="mt-auto text-center mb-4">
                        <button onClick={() => { navigate("/login") }} className="text-secondary hover:bg-white/10 px-2 py-1">I already have an account</button>
                    </footer>
                </main>}

            {showAge && <main className="bg-bg relative min-h-[calc(100vh-70px)] border-b border-[#494D53]/60 flex flex-col md:w-1/2 md:mx-auto justify-center items-center">
                <div className="p-4 space-y-3">
                    <h1 className="text-2xl font-semibold">What's your birthday?</h1>
                    <p >
                        Use your own birthday, even if this account is for a
                        business, a pet or something else. No one will see this
                        unless you choose to share it. Why do I need to
                        provide my birthday?
                    </p>
                    <div className="relative mb-5 w-full">
                        <input
                            type="date"
                            id="date"
                            max={today}
                            value={birthday}
                            autoFocus
                            onChange={(e) => {
                                const selectedDate = e.target.value;

                                setBirthday(selectedDate);

                                if (selectedDate > today) {
                                    setError("Birthday cannot be in the future.");
                                } else {
                                    setError("");
                                }
                            }}
                            className="peer w-full rounded-[22px] border border-[#4b5563] bg-[#1d1d20] px-6 pb-3 pt-8 text-white outline-none transition-all duration-200 focus:border-accent focus:ring-4 focus:ring-cyan-400/10 mb-3"
                        />

                        <label
                            htmlFor="date"
                            className="pointer-events-none absolute left-6 top-2 text-[14px] font-medium text-[#b8c4d4] transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[14px]"
                        >
                            Birthday
                        </label>
                        {error && (
                            <p className="text-sm text-red-400">
                                {error}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        onClick={() => { Name() }}
                        className="w-full rounded-full bg-primary py-3 text-base font-semibold text-white  transition hover:scale-[1.01] active:scale-[0.99]"
                    >
                        Next
                    </button>

                </div>
                <footer className="mt-auto text-center mb-4">
                    <button onClick={() => { navigate("/login") }} className="text-secondary hover:bg-white/10 px-2 py-1">I already have an account</button>
                </footer>
            </main>}

            {showName && <main className="bg-bg relative min-h-[calc(100vh-70px)] border-b border-[#494D53]/60 flex flex-col  md:w-1/2 md:mx-auto  justify-center items-center">
                <div className="p-4 space-y-3">
                    <h1 className="text-2xl font-semibold">What's your name?</h1>
                    <p>
                        Add your name so friends can find you.

                    </p>
                    <div className="relative mb-5 w-full">
                        <input
                            type="text"
                            id="name"
                            placeholder=" "
                            autoComplete="name"
                            autoFocus
                            className="peer w-full rounded-[22px] border border-[#4b5563] bg-[#1d1d20] px-6 pb-3 pt-8 text-white outline-none transition-all duration-200 focus:border-accent focus:ring-4 focus:ring-cyan-400/10 mb-3"
                        />

                        <label
                            htmlFor="name"
                            className="pointer-events-none absolute left-6 top-2 text-[14px] font-medium text-[#b8c4d4] transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[14px]"
                        >
                            Full name
                        </label>
                    </div>
                    <button
                        type="submit"
                        onClick={() => { UserName() }}
                        className="w-full rounded-full bg-primary py-3 text-base font-semibold text-white  transition hover:scale-[1.01] active:scale-[0.99]"
                    >
                        Next
                    </button>

                </div>
                <footer className="mt-auto text-center mb-4">
                    <button onClick={() => { navigate("/login") }} className="text-secondary hover:bg-white/10 px-2 py-1">I already have an account</button>
                </footer>
            </main>}

            {showUserName && <main className="bg-bg relative min-h-[calc(100vh-70px)] border-b border-[#494D53]/60 flex flex-col  md:w-1/2 md:mx-auto  justify-center items-center">
                <div className="p-4 space-y-3">
                    <h1 className="text-2xl font-semibold">Create a username</h1>
                    <p>
                        Add a username or use our suggestion. You can change this at any time.
                    </p>
                    <div className="relative mb-5 w-full">
                        <input
                            type="text"
                            id="username"
                            placeholder=" "
                            autoFocus
                            autoComplete="username"
                            className="peer w-full rounded-[22px] border border-[#4b5563] bg-[#1d1d20] px-6 pb-3 pt-8 text-white outline-none transition-all duration-200 focus:border-accent focus:ring-4 focus:ring-cyan-400/10 mb-3"
                        />

                        <label
                            htmlFor="username"
                            className="pointer-events-none absolute left-6 top-2 text-[14px] font-medium text-[#b8c4d4] transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[14px]"
                        >
                            Username
                        </label>
                    </div>
                    <button
                        type="submit"
                        onClick={() => { Terms() }}
                        className="w-full rounded-full bg-primary py-3 text-base font-semibold text-white  transition hover:scale-[1.01] active:scale-[0.99]"
                    >
                        Next
                    </button>

                </div>
                <footer className="mt-auto text-center mb-4">
                    <button onClick={() => { navigate("/login") }} className="text-secondary hover:bg-white/10 px-2 py-1">I already have an account</button>
                </footer>
            </main>}

            {showTerms && <main className="bg-bg relative min-h-[calc(100vh-70px)] border-b border-[#494D53]/60 flex flex-col  md:w-1/2 md:mx-auto  justify-center items-center">
                <div className="p-4 space-y-3">
                    <h1 className="text-2xl font-semibold">Agree to Instagram's terms and policies
                    </h1>
                    <div>
                        <p>People who use our service may have uploaded your contact information to Instagram. Learn more
                        </p>
                        <p>By tapping I agree, you agree to create an account and to Instagram's Terms, Privacy Policy and Cookies Policy.
                        </p>
                        <p>
                            The Privacy Policy describes the ways we can use the information we collect when you create a profile. For example, we use this information to provide, personalize and improve our products, including ads.
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-full bg-primary py-3 text-base font-semibold text-white  transition hover:scale-[1.01] active:scale-[0.99]"
                    >
                        I agree
                    </button>

                </div>
                <footer className="mt-auto text-center mb-4">
                    <button onClick={() => { navigate("/login") }} className="text-secondary hover:bg-white/10 px-2 py-1">I already have an account</button>
                </footer>
            </main>}


            {!isMobile && <footer className="px-4 py-7">
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
            </footer>}
        </div>

    )
}