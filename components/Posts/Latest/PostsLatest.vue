<template>
  <div :class="$style.posts">
    <div :class="$style.header">
      <app-heading :class="$style.heading">
        <template #title>{{ $t('posts.title') }}</template>
        <template #subtitle>{{ $t('posts.subtitle') }}</template>
      </app-heading>

      <v-button link :to="localePath('/blog')" :class="$style.button">{{
        $t('posts.toBlog')
      }}</v-button>
    </div>

    <app-posts-list :class="$style.list" :items="latestPosts" />
  </div>
</template>

<script>
import sortByDate from '~/utils/sortByDate';

export default {
  name: 'AppPostsLatests',

  props: {
    limit: {
      type: Number,
      default: 3,
    },

    items: {
      type: Array,
      required: true,
    },
  },

  computed: {
    latestPosts() {
      return sortByDate(this.items, true).slice(0, this.limit);
    },
  },
};
</script>

<style lang="scss" module>
@import './PostsLatest.module';
</style>
