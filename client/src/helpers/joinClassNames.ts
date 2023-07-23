export const joinClassNames = <T>(classNames: T[], delimiter = ' '): string => {
  return classNames.filter((s) => s && typeof s === 'string').join(delimiter);
};
