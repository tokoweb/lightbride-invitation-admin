import InvoiceTable from "@/components/invoice-table";

const Pembayaran = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between px-2">
        <h3>Data Pembayaran</h3>
      </div>
      <div className="mt-6 rounded-xl bg-white p-6">
        <InvoiceTable />
      </div>
    </>
  );
};
export default Pembayaran;
