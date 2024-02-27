import { ErrorMessage, Field } from "formik";
import React, { Fragment } from "react";
export const FormikInput = ({ type, id, label, fieldClass, value }) => {
  return (
    <div className={fieldClass}>
      <label htmlFor={id}>{label}</label>
      <Field type={type} id={id} name={id} placeholder={label} />
      <ErrorMessage name={id} component="p" />
    </div>
  );
};
