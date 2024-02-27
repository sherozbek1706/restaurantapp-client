import { ErrorMessage, Field } from "formik";
import React from "react";
export const FormikSelect = ({ id, label, fieldClass, optionsData }) => {
  return (
    <div className={fieldClass}>
      <label htmlFor={id}>{label}</label>
      <Field name={id}>
        {({ field, form }) => (
          <select
            name={id}
            id={id}
            onChange={(e) => form.setFieldValue(id, e.target.value)}
          >
            {optionsData?.map((item, idx) => (
              <option key={idx} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        )}
      </Field>
    </div>
  );
};
