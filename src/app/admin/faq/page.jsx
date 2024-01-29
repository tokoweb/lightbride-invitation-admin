import FaqTable from "@/components/faq/table";

const page = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between px-2">
        <h3>Data Artikel</h3>
      </div>
      <div className="mt-6 rounded-xl bg-white p-6">
        <FaqTable />
      </div>
    </>
  );
};
export default page;
