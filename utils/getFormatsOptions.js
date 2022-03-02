import {
  isArray
} from './dataTypes';

export const getFormatsList = (posts = []) => {
  if (!isArray(posts)) return [];

  const formatsObj = posts.reduce((acc, post) => {
    acc[post.format] = post.format;

    return acc;
  }, {}) || {};

  return Object.keys(formatsObj);
}
