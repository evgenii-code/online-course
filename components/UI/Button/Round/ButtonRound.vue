<template>
  <v-button-clear :class="classes" v-bind="$attrs" v-on="$listeners">
    <v-icon :name="iconName" :size="iconSize" :class="$style.icon" />
  </v-button-clear>
</template>

<script>
const BUTTON_SIZES = ['regular', 'large'];

export default {
  name: 'AppButtonRound',

  inheritAttrs: false,

  props: {
    icon: {
      type: String,
      default: null,
    },

    size: {
      type: String,
      validator: (size) => BUTTON_SIZES.includes(size),
      default: 'regular',
    },

    outterGlow: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    iconName() {
      return this.icon ?? 'play-solid';
    },

    iconSize() {
      return this.size === 'large' ? 'regular' : 'small';
    },

    classes() {
      return {
        [this.$style.button]: true,
        [this.$style[this.size]]: true,
        [this.$style['outter-glow']]: this.outterGlow,
        [this.$style['icon-default']]: !this.icon,
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './ButtonRound.module';
</style>
