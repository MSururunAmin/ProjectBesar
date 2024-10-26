"use client";
import { useState } from "react";
import Link from "next/link";
import { House, ListChecks, Question, User, X } from "@phosphor-icons/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="h-full w-16 sm:w-20 lg:w-24 bg-transparent">
        <div className="flex flex-col justify-between h-full">
          {/* Tombol Hamburger */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Menu Sidebar Vertikal di Kiri */}
          {isOpen && (
            <>
              {/* Overlay Background */}
              <div
                className="fixed inset-0 bg-black opacity-50 z-10"
                onClick={toggleMenu}
              ></div>

              <div className="fixed left-0 top-0 h-full w-64 bg-blue-800 text-white flex flex-col justify-between z-20 sm:w-72 md:w-80 transition-transform duration-300 transform translate-x-0">
                {/* Tombol Close di Pojok Kiri Atas */}
                <div className="flex justify-end p-4">
                  <button
                    onClick={toggleMenu}
                    className="text-white hover:text-gray-400 focus:outline-none"
                  >
                    <X size={25} />
                  </button>
                </div>

                {/* Menu Links */}
                <div className="flex flex-col space-y-4 pl-4 mb-4">
                  <Link
                    href="/"
                    className="flex items-center px-4 py-2 hover:bg-purple-700 gap-3"
                  >
                    <House size={32} />
                    <span>Beranda</span>
                  </Link>
                  <Link
                    href="/components/FormStatus"
                    className="flex items-center px-4 py-2 hover:bg-purple-700 gap-3"
                  >
                    <ListChecks size={32} />
                    <span>Cek Status Permohonan</span>
                  </Link>
                  <Link
                    href="/faq"
                    className="flex items-center px-4 py-2 hover:bg-purple-700 gap-3"
                  >
                    <Question size={32} />
                    <span>FAQ</span>
                  </Link>
                  <Link
                    href="/tentangkami"
                    className="flex items-center px-4 py-2 hover:bg-purple-700 gap-3"
                  >
                    <User size={32} />
                    <span>Tentang Kami</span>
                  </Link>
                </div>

                {/* Tombol Masuk */}
                <div className="flex flex-col items-center mb-40">
                  <Link
                    href="/login"
                    className="bg-white text-purple-800 hover:bg-gray-200 px-14 py-2 rounded-md"
                  >
                    Masuk
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
