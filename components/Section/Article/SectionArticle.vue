<template>
  <app-section-wrapper :class="$style.section" direction="row">
    <app-section-article-content :class="$style.article" :article="article" />

    <app-section-article-side
      :class="$style.side"
      :author="author"
      :articles="articles"
    />
  </app-section-wrapper>
</template>

<script>
export default {
  name: 'AppSectionArticle',

  props: {
    article: {
      type: Object,
      required: true,
    },

    articles: {
      type: Array,
      required: true,
    },

    author: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
@import './SectionArticle.module';
</style>
