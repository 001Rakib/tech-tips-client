"use server";

import axiosInstance from "@/src/lib/Axios";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const res = axiosInstance.post("/auth/signup", userData);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
