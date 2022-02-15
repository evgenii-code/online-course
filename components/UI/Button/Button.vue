<template>
  <component
    :is="component"
    :class="classes"
    :disabled="disabled"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
    <v-icon v-if="icon" :name="icon" :size="iconSize" :class="$style.icon" />
  </component>
</template>

<script>
const BUTTON_THEME_NAMES = ['primary', 'secondary', 'dark', 'white', 'clear'];
const BUTTON_SIZES = ['small', 'regular', 'large'];

export default {
  name: 'AppButton',

  props: {
    theme: {
      type: String,
      validator: (theme) => BUTTON_THEME_NAMES.includes(theme),
      default: 'primary',
    },

    size: {
      type: String,
      validator: (size) => BUTTON_SIZES.includes(size),
      default: 'regular',
    },

    outline: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    icon: {
      type: String,
      default: null,
    },

    link: {
      type: Boolean,
      default: false,
    },

    tag: {
      type: String,
      default: null,
    },
  },

  computed: {
    component() {
      if (this.tag) return this.tag;

      return this.link ? 'nuxt-link' : 'button';
    },

    iconSize() {
      return this.size === 'large' ? 'regular' : 'small';
    },

    classes() {
      return {
        [this.$style.button]: true,
        [this.$style[this.theme]]: true,
        [this.$style[this.size]]: true,
        [this.$style.outline]: this.outline,
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './Button.module.scss';
</style>
