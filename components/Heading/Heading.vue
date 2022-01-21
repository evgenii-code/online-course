<template>
  <header :class="classes">
    <p v-if="$slots.subtitle" :class="$style.subtitle">
      <slot name="subtitle" />
    </p>

    <component :is="tag" v-if="$slots.title" :class="$style.title">
      <slot name="title" />
    </component>
  </header>
</template>

<script>
const TITLE_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h5'];

export default {
  name: 'AppHeading',

  props: {
    tag: {
      type: String,
      default: 'h2',
      validator: (tag) => TITLE_TAGS.includes(tag),
    },

    centered: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        [this.$style.header]: true,
        [this.$style.centered]: this.centered,
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './Heading.module';
</style>
