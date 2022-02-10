/* eslint-disable camelcase */
import {
  extend
} from "vee-validate";
import {
  alpha,
  alpha_spaces,
  email,
  integer,
  max,
  numeric,
  required
} from "vee-validate/dist/rules";

extend("alpha", alpha);
extend("alpha_spaces", alpha_spaces);
extend("email", email);
extend("integer", integer);
extend("max", max);
extend("numeric", numeric);
extend("required", required);
