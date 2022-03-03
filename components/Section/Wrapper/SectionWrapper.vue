<template>
  <section :class="classes">
    <slot name="noContainer" />

    <app-container v-if="$slots.default" :class="containerClasses">
      <slot />
    </app-container>
  </section>
</template>

<script>
const BACKGROUND_NAMES = ['none', 'gradient-primary', 'gray'];
const DIRECTION_VARIANTS = ['column', 'column-reverse', 'row', 'row-reverse'];

export default {
  name: 'AppSectionWrapper',

  props: {
    background: {
      type: String,
      default: 'none',
      validator: (background) => BACKGROUND_NAMES.includes(background),
    },

    direction: {
      type: String,
      default: 'column',
      validator: (direction) => DIRECTION_VARIANTS.includes(direction),
    },
  },

  computed: {
    classes() {
      return {
        [this.$style.section]: true,
        [this.$style[this.background]]: true,
        [this.$style[this.direction]]: true,
      };
    },

    containerClasses() {
      return {
        [this.$style.container]: true,
        [this.$style[this.direction]]: true,
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './SectionWrapper.module';
</style>
