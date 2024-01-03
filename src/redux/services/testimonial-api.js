"use client";

import tags from "@/constant/tags";
import baseApi from "@/redux/base-api";

const testimonialApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [tags.testimonial],
  })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      getTestimonial: builder.query({
        query: () => ({
          url: "/members/dashboard/testimonials",
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.testimonial],
      }),
      updateTestimonial: builder.mutation({
        query: (data) => ({
          url: "/members/dashboard/testimonials",
          method: "PATCH",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.testimonial],
      }),
    }),
  });

export const { useGetTestimonialQuery, useUpdateTestimonialMutation } =
  testimonialApi;
