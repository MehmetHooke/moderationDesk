import axios from "axios";

export function getErrorMessage(err: unknown) {
    if ( axios.isAxiosError(err)){
        return err.response?.data?.message || err.message || "Axios Error"
    }
    if (err instanceof Error) return err.message;
    return "Unknown Error";
}