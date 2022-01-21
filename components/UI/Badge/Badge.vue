<template>
  <p :class="classes">
    <slot />
  </p>
</template>

<script>
const BADGE_VARIANTS = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'alert',
];

export default {
  name: 'AppBadge',

  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (variant) => BADGE_VARIANTS.includes(variant),
    },
  },

  computed: {
    classes() {
      return {
        [this.$style.badge]: true,
        [this.$style[this.variant]]: true,
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './Badge.module';
</style>
