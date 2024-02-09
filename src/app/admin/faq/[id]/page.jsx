"use client";

// import ArticleForm from "@/components/forms/article-forms/article-form";
import { useEffect, useState } from "react";

import { notFound } from "next/navigation";

import { skipToken } from "@reduxjs/toolkit/query/react";

import FaqForm from "@/components/forms/faq-forms/faq-form";
import { useGetFaqQuery } from "@/redux/services/faq";

const EditArticle = ({ params: { id } }) => {
  const [valid, setValid] = useState(false);

  const { data, isError } = useGetFaqQuery(valid ? id : skipToken);

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
        <h3>Edit Faq</h3>
      </div>

      <FaqForm defaultValues={data} />
    </>
  );
};
export default EditArticle;
