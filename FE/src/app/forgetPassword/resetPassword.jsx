import { SvgEye } from "@/components/ui/assets/Svgs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const ResetPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[86px]">
      <div className="flex w-[448px] p-8 flex-col justify-center items-start gap-12">
        <p className="w-[384px] text-center text-3xl font-bold text-[#0D1118;]">
          Нууц үг сэргээх
        </p>
        <p>Таны example@pinecone.mn хаяг руу сэргээх код илгээх болно. </p>
        <p className="text-sm font-normal text-center">Нууц үг сэргээх код</p>
        <Input placeholder="Имэйл хаягаа оруулна уу" />
        <Button className="w-full bg-[#EEEFF2] text-[#1C20243D]">
          Үргэлжлүүлэх
          <SvgEye />
        </Button>
      </div>
    </div>
  );
};
