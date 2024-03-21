import { Link, Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar({ auth }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Head title="Welcome" />
            <div
                className={`hidden lg:block fixed top-0 w-full z-10 ${
                    isScrolled ? "bg-white shadow-md" : ""
                }`}
            >
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <div className="flex items-center">
                        <h1 className="font-bold text-xl text-black">Med</h1>
                        <h1 className="font-bold text-xl text-green-500">
                            Farm
                        </h1>
                    </div>
                    <div className="flex items-center">
                        <ul className="flex gap-8">
                            <li>
                                <span
                                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                                    onClick={closeNavbar}
                                >
                                    <span className="underline"></span>
                                    Beranda
                                </span>
                            </li>
                            <li>
                                <span
                                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                                    onClick={closeNavbar}
                                >
                                    <span className="underline"></span>
                                    Produk
                                </span>
                            </li>
                            <li>
                                <span
                                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                                    onClick={closeNavbar}
                                >
                                    <span className="underline"></span>
                                    Layanan
                                </span>
                            </li>
                            <li>
                                <span
                                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                                    onClick={closeNavbar}
                                >
                                    <span className="underline"></span>
                                    Cari Obat
                                </span>
                            </li>
                            <li>
                                <span
                                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                                    onClick={closeNavbar}
                                >
                                    <span className="underline"></span>
                                    Lokasi
                                </span>
                            </li>
                            <li>
                                <span
                                    className="nav cursor-pointer text-black hover:text-green-500 relative font-bold"
                                    onClick={closeNavbar}
                                >
                                    <span className="underline"></span>
                                    {auth.user ? (
                                        <Link href={route("dashboard")}>
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link href={route("login")}>
                                                Admin
                                            </Link>
                                        </>
                                    )}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden fixed top-0 w-full z-10">
                <div
                    className={`container mx-auto px-4 py-6 ${
                        isScrolled || isOpen ? "bg-white shadow-md" : ""
                    }`}
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <h1 className="font-bold text-xl text-black">
                                Med
                            </h1>
                            <h1 className="font-bold text-xl text-green-500">
                                Farm
                            </h1>
                        </div>
                        <div className="lg:hidden">
                            <button
                                onClick={toggleNavbar}
                                className="text-black focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
                    transition={{ duration: 0.3 }}
                    className={`container mx-auto px-4 py-6 ${
                        isOpen ? "block" : "hidden"
                    } ${isScrolled || isOpen ? "bg-white shadow-md" : ""}`}
                >
                    <ul className="flex flex-col gap-4">
                        <motion.li
                            whileHover={{ scale: 1 }}
                            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
                            onClick={closeNavbar}
                        >
                            <span className="hover:underline">Beranda</span>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1 }}
                            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
                            onClick={closeNavbar}
                        >
                            <span className="hover:underline">Produk</span>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1 }}
                            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
                            onClick={closeNavbar}
                        >
                            <span className="hover:underline">Layanan</span>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1 }}
                            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
                            onClick={closeNavbar}
                        >
                            <span className="hover:underline">Cari Obat</span>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1 }}
                            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
                            onClick={closeNavbar}
                        >
                            <span className="hover:underline">Lokasi</span>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1 }}
                            className="cursor-pointer text-black hover:text-green-500 relative font-bold"
                            onClick={closeNavbar}
                        >
                            <span className="hover:underline">Admin</span>
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
        </>
    );
}
