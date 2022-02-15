export const getVariantByTheme = (themes = [], themeToFind = '') => {
  const matchedVariant = themes.find(({
    theme
  }) => theme === themeToFind);

  if (matchedVariant) {
    return matchedVariant.variant;
  }

  return 'primary';
};

export const _ = {}
