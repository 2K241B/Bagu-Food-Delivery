"use client";
import { CldImage } from "next-cloudinary";
import { CldUploadWidget } from "next-cloudinary";

export default function Page() {
  return (
    <CldUploadWidget uploadPreset="ImageData">
      {({ open }) => {
        return <button onClick={() => open()}>Add Image</button>;
      }}
    </CldUploadWidget>
  );
}
