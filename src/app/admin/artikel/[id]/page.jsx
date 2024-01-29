"use client";

// import ArticleForm from "@/components/forms/article-forms/article-form";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

import { skipToken } from "@reduxjs/toolkit/query/react";

import { useGetArticleQuery } from "@/redux/services/articles-api";

const ArticleForm = dynamic(
  () => import("@/components/forms/article-forms/article-form"),
  { ssr: false },
);

const EditArticle = ({ params: { id } }) => {
  const [valid, setValid] = useState(false);

  const { data, isError } = useGetArticleQuery(valid ? id : skipToken);

  if (!/^[0-9]+$/.test(id)) {
    notFound();
  }

  useEffect(() => {
    setValid(true);
  }, []);

  useEffect(() => {
    if (isError) notFound();
  }, [isError]);

  return (
    <>
      <div className="mb-3 flex items-center justify-between px-2">
        <h3>Edit Artikel</h3>
      </div>

      <ArticleForm defaultValues={data} />
    </>
  );
};
export default EditArticle;
