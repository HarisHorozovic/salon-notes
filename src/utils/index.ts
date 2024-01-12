export const getStyleForProp = (base, rest): Array<any> => {
  const style = [base];
  if (Array.isArray(rest)) {
    style.push(...rest);
  } else {
    style.push(rest);
  }

  return style;
};
