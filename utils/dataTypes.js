export const isObject = (obj) => typeof obj === 'object' && obj !== null;

export const isArray = (arr) => Array.isArray(arr);

export const isObjectEmpty = (obj) => (
  obj &&
  Object.keys(obj).length === 0 &&
  Object.getPrototypeOf(obj) === Object.prototype
);


export const getArrayFromObject = (object = {}) => {
  const arr = [];

  if (!isObject(object)) return arr;

  for (const [key, value] of Object.entries(object)) {
    arr.push({
      key,
      value
    });
  }

  return arr;
};

export const getRenamedKeys = (arr = [], keysToRename = {}) => {
  if (!isArray(arr)) return [];
  if (!isObject(keysToRename) || isObjectEmpty(keysToRename)) return arr;

  return arr.map((item) => {
    const newItem = {};

    for (const [key, values] of Object.entries(keysToRename)) {
      if (isArray(values)) {
        values.forEach((value) => {
          newItem[value] = item[key];
        });

        continue;
      }

      newItem[values] = item[key];
    }

    return newItem;
  });
};
