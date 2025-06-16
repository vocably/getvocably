export const isToday = (ts: number): boolean => {
  const now = new Date();
  const tsDate = new Date(ts);

  return (
    now.getDay() === tsDate.getDay() &&
    now.getMonth() === tsDate.getMonth() &&
    now.getFullYear() === tsDate.getFullYear()
  );
};
