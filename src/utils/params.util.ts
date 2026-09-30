const getStringParams = (value: unknown): string | null => {
  return typeof value === "string" ? value : null;
};

export { getStringParams };
