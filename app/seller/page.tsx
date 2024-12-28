import SellerDashboard from "@/components/SellerDashboard";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Seller = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/");

  return (
    <div className="py-24 min-h-screen bg-gray-50">
      <SellerDashboard />
    </div>
  );
};

export default Seller;
