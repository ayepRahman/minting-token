/*
 * VALIDATIONS
 * Object schema validation
 * @see https://github.com/jquense/yup
 */

import * as yup from "yup";
import { FieldNames } from "./enums";

export const validationSchema = yup.object().shape({
  [FieldNames.NAME]: yup.string().required().label("Name"),
  [FieldNames.PRICE]: yup.number().required().label("Price"),
});
