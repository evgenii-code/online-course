const ICONS = {
  podcast: 'mic',
  video: 'files',
  article: 'play'
};

export default (format) => ICONS[format] || ICONS.article;
