export default (obj = {}, path = '') => {
  for (let i = 0, pathArr = path.split('.'), length = pathArr.length; i < length; i++) {
    obj = obj[pathArr[i]];
  };

  return obj;
};
