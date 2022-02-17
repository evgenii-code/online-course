const isNumber = (number) => Number.isInteger(number);
const getArray = (length, startFrom) => Array.from({
  length
}, (_, index) => index + startFrom);

export default ({
  pagesTotal,
  currentPage,
  visiblePages
}) => {
  if (!isNumber(pagesTotal) || !isNumber(currentPage) || !isNumber(visiblePages)) return [1];
  if (pagesTotal <= 1) return [1];
  if (visiblePages > pagesTotal) return getArray(pagesTotal, 1);
  // Define how much pages should be visible before and after curretn page
  const prev = Math.ceil((visiblePages - 1) / 2);
  const next = Math.floor((visiblePages - 1) / 2);

  // Define start and ane page positions
  let start = currentPage - prev;
  const end = currentPage + next;

  // Check if start and end page negative or greater of total page counter
  start = start < 1 ? 1 : start;
  start = end >= pagesTotal ? pagesTotal - visiblePages + 1 : start;

  // Return array from start page to the end page
  return getArray(visiblePages, start);
};
