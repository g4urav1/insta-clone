import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Eye, EyeOff, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const [newUsername, setNewUsername] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [popup, setPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUpdate = async () => {
    setSending(true);
    if (!password.trim()) {
      return alert("Enter your password");
    }
    const SessionId = localStorage.getItem("SessionId");
    try {
      const response = await fetch("http://localhost:1111/editProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          SessionId,
          Name: newName,
          Phone: newPhone,
          UserName: newUsername,
          Password: password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setPopup(false);
        navigate("/profile");
      } else {
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
    <div className="text-text bg-bg">
      <Sidebar />
      <main className="min-h-screen md:w-2/5  mx-auto p-4 relative">
        <h1 className="text-2xl mb-10">Edit Profile</h1>
        <div className="flex items-center justify-center flex-col bg-surface p-4 rounded-xl">
          <div className="relative mb-5 w-full">
            <input
              type="text"
              id="username"
              placeholder=" "
              autoComplete="username"
              autoFocus
              value={NewUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="peer w-full rounded-[22px] border border-[#4b5563] bg-bg px-6 pb-3 pt-8 text-text outline-none transition-all duration-200 focus:border-accent focus:ring-4 focus:ring-cyan-400/10"
            />

            <label
              htmlFor="username"
              className="pointer-events-none absolute left-6 top-2 text-[14px] font-medium text-muted transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[14px]"
            >
              Username
            </label>
          </div>
          <div className="relative mb-5 w-full">
            <input
              type="text"
              id="Name"
              placeholder=" "
              autoComplete="Name"
              value={NewName}
              onChange={(e) => setNewName(e.target.value)}
              className="peer w-full rounded-[22px] border border-[#4b5563] bg-bg px-6 pb-3 pt-8 text-text outline-none transition-all duration-200 focus:border-accent focus:ring-4 focus:ring-cyan-400/10"
            />

            <label
              htmlFor="Name"
              className="pointer-events-none absolute left-6 top-2 text-[14px] font-medium text-muted transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[14px]"
            >
              Name
            </label>
          </div>
          <div className="relative mb-5 w-full">
            <input
              type="tel"
              id="phone"
              placeholder=" "
              autoComplete="phone"
              value={NewPhone}
              onChange={(e) => setNewPhone(e.target.value)}
              className="peer w-full rounded-[22px] border border-[#4b5563] bg-bg px-6 pb-3 pt-8 text-text outline-none transition-all duration-200 focus:border-accent focus:ring-4 focus:ring-cyan-400/10"
            />

            <label
              htmlFor="phone"
              className="pointer-events-none absolute left-6 top-2 text-[14px] font-medium text-muted transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[14px]"
            >
              Mobile Number
            </label>
          </div>
          <button
            type="button"
            onClick={() => {
              setPopup(true);
            }}
            className="w-full rounded-full bg-primary py-3 text-base font-semibold text-text  transition hover:scale-[1.01] active:scale-[0.99] justify-center flex gap-2 items-center"
          >
            {sending ? (
              <div className="h-5 w-5 animate-spin   rounded-full border-l-[2px] border-b-[1.5px] border-r-[1px] border-text border-t-transparent"></div>
            ) : (
              "Update"
            )}
          </button>
        </div>
        {popup && (
          <main
            onClick={() => setPopup(false)}
            className="absolute inset-0 bg-bg/10 backdrop-blur-[2px] flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full h-1/2 flex flex-col justify-center bg-surface rounded-lg p-4 space-y-3"
            >
              <div className="flex justify-between">
                <div className="text-xl font-semibold">
                  Enter Password to continue
                </div>

                <X onClick={() => setPopup(false)} />
              </div>

              <div className="relative mb-5 w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="newPass"
                  placeholder=" "
                  autoComplete="new-password"
                  autoFocus
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="peer w-full rounded-[22px] border border-[#4b5563] bg-bg px-6 pb-3 pt-8 text-text outline-none transition-all duration-200 focus:border-accent focus:ring-4 focus:ring-cyan-400/10"
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
                  Password
                </label>
              </div>
              <button
                type="button"
                disabled={sending}
                onClick={() => handleUpdate()}
                className="w-full rounded-full bg-primary py-3 text-base font-semibold text-text  transition hover:scale-[1.01] active:scale-[0.99] justify-center flex gap-2 items-center"
              >
                {sending ? (
                  <div className="h-5 w-5 animate-spin   rounded-full border-l-[2px] border-b-[1.5px] border-r-[1px] border-text border-t-transparent"></div>
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </main>
        )}
      </main>
    </div>
  );
}
