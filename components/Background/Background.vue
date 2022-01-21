<template>
  <component :is="tag" :class="$style.background">
    <div :class="$style.content">
      <slot />
    </div>
  </component>
</template>

<script>
export default {
  name: 'AppBackground',

  props: {
    tag: {
      type: String,
      default: 'section',
    },
  },
};
</script>

<style lang="scss" module>
@import './Background.module';
</style>
