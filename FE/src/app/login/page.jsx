"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const buttonStyle = {
  empty: "",
  notEmpty: "",
};

const Login = () => {
  const [inputData, setInputData] = useState({ email: "", password: "" });

  const handleOnchange = (event) => {
    setInputData();
  };

  console.log(inputData);

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="inline-flex flex-col items-start gap-12 p-8">
        <p className="w-[384px] text-center text-3xl font-bold text-[#0D1118;]">
          Нэвтрэх
        </p>

        <div className="flex w-[384px] flex-col items-start gap-2">
          <div className="flex flex-col items-start gap-[1px] self-stretch">
            <p>Имэйл</p>
            <Input
              name="email"
              onChange={handleOnchange}
              placeholder="Имэйл хаягаа оруулна уу"
            />
          </div>
          <div className="flex flex-col px-2 py-4 justify-between items-start self-stretch">
            <p>Нууц үг</p>
            <div className="flex items-center">
              <Input
                name="password"
                onChange={handleOnchange}
                placeholder="Нууц үг"
              />
              {/* <SvgEye /> */}
            </div>
          </div>
          <p>Нууц үг сэргээх</p>
          <div className="flex flex-col gap-8 w-full items-center">
            <Button className="w-full text-[#1C20243D] border-solid border-[1px] bg-[#EEEFF2]">
              Нэвтрэх
            </Button>
            <p className="">эсвэл</p>
            <Button
              className={
                inputData.email.length > 0 && inputData.password.length > 0
                  ? buttonStyle.notEmpty
                  : buttonStyle.empty
              }
            >
              Бүртгүүлэх
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
