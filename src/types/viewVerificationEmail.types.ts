import type { VIEW_VERIFICATION_EMAIL } from "@/constants";

type ViewVerificationEmail = (typeof VIEW_VERIFICATION_EMAIL)[keyof typeof VIEW_VERIFICATION_EMAIL];

export type { ViewVerificationEmail };
