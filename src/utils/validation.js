const REQUIRED_FIELD = "Can't be blank";

export const cardholderNameValidation = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if (value.match(/^[a-z, A-Z,\s]+$/i)) {
      return true;
    }
    return 'Wrong format, letters only';
  },
};

export const cardNumberValidation = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if (value.match(/^[0-9,\s]{19}$/)) {
      return true;
    }
    return 'Wrong format';
  },
};

export const yyValidation = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if (value.match(/^[0-9]{2}$/)) {
      return true;
    }
    return 'Wrong format';
  },
};

export const mmValidation = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if (value.match(/^(01|02|03|04|05|06|07|08|09|10|11|12)$/)) {
      return true;
    }
    return 'Wrong format';
  },
};

export const cvcValidation = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if (value.match(/^[0-9]{3}$/)) {
      return true;
    }
    return 'Wrong format';
  },
};
