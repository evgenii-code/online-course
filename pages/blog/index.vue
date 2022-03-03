<template>
  <main :class="$style.main">
    <app-section-wrapper :class="[$style.section, $style.posts]">
      <app-posts-all :class="$style.content" />
    </app-section-wrapper>

    <app-section-subscribe
      show-consent
      variant="blog"
      :class="[$style.section, $style.subscribe]"
    >
      <template #title>
        <i18n :tag="false" path="subscribe.posts.title">
          <template #break>
            <br />
          </template>
        </i18n>
      </template>
    </app-section-subscribe>
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
