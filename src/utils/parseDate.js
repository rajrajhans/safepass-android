export const parseDate = (timestamp) => {
  const d = new Date(timestamp);
  return d.toDateString();
};
