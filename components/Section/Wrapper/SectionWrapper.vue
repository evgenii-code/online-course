<template>
  <section :class="classes">
    <slot name="noContainer" />

    <app-container v-if="$slots.default" :class="$style.container">
      <slot />
    </app-container>
  </section>
</template>

<script>
const BACKGROUND_NAMES = ['none', 'gradient-primary', 'gray'];

export default {
  name: 'AppSectionWrapper',

  props: {
    background: {
      type: String,
      default: 'none',
      validator: (background) => BACKGROUND_NAMES.includes(background),
    },
  },

  computed: {
    classes() {
      return {
        [this.$style.section]: true,
        [this.$style[this.background]]: true,
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './SectionWrapper.module';
</style>
