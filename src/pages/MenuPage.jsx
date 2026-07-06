import { useContext, useEffect, useState } from "react"
import loginhook from "../assets/loginhook.webp"
import icon from "../assets/icon.svg"
import famora from "../assets/famora.svg"
import meta from "../assets/meta.svg"
import { MobileContext } from "../context/context"
import { useNavigate } from "react-router-dom"

export default function Menu() {

    const navigate = useNavigate();


    const year = new Date().getFullYear()



    const { isMobile, setIsMobile } = useContext(MobileContext)

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;

            setIsMobile(width < 768);

            if (width > 1366) {
                navigate("/login");
            } else {
                navigate("/menu");
            }
        };

        checkScreenSize();

        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, [navigate]);

    return (


        <>
            {!isMobile ?
                <div className="min-h-screen bg-surface text-white overflow-x-hidden">
                    <main className="relative min-h-[calc(100vh-120px)] border-b border-[#494D53]/60 md:grid md:grid-cols-2">

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

                        <section className="flex flex-col gap-10 min-h-[calc(100vh-120px)] w-full items-center justify-center  bg-surface px-6 py-24 md:py-10">
                            <div className="flex flex-col justify-center items-center w-full max-w-md">
                                <img
                                    className="w-[70px] sm:w-[80px]"
                                    src={icon}
                                    alt="Famora icon"
                                />

                                <p className=" text-2xl sm:text-3xl mx-auto w-full text-center leading-relaxed mt-4">
                                    Get the full experience with the tablet app
                                </p>

                                <button className="my-4 bg-primary rounded-xl py-2 text-base sm:text-lg font-semibold w-full sm:w-2/3">
                                    Open Famora
                                </button>
                            </div>

                            <div className="flex gap-3 mb-10 md:mb-20">
                                <p className="text-secondary cursor-pointer" onClick={()=>{navigate("/login")}}>
                                    Login
                                </p>
                                or
                                <p className="text-secondary cursor-pointer" onClick={()=>{navigate("/signup")}}>
                                    Sign up
                                </p>
                            </div>
                        </section>
                    </main>

                    <footer className="px-4 py-8 mb-5">
                        <div className="text-[#A8A8A8] text-xs w-full space-y-4">
                            <div className="flex justify-center flex-wrap gap-y-3">
                                <a className="px-2" href="#">Meta</a>
                                <a className="px-2" href="#">About</a>
                                <a className="px-2" href="#">Blog</a>
                                <a className="px-2" href="#">Jobs</a>
                                <a className="px-2" href="#">Help</a>
                                <a className="px-2" href="#">API</a>
                                <a className="px-2" href="#">Privacy</a>
                                <a className="px-2" href="#">Terms</a>
                                <a className="px-2" href="#">Location</a>
                                <a className="px-2" href="#">Popular</a>
                                <a className="px-2" href="#">Instagram Lite</a>
                                <a className="px-2" href="#">Meta AI</a>
                                <a className="px-2" href="#">Threads</a>
                                <a className="px-2" href="#">Contact Uploading & Non-Users</a>
                                <a className="px-2" href="#">Meta Verified</a>
                            </div>

                            <div className="flex justify-center flex-wrap gap-3">
                                <a href="#">English</a>
                                <a href="#">© {year} Instagram from Meta</a>
                            </div>
                        </div>
                    </footer>
                </div> :
                <div className="bg-bg min-h-screen">

                    <header className="border-b p-4 border-[#494D53]/60 flex justify-between bg-surface">
                        <div>
                            <img  src={famora} alt="" />
                        </div>
                        <div className="flex gap-2 text-sm font-semibold ">
                            <button>Log in</button>
                            <button className="bg-[#8B5CF6] rounded-xl px-2">Open app</button>
                        </div>
                    </header>

                    <main className="flex w-full justify-center flex-col items-center">
                        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-120px)] gap-4 px-4">
                            <div>
                                <img className="w-[200px]" src={famora} alt="" /></div>
                            <p className="text-2xl text-center w-4/5">Share <span className="bg-fm-gradient bg-clip-text text-transparent">everyday moments</span> with your close friends.
                            </p>
                            <div>     
                                <button className="my-4 bg-primary rounded-xl px-8 py-2 text-base sm:text-lg font-semibold w-full sm:w-2/3">
                                Open Famora
                            </button>
                            </div>

                            <div className="flex gap-3 mb-10 md:mb-20">
                                <p className="text-secondary" onClick={()=>{navigate("/login")}}>
                                    Login
                                </p>
                                or
                                <p className="text-secondary" onClick={()=>{navigate("/signup")}}>
                                    Sign up
                                </p>
                            </div>
                        <div className="w-[100%] flex justify-center items-center mt-10 gap-1"><img src={meta} alt="" /><span>Meta</span></div>
                        </div>
                    </main>

                </div>
            }</>
    )
}