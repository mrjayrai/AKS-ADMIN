import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DailyCart-SignIn",
  description: "DailyCart-SignIn Page",
};

export default function Sign() {
 redirect("/signin");
}