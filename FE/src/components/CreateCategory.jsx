import { SvgNext, SvgXbutton } from "./ui/assets/Svgs";
import { Input } from "./ui/input";

export const CreateCategory = () => {
  return (
    <div className="flex w-[587px] flex-col items-start">
      <div className="flex px-6 py-4 justify-between items-center self-stretch">
        <button>
          <SvgXbutton />
        </button>
        <p className="font-bold text-2xl"> Create new Category</p>
        <button>
          <SvgNext />
        </button>
      </div>
      <div className="flex p-6 flex-col justify-center items-start gap-4 self-stretch border-solid border-t-[1px] border-b-[1px]">
        <label>Category Name</label>
        <div className="flex flex-col justify-center items-center gap-2 self-stretch">
          <Input className="bg-[#F4F4F4]" placeholder="Placeholder" />
        </div>
      </div>
      <div className="flex p-6 justify-end items-center gap-4 self-stretch">
        <button>Clear</button>
        <button>Continue</button>
      </div>
    </div>
  );
};
