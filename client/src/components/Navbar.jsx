import { useContext, useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";

export default function Navbar(){
    const navigate = useNavigate();
    const {userData, backendUrl, setUserData, setIsLoggedin} = useContext(AppContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // close the menu when tapping or clicking outside it
    useEffect(() => {
        const handleOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutside);
        document.addEventListener("touchstart", handleOutside);
        return () => {
            document.removeEventListener("mousedown", handleOutside);
            document.removeEventListener("touchstart", handleOutside);
        };
    }, []);

    const sendVerificationOtp = async () => {
        setMenuOpen(false);
        try {
            axios.defaults.withCredentials = true;
            const {data} = await axios.post(backendUrl + "/api/auth/send-verify-otp");
            if(data.success){
                navigate("/email-verify")
                toast.success(data.message)
            } else{
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const logout = async () => {
        setMenuOpen(false);
        try {
            axios.defaults.withCredentials = true
            const{data} = await axios.post(backendUrl + "/api/auth/logout")
            data.success && setIsLoggedin(false)
            data.success && setUserData(false);
            navigate("/")
        } catch (error) {
            toast.error(error.message)
        }
    }

    return(
        <div className="w-full flex justify-between items-center
        p-4 sm:p-6 sm:px-24 absolute top-0">
            <img src={assets.logo} alt="" className="w-28 sm:w-32" />

            {userData ? (
                <div ref={menuRef} className="relative">
                    <div
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="w-8 h-8 flex justify-center items-center bg-black
                        text-white rounded-full cursor-pointer select-none"
                    >
                        {userData.name[0].toUpperCase()}
                    </div>

                    {menuOpen && (
                        <div className="absolute top-full right-0 mt-2 z-10 text-black rounded">
                            <ul className="list-none m-0 p-2 bg-gray-100 text-sm rounded shadow">
                                {!userData.isAccountVerified && (
                                    <li
                                        onClick={sendVerificationOtp}
                                        className="py-1 px-2 hover:bg-gray-200 cursor-pointer whitespace-nowrap"
                                    >
                                        Verify email
                                    </li>
                                )}
                                <li
                                    onClick={logout}
                                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10"
                                >
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <button
                    onClick={() => navigate("/login")}
                    className="flex items-center gap-2 cursor-pointer
                    border border-gray-500 rounded-full px-6 py-2 text-gray-800
                    hover:bg-gray-100 transition-all duration-300"
                >
                    Login
                    <img src={assets.arrow_icon} alt="" />
                </button>
            )}
        </div>
    )
}