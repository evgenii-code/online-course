<template>
  <blockquote :class="$style.quote">
    <div :class="$style.container">
      <slot />
    </div>
  </blockquote>
</template>

<script>
export default {
  name: 'AppTextQuote',
};
</script>

<style lang="scss" module>
@import './TextQuote.module';
</style>
