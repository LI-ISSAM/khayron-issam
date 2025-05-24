"use client";
import Nav from "@/Components/Navbar";
import Button from "@/Components/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
    // Form state
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", {
            username,
            email,
            phone,
            password,
        });
        // You can now send this data to your API or database
    };
    const router = useRouter();
    const handleRedirect = () => {
        router.push("/LandingPage"); // Change this path
    };
    return (
        <div className="min-h-screen bg-[#1e1e1e] text-white flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-[#1e1e1e] flex flex-col justify-center">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-2">
                        <img src="/image/logo.png" alt="Khayroun Logo" className="w-9 h-10" />
                        <img src="/image/KHAYRON.png" alt="Khayroun Text" className="h-4" />
                    </div>
                    <Button
                        onClick={handleRedirect}
                        className="text-white text-3xl"
                    >
                        &times;
                    </Button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 px-5">
                    <div>
                        <label className="block mb-1 text-sm font-['Average']">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@gmail.com"
                            className="w-full font-['Average'] px-4 py-3 rounded-[10px] border border-gray-600 bg-transparent placeholder-gray-400"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full py-3 mt-2 bg-[#3B6F70] hover:bg-teal-800 rounded-[5px] text-white text-lg font-['Average']"
                    >
                        Send
                    </Button>
                </form>
            </div>
        </div>
    );
}
