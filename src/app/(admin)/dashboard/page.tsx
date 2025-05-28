"use client";
// import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
// import DemographicCard from "@/components/ecommerce/DemographicCard";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// export const metadata: Metadata = {
//   title:
//     "DailyCart",
//   description: "One Stop Dashboard for your business",
// };



export default function Ecommerce() {
  const { authData } = useAuth();
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    if (!authData) {
      router.replace('/'); // Use replace to prevent back navigation
    } else {
      setCheckingAuth(false); // Auth confirmed, allow render
    }
  }, [authData, router]);

  if (checkingAuth) return null;
  // If authData is null, redirect to home page
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <EcommerceMetrics />

        <MonthlySalesChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <MonthlyTarget />
      </div>

      <div className="col-span-12">
        <StatisticsChart />
      </div>

      {/* <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div> */}

      <div className="col-span-12">
        <RecentOrders />
      </div>
    </div>
  );
}
