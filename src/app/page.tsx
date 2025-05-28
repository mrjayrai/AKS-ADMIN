import SignIn from "@/app/(full-width-pages)/(auth)/signin/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DailyCart-SignIn",
  description: "DailyCart-SignIn Page",
};

export default function Sign() {
  return <SignIn />;
}