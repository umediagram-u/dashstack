"use client";
import Image from "next/image";
import Link from "next/link";
import img from "../assets/images/404.svg";
import { Button } from "@/Components";

export default function NotFound() {
  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/images/bg.svg')" }}
    >
      <div className="py-[120px] px-[102px] rounded-[24px] border-[#B9B9B9] border-[0.3px] border-solid bg-white flex items-center justify-between flex-col gap-[98.97px]">
        <Image src={img} width={389.999} height={296.925} alt="404 not found" />
        <div className="flex justify-between items-center flex-col gap-[35px]">
          <h2 className="text-[32px] font-bold tracking-[-0.114px] text-[#202224]">
            Looks like you’ve got lost….
          </h2>
          <Button
            text="Back to Dashboard"
            width="418px"
            height="56px"
            tracking="-0.071px"
            fontSize="20px"
            route="/"
          />
        </div>
      </div>
    </div>
  );
}
