"use client";

import tags from "@/constant/tags";
import objectToQueryString from "@/lib/utils/objectToQueryString";
import baseApi from "@/redux/base-api";

const testimonialApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [tags.testimonial],
  })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      getTestimonials: builder.query({
        query: (query) => ({
          url: `/admins/testimonials?${objectToQueryString(query)}`,
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: (result, error, page) =>
          result?.data
            ? [
                ...result.data.results.map(({ id }) => ({
                  type: tags.testimonial,
                  id,
                })),
                { type: tags.testimonial, id: "PARTIAL-LIST" },
              ]
            : [{ type: tags.testimonial, id: "PARTIAL-LIST" }],
      }),
      updateTestimonial: builder.mutation({
        query: ({ id, data }) => ({
          url: `/admins/testimonials/${id}`,
          method: "PATCH",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.testimonial, id },
          { type: tags.testimonial, id: "PARTIAL-LIST" },
        ],
      }),
    }),
  });

export const { useGetTestimonialsQuery, useUpdateTestimonialMutation } =
  testimonialApi;
