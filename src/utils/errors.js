import { error_notify } from "./notify";

export const Errors = async (error) => {
  if (error) {
    if (error?.response) {
      let {
        status,
        data: { error: errormsg },
      } = error.response;

      if (status == 403) {
        error_notify(errormsg);
      }

      if (status == 400) {
        error_notify(errormsg);
      }
    }
  }
};
