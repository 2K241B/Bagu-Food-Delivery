import Link from "next/link";
import { SvgPinecone } from "./ui/assets/Svgs";

export const Navbar = () => {
  return (
    <div className="max-w-[1258px] m-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <SvgPinecone />

          <Link href="">НҮҮР</Link>
          <Link href="">ХООЛНЫ ЦЭС</Link>
          <Link href="">ХҮРГЭЛТИЙН БҮС</Link>
        </div>
        <div>2</div>
      </div>
    </div>
  );
};
