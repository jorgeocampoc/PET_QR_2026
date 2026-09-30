import { USER_ROUTES, AUTH_ROUTES } from "./pathRoutes";
import { ROLES } from "./roles";
import { AUTH_FORM, LABEL_FORM } from "./authForm";
import { SYSTEM_NAME, ME, GITHUB_PAGE } from "./app.constant";
import { SPECIES } from "./pet.constant";
import { REGEX_PASSWORD, REGEX_FIRST_NAME, REGEX_LAST_NAME, REGEX_NAME_PET } from "./regex.constant";

import {
  INPUT_FIRST_NAME_REQUIRED,
  INPUT_LAST_NAME_REQUIRED,
  INPUT_EMAIL_REQUIRED,
  INPUT_PASSWORD_REQUIRED,
  INPUT_FIRST_FORMAT,
  INPUT_LAST_FORMAT,
  INPUT_EMAIL_FORMAT,
  INPUT_PASSWORD_FORMAT,
} from "./labelsFormMessages";

import { ERROR_DEFAULT } from "./responsesApi";
import { API_ROUTES_USER, API_ROUTES_PET, API_ROUTES_ACCOUNT } from "./apiRoutes.constant";
import { MENU_ITEM_CUSTOMER, MENU_ITEM_ADMIN } from "./menuItems";
import { INITIAL_USER } from "./initialFormObject.constant";
import { OPTION_DROP_DOWN_LOGOUT } from "./optionsDropDownLogout.constant";
import { VIEW_TITLE } from "./viewTitle";
import { FIELD_REQUIRED } from "./errorMessages.constant";
import { IMAGE_EXT } from "./imageExt.constant";
import { ERROR_SESSION } from "./error.constant";
import { DATA_EMPTY } from "./MsgResultTable";
import { BTN_NAVIGATION } from "./pagination.constant";
import { VIEW_VERIFICATION_EMAIL } from "./viewVerificationEmail";
import { PLACEMENT } from "./offcanvasPlacement.constant";

export {
  OPTION_DROP_DOWN_LOGOUT,
  PLACEMENT,
  BTN_NAVIGATION,
  DATA_EMPTY,
  ERROR_SESSION,
  VIEW_VERIFICATION_EMAIL,
  API_ROUTES_ACCOUNT,
  GITHUB_PAGE,
  FIELD_REQUIRED,
  REGEX_NAME_PET,
  USER_ROUTES,
  API_ROUTES_PET,
  MENU_ITEM_CUSTOMER,
  MENU_ITEM_ADMIN,
  API_ROUTES_USER,
  VIEW_TITLE,
  ERROR_DEFAULT,
  AUTH_ROUTES,
  ROLES,
  AUTH_FORM,
  SYSTEM_NAME,
  LABEL_FORM,
  ME,
  REGEX_PASSWORD,
  REGEX_FIRST_NAME,
  REGEX_LAST_NAME,
  INPUT_FIRST_NAME_REQUIRED,
  INPUT_LAST_NAME_REQUIRED,
  INPUT_EMAIL_REQUIRED,
  INPUT_PASSWORD_REQUIRED,
  INPUT_FIRST_FORMAT,
  INPUT_LAST_FORMAT,
  INPUT_EMAIL_FORMAT,
  INPUT_PASSWORD_FORMAT,
  INITIAL_USER,
  SPECIES,
  IMAGE_EXT,
};
