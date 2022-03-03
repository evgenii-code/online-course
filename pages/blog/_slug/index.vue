<template>
  <main :class="$style.main">
    <app-section-wrapper
      v-if="article"
      :class="[$style.section, $style.article]"
    >
      <app-article :article="article" />
    </app-section-wrapper>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppBlogPostPage',

  computed: {
    ...mapGetters({
      posts: 'core/posts',
      postBySlug: 'core/postBySlug',
      teamMemberById: 'core/teamMemberById',
    }),

    trendingArticles() {
      return (this.posts || []).slice(0, 3);
    },

    slug() {
      return this.$route?.params?.slug;
    },

    article() {
      return this.postBySlug(this.slug);
    },

    teamMember() {
      return this.teamMemberById(this.article?.author_id);
    },
  },
};
</script>

<style lang="scss" module>
@import './index.module';
</style>
