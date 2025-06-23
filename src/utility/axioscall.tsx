import { endpoints } from "@/utility/urlMap";
import axios, { AxiosResponse, RawAxiosRequestHeaders } from "axios";
import { alert } from "@/app/universalComponents/Alert";

interface CallPostOptions {
  showSuccess?: boolean;
  showError?: boolean;
  successMessage?: string;
  errorMessage?: string;
}
type EndpointKey = keyof typeof endpoints;
interface ApiError extends Error {
  response?: {
    data?: {
      message?: string;
    };
    status?: number;
  };
}

const callPost = async <T = unknown, D = unknown>(
  endPoint: EndpointKey,
  payload: D,
  headers: RawAxiosRequestHeaders = {}, // Default empty object
  options: CallPostOptions = { showSuccess: true, showError: true }
): Promise<T> => {
  const {
    showSuccess = true,
    showError = true,
    successMessage,
    errorMessage,
  } = options;

  try {
    const response: AxiosResponse<T> = await axios.post(
      endpoints[endPoint],
      payload,
      { headers }
    );

    if (response.status === 200) {
      if (showSuccess) {
        alert.success(successMessage || "API call succeeded");
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
  } catch (error) {
    const apiError = error as ApiError;

    if (showError) {
      alert.error(
        errorMessage ||
          apiError.response?.data?.message ||
          "Oops! Something went wrong"
      );
    }
    console.error("API call failed:", apiError);
    throw apiError;
  }
};

export { callPost };
