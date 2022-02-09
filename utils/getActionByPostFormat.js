const ACTIONS = {
  podcast: 'listen',
  video: 'watch',
  article: 'read'
};

export default (format) => ACTIONS[format] || ACTIONS.article;
