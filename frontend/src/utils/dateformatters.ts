export const formatDate = (date:Date) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options as Intl.DateTimeFormatOptions);
  }