export const getVariantByTheme = (courses = [], theme = '') => {
  const matchedVariant = courses.find((course) => course.theme === theme);

  if (matchedVariant) {
    return matchedVariant.variant;
  }

  return 'primary';
};

export const _ = {}
