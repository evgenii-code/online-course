<template>
  <main :class="$style.main">
    <app-section-wrapper :class="[$style.section, $style.posts]">
      <app-posts-all :class="$style.content" />
    </app-section-wrapper>
  </main>
</template>

<script>
export default {
  name: 'BlogPage',
};
</script>

<style lang="scss" module>
@import './blog.module';
</style>
