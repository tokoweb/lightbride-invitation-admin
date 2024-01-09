"use client";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";

import TestimonialsTable from "@/components/testimonials/table";

const Testimonial = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between px-2">
        <h3>Testimoni</h3>
      </div>
      <div className="mt-6 w-full rounded-xl bg-white p-6">
        <TestimonialsTable />
      </div>
    </>
  );
};

export default Testimonial;
