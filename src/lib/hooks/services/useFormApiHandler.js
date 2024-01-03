"use client";

import { useCallback } from "react";

import { enqueueSnackbar } from "notistack";

/**
 * hooks for handle get and set for form
 * @param {*} getter RTK query get hook
 * @param {*} setter RTK query update hook
 * @returns ```[fetcher, {data, isLoading, error, response}]```
 * @example ```
 * const [fetcher,{data, isLoading, erro, response}] = useFormApiHandler(useGetQuery, useUpdateMutation)
 * ```
 */
const useFormApiHandler = (getter, setter) => {
  const { data, isLoading: dataLoading } = getter();
  const [fetcher, { isLoading: fetchLoading, error, data: response }] =
    setter();

  const fetchHandler = useCallback(async (data) => {
    try {
      await fetcher(data).unwrap();

      enqueueSnackbar("Data berhasil disimpan!", {
        variant: "success",
      });
    } catch (err) {
      console.error(err);

      enqueueSnackbar(err.message, {
        variant: "error",
      });
    }
  });

  return [
    fetchHandler,
    { data, response, isLoading: fetchLoading && dataLoading, error },
  ];
};

export default useFormApiHandler;
