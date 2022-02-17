import getDeepValue from './getDeepValue';

export default (arrayOfObjects = [], descending = false, path = "date") => [...arrayOfObjects].sort((a, b) => {
  if (descending) {
    return new Date(getDeepValue(b, path)) - new Date(getDeepValue(a, path));
  }

  return new Date(getDeepValue(a, path)) - new Date(getDeepValue(b, path));
});
