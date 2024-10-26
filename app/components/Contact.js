"use client";
import React from "react";
import {
  Envelope,
  FacebookLogo,
  Globe,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

const InformationPage = () => {
  return (
    <div>
      <div className="bg-blue-800">
        <h1 className="p-5 bg-blue-900 text-center font-semibold text-white ">
          DINAS KOMINFO KAB. SEMARANG
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center p-2 bg-blue-600 gap-4 md:gap-6 text-white">
        <Link
          href="https://www.instagram.com/kominfo.kabsemarang?igsh=MWRieHl5cG5qYWl3cQ=="
          target="_blank"
          className="flex items-center gap-2 text-xs"
        >
          <InstagramLogo size={20} />
          kominfo.kabsemarang
        </Link>
        <Link
          href="kominfo@semarangkab.go.id"
          target="_blank"
          className="flex items-center gap-2 text-xs"
        >
          <Envelope size={20} />
          kominfo@semarangkab.go.id
        </Link>
        <Link
          href="https://www.youtube.com/results?search_query=kominfo+kabupaten+semarangs"
          target="_blank"
          className="flex items-center gap-2 text-xs"
        >
          <YoutubeLogo size={20} />
          Kominfo Kabupaten Semarang
        </Link>
        <Link
          href="https://www.facebook.com/diskominfokabsemarang"
          target="_blank"
          className="flex items-center gap-2 text-xs"
        >
          <FacebookLogo size={20} />
          Diskominfo Kab. Semarang
        </Link>
        <Link
          href="https://diskominfo.semarangkab.go.id"
          target="_blank"
          className="flex items-center gap-2 text-xs"
        >
          <Globe size={20} />
          Diskominfo.semarangkab.go.id
        </Link>
      </div>
    </div>
  );
};

export default InformationPage;
