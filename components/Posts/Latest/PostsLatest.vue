<template>
  <div :class="$style.posts">
    <header :class="$style.header">
      <app-heading :class="$style.heading">
        <template #title>{{ $t('posts.title') }}</template>
        <template #subtitle>{{ $t('posts.subtitle') }}</template>
      </app-heading>

      <v-button link :to="localePath('/blog')" :class="$style.button">{{
        $t('posts.toBlog')
      }}</v-button>
    </header>

    <ul :class="$style.list">
      <li
        v-for="(post, index) in latestPosts"
        :key="`post-${index}`"
        :class="$style.item"
      >
        <app-card-blog :class="$style.post" :post="post" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import sortPostsByDate from '~/utils/sortPostsByDate';

export default {
  name: 'AppPostsLatests',

  computed: {
    ...mapGetters({
      posts: 'core/posts',
    }),

    latestPosts() {
      return sortPostsByDate(this.posts, true).slice(0, 3);
    },
  },
};
</script>

<style lang="scss" module>
@import './PostsLatest.module';
</style>
