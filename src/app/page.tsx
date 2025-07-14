'use client';
import Image from "next/image";
import TextField from '@mui/material/TextField';
export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative flex flex-col bg-black sm:bg-[url('/img/netfilx-login-wallpaper.jpg')] bg-top grow">
        <div className="absolute inset-0 bg-black/50 z-0"/>
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
          <div className="bg-black/80 w-[30rem] h-[75vh] rounded-sm"> {/* bg-black bg-opacity-80 ใช้ไม่ได้ใน next 13+ เลยต้องใช้ bg-black/80 */}
            <div className="flex flex-col container-from text-white w-full h-full sm:p-10">
              <div className="text-[2rem] font-bold">เข้าสู่ระบบ</div>
              <div className="">
                 <TextField id="filled-basic" label="Filled" variant="filled" />
              </div>
              <div>1</div>
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
