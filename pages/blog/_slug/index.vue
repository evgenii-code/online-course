<template>
  <main :class="$style.main">
    <app-section-article
      v-if="article"
      :class="[$style.section, $style.article]"
      :article="article"
      :articles="trendingArticles"
      :author="teamMember"
    />

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
