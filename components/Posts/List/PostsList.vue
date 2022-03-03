<template>
  <ul :class="$style.list">
    <li
      v-for="(post, index) in items"
      :key="`post-${index}`"
      :class="$style.item"
    >
      <app-card-blog :class="$style.post" :post="post" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppPostsList',

  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
@import './PostsList.module';
</style>
