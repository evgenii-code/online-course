export const STAT_ICONS = {
  rating: 'star',
  courses: 'play',
  students: 'profile',
};

export const getIconByStatName = (statName) => STAT_ICONS[statName] || STAT_ICONS.rating;
