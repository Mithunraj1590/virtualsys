import axios from "axios";
import { useRouter } from "next/router";
import { NodePaths } from "../../lib/pages";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;

export const getAxiosInstance = async () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: "application/json",
    },
  });
  instance.interceptors.request.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return instance;
};

;


