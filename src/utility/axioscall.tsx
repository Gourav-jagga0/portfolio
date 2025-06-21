import { endpoints } from "@/utility/urlMap";
import axios from "axios";
import { alert } from "@/app/universalComponents/Alert";

interface CallPostOptions {
  showSuccess?: boolean;
  showError?: boolean;
  successMessage?: string;
  errorMessage?: string;
}

const callPost = async (
  endPoint: string,
  payload: any,
  header: any,
  options: CallPostOptions = { showSuccess: true, showError: true }
) => {
  const {
    showSuccess = true,
    showError = true,
    successMessage,
    errorMessage,
  } = options;

  try {
    const response = await axios.post(endpoints[endPoint], payload, {
      headers: header,
    });

    if (response?.status === 200) {
      if (showSuccess) {
        alert.success("API call succeeded");
      }
      return response.data;
    } else {
      if (showError) {
        alert.error(
          errorMessage || `Request failed with status ${response.status}`
        );
      }
      throw new Error(`API call failed with status ${response.status}`);
    }
  } catch (error: any) {
    if (showError) {
      alert.error(
        errorMessage || error.response?.data?.message || "Something went wrong"
      );
    }
    console.error("API call failed:", error);
    throw error;
  }
};

export { callPost };
