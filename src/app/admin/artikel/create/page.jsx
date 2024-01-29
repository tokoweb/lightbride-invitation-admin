"use client";

import dynamic from "next/dynamic";

// import ArticleForm from "@/components/forms/article-forms/article-form";

const ArticleForm = dynamic(
  () => import("@/components/forms/article-forms/article-form"),
  { ssr: false },
);

const CreateArtikel = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between px-2">
        <h3>Tambah Artikel</h3>
      </div>

      <ArticleForm />
    </>
  );
};
export default CreateArtikel;
