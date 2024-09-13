import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SvgCheck } from "@/components/ui/assets/Svgs";
export const Signup = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-[448px] p-8 flex-col justify-center items-center gap-12">
        <p className="w-[384px] text-center text-3xl font-bold text-[#0D1118;]">
          Бүртгүүлэх
        </p>
        <div className="flex w-[384px] flex-col items-start gap-2">
          <div className="flex flex-col items-start gap-[1px] self-stretch">
            <p>Нэр</p>
            <Input placeholder="Нэрээ оруулна уу" />
          </div>
          <div className="flex flex-col items-start gap-[1px] self-stretch">
            <p>И-мэйл</p>
            <Input placeholder="И-мэйл хаягаа оруулна уу" />
          </div>
          <div className="flex flex-col items-start gap-[1px] self-stretch">
            <p>Хаяг</p>
            <Input placeholder="Та хаягаа оруулна уу" />
          </div>
          <div className="flex flex-col items-start gap-[1px] self-stretch">
            <p>Нууц үг</p>
            <Input placeholder="Нууц үгээ оруулна уу" />
          </div>
          <div className="flex flex-col items-start gap-[1px] self-stretch">
            <p>Нууц үг давтах</p>
            <Input placeholder="Нууц үгээ оруулна уу" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex px-2 py-4 justify-center items-center gap-2 self-stretch">
            <Button>
              <SvgCheck />
            </Button>
            <p>Үйлчилгээний нөхцөл зөвшөөрөх</p>
          </div>
          <Button className="w-full text-black bg-white border-solid border-[1px] border-[#18BA51]">
            Бүртгүүлэх
          </Button>
        </div>
      </div>
    </div>
  );
};
