"use client";

import { useCallback } from "react";

import { enqueueSnackbar } from "notistack";

/**
 * hooks for handle get and set for form
 * @param {*} getter RTK query get hook
 * @param {*} setter RTK query update hook
 * @returns ```[fetcher, {data, isLoading, error, response}]```
 * @example ```
 * const [fetcher,{data, isLoading, error, response}] = useFormApiHandler(useGetQuery, useUpdateMutation, {success, error})
 * ```
 */
const useFormApiHandler = (getter, setter, options = {}) => {
  const { data, isLoading: dataLoading } = getter();
  const [fetcher, { isLoading: fetchLoading, error, data: response }] =
    setter();

  const fetchHandler = useCallback(async (data) => {
    try {
      await fetcher(data).unwrap();

      enqueueSnackbar(options.success || "Data berhasil disimpan!", {
        variant: "success",
      });
    } catch (err) {
      console.error(err);

      enqueueSnackbar(options.error || err.message, {
        variant: "error",
      });
    }
  });

  return [
    fetchHandler,
    { data, response, isLoading: fetchLoading || dataLoading, error },
  ];
};

export default useFormApiHandler;
