'use client';
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-[url('/img/netfilx-login-wallpaper.jpg')] bg-top grow">
        <div className="">
          <div className="mx-0 sm:mx-28">
            <Image
              src="/img/logo.png"
              alt="netflix-logo"
              width={180}
              height={100}
            />
          </div>
        </div>
        <div className="flex justify-center items-center mb-15">
          <div className="bg-black/80 w-[30rem] h-[75vh] rounded-sm"> {/* bg-black bg-opacity-80 ใช้ไม่ได้ใน next 13+ เลยต้องใช้ bg-black/80 */}
            <div className="flex flex-col container-from text-white w-full h-full p-10">
              <div className="text-[2rem] font-bold">เข้าสู่ระบบ</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-items-end h-[45vh] bg-[#161616]">
          Footer content here
      </div>
    </div>
  );
}
