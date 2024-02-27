export const format_string = (str, leng) => {
  if (str.length > leng) {
    str = str.slice(0, leng) + "...";
  }
  return str;
};
