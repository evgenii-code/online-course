<template>
  <main :class="$style.main">
    <app-background :class="[$style.section, $style.usp]">
      <app-container :class="$style.container">
        <app-unique-selling-point :class="$style.content" />
      </app-container>
    </app-background>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>

<style lang="scss" module>
@import './index.module';
</style>
