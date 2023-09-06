import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const KEY = import.meta.env.VITE_RAPID_API_SUMMARIZER_KEY;
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", KEY);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3}`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = apiSlice;
