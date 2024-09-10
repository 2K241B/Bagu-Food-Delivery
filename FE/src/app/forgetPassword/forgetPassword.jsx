import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const ForgetPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[86px]">
      <div className="flex w-[448px] p-8 flex-col justify-center items-start gap-12">
        <p className="w-[384px] text-center text-3xl font-bold text-[#0D1118;]">
          Нууц үг сэргээх
        </p>
        <p>Имэйл</p>
        <Input placeholder="Имэйл хаягаа оруулна уу" />
        <Button className="w-full bg-[#EEEFF2] text-[#1C20243D]">
          Үргэлжлүүлэх
        </Button>
      </div>
    </div>
  );
};
