"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <>
      <div className="p-4 md:p-20">
        <div className="flex flex-wrap justify-center gap-10 md:gap-36">
          {/* Aplikasi */}
          <div className="flex flex-col items-center">
            <div
              className="cursor-pointer"
              onClick={() => toggleSection("aplikasi")}
            >
              <div
                className={`bg-white p-3 rounded-full transition-all duration-300 ${
                  activeSection === "aplikasi"
                    ? "shadow-2xl shadow-blue-500"
                    : ""
                }`}
                style={{ width: "100px", height: "100px" }}
              >
                <Image
                  src="/images/aplication.png"
                  width={70}
                  height={70}
                  alt="Aplikasi"
                />
              </div>
              <span
                className={`text-xl font-semibold block mt-3 transition-colors ${
                  activeSection === "aplikasi" ? "text-blue-500" : "text-white"
                }`}
              >
                Aplikasi
              </span>
            </div>
            {/* Daftar Aplikasi */}
            {activeSection === "aplikasi" && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-4 bg-gray-100 shadow-lg rounded-lg mt-4 border border-gray-300 w-full max-w-xl">
                <li className="py-2 px-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition">
                  <Link href="/Permohonan/hosting">Permohonan Hosting</Link>
                </li>
                <li className="py-2 px-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition">
                  <Link href="/Permohonan/email">
                    Permohonan Fasilitas Email
                  </Link>
                </li>
                <li className="py-2 px-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition">
                  <Link href="/progres">Permohonan Rekomendasi TIK</Link>
                </li>
                <li className="py-2 px-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition">
                  <Link href="/permohonan-reset-akun">
                    Permohonan Reset Akun
                  </Link>
                </li>
                <li className="py-2 px-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition">
                  <Link href="/permohonan-hak-akses">Permohonan Hak Akses</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Jaringan */}
          <div className="flex flex-col items-center">
            <div
              className="cursor-pointer"
              onClick={() => toggleSection("jaringan")}
            >
              <div
                className={`bg-white p-3 rounded-full transition-all duration-300 ${
                  activeSection === "jaringan"
                    ? "shadow-2xl shadow-blue-500"
                    : ""
                }`}
                style={{ width: "100px", height: "100px" }}
              >
                <Image
                  src="/images/network.png"
                  width={70}
                  height={70}
                  alt="Jaringan"
                />
              </div>
              <span
                className={`text-xl font-semibold block mt-3 transition-colors ${
                  activeSection === "jaringan" ? "text-blue-500" : "text-white"
                }`}
              >
                Jaringan
              </span>
            </div>
            {/* Daftar Jaringan */}
            {activeSection === "jaringan" && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-4 bg-gray-100 shadow-lg rounded-lg mt-4 border border-gray-300 w-full max-w-xl">
                <li className="py-2 px-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition">
                  <Link href="/permohonan-zoom">Permohonan Zoom</Link>
                </li>
                <li className="py-2 px-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition">
                  <Link href="/permohonan-colocation">
                    Permohonan Colocation
                  </Link>
                </li>
                <li className="py-2 px-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition">
                  <Link href="/peminjaman-alat-jaringan">
                    Peminjaman Alat Jaringan
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Troubleshooting */}
          <div className="flex flex-col items-center">
            <div
              className="cursor-pointer"
              onClick={() => toggleSection("troubleshoot")}
            >
              <div
                className={`bg-white p-3 rounded-full transition-all duration-300 ${
                  activeSection === "troubleshoot"
                    ? "shadow-2xl shadow-blue-500"
                    : ""
                }`}
                style={{ width: "100px", height: "100px" }}
              >
                <Image
                  src="/images/troubleshooting.png"
                  width={70}
                  height={70}
                  alt="Troubleshoot"
                />
              </div>
              <span
                className={`text-xl font-semibold block mt-3 transition-colors ${
                  activeSection === "troubleshoot"
                    ? "text-blue-500"
                    : "text-white"
                }`}
              >
                Troubleshoot
              </span>
            </div>
            {/* Daftar Troubleshooting */}
            {activeSection === "troubleshoot" && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-4 bg-gray-100 shadow-lg rounded-lg mt-4 border border-gray-300 w-full max-w-xl">
                <li className="py-2 px-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition">
                  <Link href="/form/troubleshoot">Jaringan</Link>
                </li>
                <li className="py-2 px-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition">
                  <Link href="/troubleshoot-web">Web</Link>
                </li>
                <li className="py-2 px-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition">
                  <Link href="/troubleshoot-server">Server</Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="text-center items-center mb-5 mt-10">
          <Link
            href="https://diskominfo.semarangkab.go.id/"
            className="text-white font-semibold border border-white rounded-lg px-4 py-3 hover:bg-white hover:text-blue-500 focus:bg-blue-500 focus:text-white transition-all inline-block"
          >
            Laman DISKOMINFO
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
