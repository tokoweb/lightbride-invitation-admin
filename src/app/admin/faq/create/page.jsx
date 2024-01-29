"use client";

import dynamic from "next/dynamic";

import FaqForm from "@/components/forms/faq-forms/faq-form";

// import ArticleForm from "@/components/forms/article-forms/article-form";

const CreateArtikel = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between px-2">
        <h3>Tambah Faq</h3>
      </div>

      <FaqForm />
    </>
  );
};
export default CreateArtikel;
