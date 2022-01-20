<script>
/* eslint-disable vue/no-v-html */
const ICON_SIZES = ['small', 'regular', 'large'];

export default {
  name: 'AppIcon',

  props: {
    name: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      validator: (size) => ICON_SIZES.includes(size),
      default: 'regular',
    },
  },

  computed: {
    allSizeClasses() {
      return ICON_SIZES.reduce(
        (allSizes, sizeToCheck) => ({
          ...allSizes,
          [this.$style[sizeToCheck]]: this.size === sizeToCheck,
        }),
        {}
      );
    },

    classes() {
      return {
        [this.$style.icon]: true,
        ...this.allSizeClasses,
      };
    },

    url() {
      return require(`~/assets/icons/${this.name}.svg?raw`);
    },
  },
};
</script>

<template>
  <span
    v-if="name"
    :class="classes"
    role="img"
    :aria-label="name"
    v-html="url"
  />
</template>

<style lang="scss" module>
@import './Icon.module.scss';
</style>
