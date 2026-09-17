import { AUTH_FORM, LABEL_FORM } from "@/constants";
import type { AuthForm, LabelForm } from "@/types";
import { inject, type Ref } from "vue";
const getLabelCurrentForm = (): LabelForm => {
  const { form } = inject<{ form: Ref<AuthForm> }>("changeForm")!;
  return form.value == AUTH_FORM.login ? LABEL_FORM.login : LABEL_FORM.signup;
};

export { getLabelCurrentForm };
