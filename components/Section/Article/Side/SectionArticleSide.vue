<template>
  <div :class="$style.side">
    <div v-if="author" :class="$style.author">
      <h3 :class="$style.title">{{ $t('post.author') }}</h3>

      <div :class="$style.info">
        <picture :class="$style.picture">
          <img
            :src="authorImgUrl"
            :alt="$t(author.name)"
            :class="$style.image"
          />
        </picture>

        <div :class="$style.details">
          <p :class="$style.name">{{ $t(author.name) }}</p>
          <p :class="$style.position">{{ $t(author.position) }}</p>

          <app-social-links
            :class="$style.links"
            size="medium"
            :social-links="authorSocialLinks"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSectionArticleSide',

  props: {
    author: {
      type: Object,
      required: true,
    },
  },

  computed: {
    authorImgUrl() {
      return require(`~/assets/images/team/${this.author.img}`);
    },

    authorSocialLinks() {
      const { links = {} } = this.author || {};
      return Object.entries(links).map(([key, value]) => ({
        link: value,
        icon: key,
        title: key,
      }));
    },
  },
};
</script>

<style lang="scss" module>
@import './SectionArticleSide.module';
</style>
