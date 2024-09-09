import Link from "next/link";
import {
  SvgBag,
  SvgPinecone,
  SvgSearch,
  SvgLogin,
} from "../../components/ui/assets/Svgs";

export const Navbar = () => {
  return (
    <div className="max-w-[1258px] m-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <SvgPinecone />
          <div className="flex items-start gap-2">
            <Link href="">НҮҮР</Link>
            <Link href="">ХООЛНЫ ЦЭС</Link>
            <Link href="">ХҮРГЭЛТИЙН БҮС</Link>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex w-[260px] items-start gap-2 px-2 py-4 border-[1px] rounded-lg border-solid">
            <button>
              <SvgSearch />
            </button>
            <input placeholder="Хайх"></input>
          </div>
          <Link className="flex w-[102px] px-2 py-4 items-center gap-2" href="">
            <SvgBag /> Сагс
          </Link>
          <Link className="flex w-[102px] px-2 py-4 items-center gap-2" href="">
            <SvgLogin /> Нэвтрэх
          </Link>
        </div>
      </div>
    </div>
  );
};
