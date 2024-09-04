import mongoose, { mongo } from "mongoose";

export const Connect = async (uri) => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.error(error);
  }
};
