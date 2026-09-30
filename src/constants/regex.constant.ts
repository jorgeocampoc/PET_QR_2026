const REGEX_PASSWORD = /^(?=.{6,}$)(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@!#~%&^$<>?¿])\S+$/;
const REGEX_FIRST_NAME = /^(?=.{3,})[a-z]+(?: [a-z]+)*$/;
const REGEX_LAST_NAME = /^(?=.{3,})[a-z]+(?: [a-z]+)*$/;
const REGEX_NAME_PET = /^[A-Za-z]{3,}$/;

export { REGEX_PASSWORD, REGEX_FIRST_NAME, REGEX_LAST_NAME, REGEX_NAME_PET };
