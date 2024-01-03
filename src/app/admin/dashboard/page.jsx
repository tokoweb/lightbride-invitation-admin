"use client";

import Link from "next/link";

import Button from "@mui/material/Button";

import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiHandCoins } from "react-icons/pi";
import { TbClockUp } from "react-icons/tb";

import DashboardCard from "@/components/dashboard/dashboard-card";
import InvoiceTable from "@/components/invoice-table";

const Dashboard = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between px-2">
        <h3>Dashboard</h3>
      </div>
      <div>
        <div className="flex flex-col gap-6 md:flex-row">
          <DashboardCard
            icon={<PiHandCoins />}
            label="Total Keuntungan"
            value={"Rp 270.000"}
          />
          <DashboardCard
            icon={<HiOutlineUserGroup />}
            label="Total Pengguna"
            value={7}
          />
          <DashboardCard
            icon={<TbClockUp />}
            label="Pending Request"
            value={0}
          />
        </div>
      </div>
      <div className="mt-6 rounded-xl bg-white p-6">
        <div className="mb-4 flex justify-between">
          <h3>Invoice</h3>
          <Link href={"/admin/pembayaran"}>
            <Button variant="contained">{"Lihat Lebih >"}</Button>
          </Link>
        </div>
        <InvoiceTable />
      </div>
    </>
  );
};
export default Dashboard;
