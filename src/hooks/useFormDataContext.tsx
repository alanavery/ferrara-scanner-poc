import { useContext } from "react";
import { FormDataContext } from "../contexts/FormDataContext";

export const useFormDataContext = () =>
  useContext(FormDataContext);
