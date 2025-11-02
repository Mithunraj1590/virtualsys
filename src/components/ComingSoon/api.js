
import { getAxiosInstance } from "../../../pages/api";

  export const postContent = async (data) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.post("coming/soon/email?email=",data);
      return response;
    } catch (error) {
      return error.response.data;
    }
  };