import { AUTH_FORM } from "@/constants";
import { LABEL_FORM } from "@/constants";

type AuthForm = (typeof AUTH_FORM)[keyof typeof AUTH_FORM];
type LabelForm = (typeof LABEL_FORM)[keyof typeof LABEL_FORM];

export type { AuthForm, LabelForm };
