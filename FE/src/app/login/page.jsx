import { SvgEye } from "@/components/Svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Login = () => {
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
              className="border-solid bg-[#ECEDF0]"
              placeholder="Имэйл хаягаа оруулна уу"
            />
          </div>
          <div className="flex flex-col py-4 justify-between items-start self-stretch">
            <p>Нууц үг</p>
            <div className="flex items-center w-full bg-[#ECEDF0] rounded-[4px] px-0">
              <Input
                className="border-solid bg-[#ECEDF0] w-full"
                placeholder="Нууц үг"
              />
              <SvgEye />
            </div>
          </div>
          <p>Нууц үг сэргээх</p>
          <div className="flex flex-col gap-8 w-full items-center">
            <Button className="w-full text-[#1C20243D] border-solid border-[1px] bg-[#EEEFF2]">
              Нэвтрэх
            </Button>
            <p className="">эсвэл</p>
            <Button className="w-full text-black bg-white border-solid border-[1px] border-[#18BA51]">
              Бүртгүүлэх
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
