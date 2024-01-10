"use client";

import OrdersTable from "@/components/orders/table";

const Pengguna = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between px-2">
        <h3>Data Pengguna</h3>
      </div>
      <div className="mt-6 rounded-xl bg-white p-6">
        <OrdersTable />
      </div>
    </>
  );
};
export default Pengguna;
