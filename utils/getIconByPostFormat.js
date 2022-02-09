const ICONS = {
  podcast: 'mic',
  video: 'play',
  article: 'files'
};

export default (format) => ICONS[format] || ICONS.article;
