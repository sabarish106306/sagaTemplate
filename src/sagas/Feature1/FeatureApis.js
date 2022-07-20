import { axiosInstance } from "../../network/apis";

// Replace endpoint and change api name
export const apiExampleRequest = async () => {
  const res = await axiosInstance.get("protector")
  return res.data
};

export default {
  apiExampleRequest
};
