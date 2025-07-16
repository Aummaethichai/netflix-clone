'use client';
import Image from "next/image";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col">
      <div className="relative flex flex-col bg-black sm:bg-[url('/img/netfilx-login-wallpaper.jpg')] bg-top grow">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10">
          <div className="flex sm:mx-5 w-[120px] md:mx-28 sm:w-[150px] justify-center">
            <Image
              src="/img/logo.png"
              alt="netflix-logo"
              width={180}
              height={100}
            />
          </div>
        </div>
        <div className="flex justify-center items-center sm:mb-15 z-10">
          <div className="bg-black/70 w-[30rem] h-[75vh] rounded-sm"> {/* bg-black bg-opacity-80 ใช้ไม่ได้ใน next 13+ เลยต้องใช้ bg-black/80 */}
            <div className="flex flex-col container-from text-white w-full h-full px-5 sm:px-15 sm:py-10">
              <div className="text-[2rem] font-black">เข้าสู่ระบบ</div>
              <div className="mt-6 focus:border-2 focus:border-white focus:rounded in-focus:border-2">
                <Box
                  component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField id="filled-basic" label="อีเมลหรือหมายเลขโทรศัพท์มือถือ" variant="filled" />
                </Box>
              </div>
              <div className="flex relative items-center justify-center bg-black/70 mt-4">
                <div className={clsx("relative transition-all duration-300 w-full rounded-[5px]", focused || value ? "border border-gray-300 bg-black/60" : "border border-gray-300 bg-black/40")}>
                  <label
                    htmlFor="login-input"
                    className={clsx(`absolute left-4 text-zinc-400 font-bold transition-all duration-200 cursor-text`, focused || value ? "top-2 text-xs" : "top-1/2 -translate-y-1/2 text-base")}>
                    อีเมลหรือหมายเลขโทรศัพท์มือถือ
                  </label>
                  <input
                    id="login-input"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="w-full bg-transparent text-white pt-6 pb-2 px-4 outline-none"
                  />
                </div>
              </div>
              <div>1</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-items-end h-[40vh] bg-[#161616] text-white">
        Footer content here
      </div>
    </div>
  );
}
