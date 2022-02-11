<template>
  <main :class="$style.main">
    <section :class="[$style.section, $style.courses]">
      <app-container :class="$style.container">
        <app-courses-featured :class="$style.content" />
      </app-container>
    </section>
  </main>
</template>

<script>
export default {
  name: 'PageCaourses',
};
</script>

<style lang="scss" module>
@import './index.module';
</style>
