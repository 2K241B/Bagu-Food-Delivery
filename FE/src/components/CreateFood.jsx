"use client";
import { SvgNextMark, SvgToggleLeft, SvgXmark } from "./ui/assets/Svgs";
import { Input } from "@/components/ui/input";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { CldUploadWidget } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";

export const CreateFood = () => {
  const [image, setImage] = useState();

  const handleOnSuccess = (response) => {
    setImage(response.info.public_id);
    console.log(response);
  };

  console.log(image);

  return (
    <div className="flex w-[587px] flex-col items-start">
      <div className="flex px-6 py-4 justify-between items-center self-stretch">
        <button>
          <SvgXmark />
        </button>
        <h3 className="text-2xl font-bold">Create Food</h3>
        <button>
          <SvgNextMark />
        </button>
      </div>
      <div className="flex p-6 flex-col justify-center items-start gap-4 self-stretch">
        <label className="text-sm font-medium" htmlFor="Name">
          Хоолны нэр
        </label>
        <Input className="bg-[#F4F4F4]" placeholder="Placeholder" />
        <label className="text-sm font-medium" htmlFor="Name">
          Хоолны ангилал
        </label>
        <Input className="bg-[#F4F4F4]" placeholder="Placeholder" />
        <label className="text-sm font-medium" htmlFor="Name">
          Хоолны орц
        </label>
        <Input className="bg-[#F4F4F4]" placeholder="Placeholder" />
        <label className="text-sm font-medium" htmlFor="Name">
          Хоолны үнэ
        </label>
        <Input className="bg-[#F4F4F4]" placeholder="Placeholder" />
        <label className="text-sm font-medium" htmlFor="Name">
          <Switch />
          Хямдралтай эсэх
        </label>
        <Input className="bg-[#F4F4F4]" placeholder="Placeholder" />
        <label className="text-sm font-medium">Хоолны зураг</label>
      </div>
      <CldImage
        src={image} // Use this sample image or upload your own via the Media Explorer
        width="500" // Transform the image: auto-crop to square aspect_ratio
        height="500"
        alt="sd"
        crop={{
          type: "auto",
          source: true,
        }}
      />
      <CldUploadButton onSuccess={handleOnSuccess} uploadPreset="ImageData" />
      <div className="flex p-6 justify-end items-center gap-4 self-stretch">
        <Button>Clear</Button>
        <Button>Continue</Button>
      </div>
    </div>
  );
};
