export const getDateFromString = (string) => {
  try {
    return new Date(string);
  } catch (_) {
    return new Date();
  }
}

export const getLocaleDateString = ({
  locale = 'en',
  date = new Date(),
  options = {}
}) => {
  return date.toLocaleString(locale, options);
}

export const getRangeFromDates = ({
  locale = 'en',
  start,
  end,
  options,
  endOptions,
}) => {
  const startTime = getLocaleDateString({
    locale,
    date: start,
    options
  })
  const endTime = getLocaleDateString({
    locale,
    date: end,
    options: endOptions || options
  })

  return `${startTime} - ${endTime}`;
}
