export default (posts = [], descending = false) => [...posts].sort((a, b) => {
  if (descending) {
    return new Date(b.date) - new Date(a.date);
  }

  return new Date(a.date) - new Date(b.date);
});
