'use client';
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { useForm, SubmitHandler } from "react-hook-form"


type InputsLogin = {
  username: string
  password: string
}

export default function Home() {


  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm<InputsLogin>();

  const usernameValue = watch("username");
  const passwordValue = watch("password");

  const [action_username, handleErrorUsername] = useState({
    value: '',
    check: false
  });

  const [action_pass, handleErrorPass] = useState({
    value: '',
    check: false
  })

  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);

  const validateLoginForm = (username: string, password: string) => {
    let isValid = true;
    
    // เช็ค Email
    if (!username) {
      handleErrorUsername({
        value: 'โปรดระบุอีเมลหรือหมายเลขโทรศัพท์ที่ถูกต้อง',
        check: true,
      });
      isValid = false;
    } else {
      console.log(username)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(username)) {
        handleErrorUsername({
          value: 'โปรดระบุอีเมลที่ถูกต้อง',
          check: true,
        });
        isValid = false;
      } else {
        handleErrorUsername({
          value: '',
          check: false,
        });
      }
    }

    // เช็ครหัสผ่าน
    if (!password) {
      handleErrorPass({
        value: 'โปรดระบุรหัสผ่าน',
        check: true,
      });
      isValid = false;
    } else {
      const passRegex = /^.{4,60}$/;
      if (!passRegex.test(password)) {
        handleErrorPass({
          value: 'รหัสผ่านต้องมีอักขระ 4 ถึง 60 ตัว',
          check: true,
        });
        isValid = false;
      } else {
        handleErrorPass({
          value: '',
          check: false,
        });
      }
    }
    return isValid;
  };
  // เปลี่ยน SubmitHandler เป็น funtion เข้า path ต่อไปเมื่อมีการ login
  const onLogin: SubmitHandler<InputsLogin> = (data) => validateLoginForm(data.username, data.password);
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
        <form className="flex justify-center items-center sm:mb-15 z-10" onSubmit={handleSubmit(onLogin)}>
          <div className="bg-black/70 w-[30rem] h-[75vh] rounded-sm"> {/* bg-black bg-opacity-80 ใช้ไม่ได้ใน next 13+ เลยต้องใช้ bg-black/80 */}
            <div className="flex flex-col container-from text-white w-full h-full px-5 sm:px-15 sm:py-10">
              <div className="text-[2rem] font-black">เข้าสู่ระบบ</div>
              <div className="mt-6">
                <div
                  className={clsx(
                    "flex relative items-center justify-center mt-4 p-[2px] border-2 rounded-[8px] transition-all duration-300",
                    usernameFocused ? "border-white" : "border-transparent"
                  )}
                >
                  <div
                    className={clsx(
                      "relative transition-all duration-300 w-full rounded-[5px] border-2 bg-black/70", !action_username.check ? "border-zinc-600" : "border-red-500"
                    )}
                  >
                    <label
                      htmlFor="username-input"
                      className={clsx(`absolute left-4 text-zinc-400 font-bold transition-all duration-200 cursor-text`, usernameFocused || usernameValue ? "top-2 text-xs" : "top-1/2 -translate-y-1/2 text-base")}>
                      อีเมลหรือหมายเลขโทรศัพท์มือถือ
                    </label>
                    <input
                      id="username-input"
                      autoComplete="off"
                      type="text"
                      {...register("username")}
                      // value={username.value}
                      // onChange={(e) => {
                      //   setEmail(prev => ({ ...prev, value: e.target.value }))
                      //   checkEmail(e.target.value)
                      // }}
                      // onClick={() => {
                      //   if (usernameFocused) {
                      //     handleErrorUsername({ ...action_username, check: false })
                      //   } else {
                      //     handleErrorUsername({ ...action_username, check: true })
                      //   }
                      // }}
                      onFocus={() => setUsernameFocused(true)}
                      onBlur={() => setUsernameFocused(false)}
                      className="w-full bg-transparent text-white pt-6 pb-2 px-4 outline-none"
                    />
                  </div>
                </div>
                {action_username.check &&
                  <div className="flex text-red-500 text-xs items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {action_username.value}
                  </div>
                }
              </div>
              <div
                className={clsx(
                  "flex relative items-center justify-center mt-2 p-[2px] border-2 rounded-[8px] transition-all duration-300",
                  passFocused ? "border-white" : "border-transparent"
                )}
              >
                <div
                  className={clsx(
                    "relative transition-all duration-300 w-full rounded-[5px] border-2 bg-black/70", !action_pass.check ? "border-zinc-600" : "border-red-500"
                  )}
                >
                  <label
                    htmlFor="pass-input"
                    className={clsx(`absolute left-4 text-zinc-400 font-bold transition-all duration-200 cursor-text`, passFocused || passwordValue ? "top-2 text-xs" : "top-1/2 -translate-y-1/2 text-base")}>
                    รหัสผ่าน
                  </label>
                  <input
                    id="pass-input"
                    type="text"
                    {...register("password")}
                    autoComplete="off"
                    // value={passFocused}
                    // onChange={(e) => {
                    //   setPassword(prev => ({ ...prev, value: e.target.value }));
                    //   checkPass(e.target.value);
                    // }
                    // }
                    // onClick={() => {
                    //   if (password.focused) {
                    //     handleErrorPass({ ...action_pass, check: false })
                    //   } else {
                    //     handleErrorPass({ ...action_pass, check: true })
                    //   }
                    // }}
                    onFocus={() => setPassFocused(true)}
                    onBlur={() => setPassFocused(false)}
                    className="w-full bg-transparent text-white pt-6 pb-2 px-4 outline-none"
                  />
                </div>
              </div>
              {action_pass.check &&
                <div className="flex text-red-500 text-xs items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  {action_pass.value}
                </div>
              }
              <button className="border-2 border-white mt-4" type="submit">เข้าสู่ระบบ</button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-items-end h-[40vh] bg-[#161616] text-white">
        Footer content here
      </div>
    </div>
  );
}
