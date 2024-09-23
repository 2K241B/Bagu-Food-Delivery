"use client";

import { SvgEye } from "@/components/Svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import _ from "lodash";
import { axiosInstance } from "@/lib/axios";
import { Label } from "@/components/ui/label";

const Login = () => {
  const router = useRouter();
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const togglePasswordVisibility = () => setIsHidePassword((prev) => !prev);
  const Icon = isHidePassword ? SvgEye : SvgEye;

  const handleOnChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const debounceFn = useMemo(() => _.debounce(handleOnChange, 500), []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      if (response.status === 200) router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col max-w-[448px] p-8 rounded-2xl gap-12 m-auto">
        <Label className="text-center text-[#0D1118] font-bold text-[28px]">
          Нэвтрэх
        </Label>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1 mb-2">
            <Label htmlFor="email">Имэйл</Label>
            <Input
              name="email"
              type="email"
              onChange={debounceFn}
              className="bg-[#F7F7F8] text-[#8B8E95]"
              placeholder="Имэйл хаягаа оруулна уу"
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Нууц үг</Label>
            <Input
              name="password"
              type={isHidePassword ? "password" : "text"}
              onChange={debounceFn}
              className="bg-[#F7F7F8] text-[#8B8E95]"
              placeholder="Нууц үг"
              required
              endIcon={
                <Icon
                  onClick={togglePasswordVisibility}
                  className="cursor-pointer"
                />
              }
            />
          </div>
          <Label className="text-end">Нууц үг сэргээх</Label>
        </div>
        <div className="flex flex-col gap-8 text-center">
          <Button
            disabled={
              formData.email.length > 0 && formData.password.length > 0
                ? false
                : true
            }
            type="submit"
          >
            Нэвтрэх
          </Button>
          <Label>Эсвэл</Label>
          <Button className="bg-transparent border border-[#18BA51] text-[#272727]">
            Бүртгүүлэх
          </Button>
        </div>
      </div>
    </form>
  );
};
export default Login;

// export const Login = () => {
//   return (
//     <div className="flex w-full h-screen items-center justify-center">
//       <div className="inline-flex flex-col items-start gap-12 p-8">
//         <p className="w-[384px] text-center text-3xl font-bold text-[#0D1118;]">
//           Нэвтрэх
//         </p>

//         <div className="flex w-[384px] flex-col items-start gap-2">
//           <div className="flex flex-col items-start gap-[1px] self-stretch">
//             <p>Имэйл</p>
//             <Input
//               className="border-solid bg-[#ECEDF0]"
//               placeholder="Имэйл хаягаа оруулна уу"
//             />
//           </div>
//           <div className="flex flex-col py-4 justify-between items-start self-stretch">
//             <p>Нууц үг</p>
//             <div className="flex items-center w-full bg-[#ECEDF0] rounded-[4px] px-0">
//               <Input
//                 className="border-solid bg-[#ECEDF0] w-full"
//                 placeholder="Нууц үг"
//               />
//               <SvgEye />
//             </div>
//           </div>
//           <p>Нууц үг сэргээх</p>
//           <div className="flex flex-col gap-8 w-full items-center">
//             <Button className="w-full text-[#1C20243D] border-solid border-[1px] bg-[#EEEFF2]">
//               Нэвтрэх
//             </Button>
//             <p className="">эсвэл</p>
//             <Button className="w-full text-black bg-white border-solid border-[1px] border-[#18BA51]">
//               Бүртгүүлэх
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
