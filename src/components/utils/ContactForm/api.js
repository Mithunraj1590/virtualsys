import { getAxiosInstance } from "../../../../pages/api";

export const solutionDataList = async () => {
  const api = await getAxiosInstance();
  try {
    const response = await api.get("brochure/get/categories");
    return response;
  } catch (error) {
    return error.response.data;
  }
};

export const postContent = async (data) => {
  const api = await getAxiosInstance();
  try {
    const response = await api.post(
      "contact-us/save",
      data
    );
    return response;
  } catch (error) {
    return error.response.data;
  }
};
