'use client';
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
  const [username, setEmail] = useState({
    value: '',
    focused: false
  });
  const [password, setPassword] = useState({
    value: '',
    focused: false
  });

  const [textErrorEmail, setTextErrorEmail] = useState({
    value: '',
    check: false
  });

  const [textErrorPass, setTextErrorPass] = useState({
    value: '',
    check: false
  })

  const checkEmail = (username: string) => {
    if (!username) {
      return setTextErrorEmail({
        value: 'โปรดระบุอีเมลหรือหมายเลขโทรศัพท์ที่ถูกต้อง',
        check: true,
      })
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(username)) {
        return setTextErrorEmail({
          value: 'โปรดระบุอีเมลที่ถูกต้อง',
          check: true,
        })
      } else {
        return setTextErrorEmail({
          value: '',
          check: false,
        })
      }
    }
  }

  const checkPass = (password: string) => {
    if (!password) {
      return setTextErrorPass({
        value: 'โปรดระบุอีเมลหรือหมายเลขโทรศัพท์ที่ถูกต้อง',
        check: true,
      })
    } else {
      const passRegex = /^.{4,60}$/;
      if (!passRegex.test(password)) {
        return setTextErrorPass({
          value: 'รหัสผ่านต้องมีอักขระ 4 ถึง 60 ตัว',
          check: true,
        })
      } else {
        return setTextErrorPass({
          value: '',
          check: false,
        })
      }
    }
  }
  return (
    <div className="flex flex-col">
      <div className="relative flex flex-col bg-black sm:bg-[url('/img/netfilx-login-wallpaper.jpg')] bg-top grow">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10">
          <div className="flex sm:mx-5 w-[120px] 2xl:mx-100 md:mx-28 sm:w-[150px] justify-center">
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
                <div className="flex relative items-center justify-center bg-black/70 mt-4">
                  <div className={clsx("relative transition-all duration-300 w-full rounded-[5px]", username.focused || username.value ? "border border-gray-300 bg-black/60" : "border border-gray-300 bg-black/40")}>
                    <label
                      htmlFor="username-input"
                      className={clsx(`absolute left-4 text-zinc-400 font-bold transition-all duration-200 cursor-text`, username.focused || username.value ? "top-2 text-xs" : "top-1/2 -translate-y-1/2 text-base")}>
                      อีเมลหรือหมายเลขโทรศัพท์มือถือ
                    </label>
                    <input
                      id="username-input"
                      autoComplete="off"
                      type="text"
                      value={username.value}
                      onChange={(e) => {
                        setEmail(prev => ({ ...prev, value: e.target.value }))
                        checkEmail(e.target.value)
                      }}
                      onClick={() => {
                      if (username.focused) {
                        setTextErrorEmail({ ...textErrorEmail, check: false })
                      } else {
                        setTextErrorEmail({ ...textErrorEmail, check: true })
                      }
                    }}
                      onFocus={() => setEmail(prev => ({ ...prev, focused: true }))}
                      onBlur={() => setEmail(prev => ({ ...prev, focused: false }))}
                      className="w-full bg-transparent text-white pt-6 pb-2 px-4 outline-none"
                    />
                  </div>
                </div>
                {textErrorEmail.check  &&
                  <div className="flex text-red-500 text-xs items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {textErrorEmail.value}
                  </div>
                }
              </div>
              <div className="flex relative items-center justify-center bg-black/70 mt-4">
                <div className={clsx("relative transition-all duration-300 w-full rounded-[5px]", password.value || password.focused ? "border border-gray-300 bg-black/60" : "border border-gray-300 bg-black/40")}>
                  <label
                    htmlFor="pass-input"
                    className={clsx(`absolute left-4 text-zinc-400 font-bold transition-all duration-200 cursor-text`, password.value || password.focused ? "top-2 text-xs" : "top-1/2 -translate-y-1/2 text-base")}>
                    รหัสผ่าน
                  </label>
                  <input
                    id="pass-input"
                    type="text"
                    autoComplete="off"
                    value={password.value}
                    onChange={(e) => {
                      setPassword(prev => ({ ...prev, value: e.target.value }));
                      checkPass(e.target.value);
                    }
                    }
                    onClick={() => {
                      if (password.focused) {
                        setTextErrorPass({ ...textErrorPass, check: false })
                      } else {
                        setTextErrorPass({ ...textErrorPass, check: true })
                      }
                    }}
                    onFocus={() => setPassword(prev => ({ ...prev, focused: true }))}
                    onBlur={() => setPassword(prev => ({ ...prev, focused: false }))}
                    className="w-full bg-transparent text-white pt-6 pb-2 px-4 outline-none"
                  />
                </div>
              </div>
              {textErrorPass.check &&
                <div className="flex text-red-500 text-xs items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  {textErrorPass.value}
                </div>
              }
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
