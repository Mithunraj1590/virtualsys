
import { getAxiosInstance } from "../../../pages/api";

  export const postContent = async (data) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.post("brochure/save",data);
      return response;
    } catch (error) {
      return error.response.data;
    }
  };