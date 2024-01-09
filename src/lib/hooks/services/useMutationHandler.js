"use client";

import { useCallback } from "react";

import { enqueueSnackbar } from "notistack";

const tes = (a1, a2) => {
  console.log(a1, a2);
};

/**
 *
 * @param {*} mutationHook RTK query mutation hook
 * @param {{success, error}} messages { success: string, error: string }
 * @returns ```
 *   [fetchHandler, { data, isLoading }]
 * ```
 */
const useMutationHandler = (
  mutationHook,
  { success, error } = { success: "Data berhasil diubah", error: null },
  callback = () => {},
) => {
  const [fetcher, { data, isLoading }] = mutationHook();

  const fetchHandler = useCallback(
    async (...query) => {
      try {
        await fetcher(...query).unwrap();

        enqueueSnackbar(success, {
          variant: "success",
        });

        callback();
      } catch (err) {
        console.error(err);

        enqueueSnackbar(error ?? err.message, {
          variant: "error",
        });
      }
    },
    [fetcher],
  );

  return [fetchHandler, { data, isLoading }];
};

export default useMutationHandler;
