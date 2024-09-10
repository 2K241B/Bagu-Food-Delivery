import Link from "next/link";
import {
  SvgFacebook,
  SvgInstagram,
  SvgTwitter,
  SvgFooterFoods,
  SvgPinecone,
} from "@/components/ui/assets/Svgs";

const links = [
  {
    href: "",
    title: "Нүүр",
  },
  {
    href: "",
    title: "Холбоо барих",
  },
  {
    href: "",
    title: "Хоолны цэс",
  },
  {
    href: "",
    title: "Үйлчилгээний нөхцөл",
  },
  {
    href: "",
    title: "Хүргэлтийн бүс",
  },
  {
    href: "",
    title: "Нууцлалын бодлого",
  },
];

export const Footer = () => {
  return (
    <div className="bg-[#18BA51] relative items-center flex flex-col">
      <div className="z-10">
        <div className="py-[120px] max-w-[1258px] m-auto items-center flex flex-col gap-10">
          <div className="flex text-white items-center gap-2">
            <SvgPinecone />
            <p className="text-[20px] font-bold">Food Delivery</p>
          </div>
          <div className="min-w-[1200px] flex justify-between">
            {links.map((link, i) => (
              <Link
                className="text-white font-semibold"
                key={link.title + i}
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <SvgFacebook />
            <SvgInstagram />
            <SvgTwitter />
          </div>
          <div className="w-full h-[1px] bg-white"></div>
          <div className="text-white flex flex-col items-center gap-2">
            <p>© 2024 Pinecone Foods LLC </p>
            <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </div>
      <div className="absolute top-0">
        <SvgFooterFoods />
      </div>
    </div>
  );
};
