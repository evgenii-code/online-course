<template>
  <div :class="$style.side">
    <div v-if="author" :class="[$style.content, $style.author]">
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

    <div
      v-if="articles && articles.length"
      :class="[$style.content, $style.articles]"
    >
      <h3 :class="$style.title">{{ $t('post.tranding') }}</h3>

      <div
        v-for="(article, index) in articles"
        :key="`article-${index}`"
        :class="$style.info"
      >
        <picture :class="$style.picture">
          <img
            :src="getArticleImgUrl(article.img)"
            :alt="$t(author.name)"
            :class="$style.image"
          />
        </picture>

        <div :class="$style.details">
          <p :class="$style.date">
            <v-icon :class="$style.icon" name="calendar" size="small" />
            {{ getLocaleDate(article.date) }}
          </p>

          <nuxt-link
            :class="$style.link"
            :to="localePath(article.link + '/' + article.slug)"
            >{{ $t(article.title) }}</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLocaleDateString } from '~/utils/date';

export default {
  name: 'AppSectionArticleSide',

  props: {
    author: {
      type: Object,
      required: true,
    },

    articles: {
      type: Array,
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

  methods: {
    getArticleImgUrl(img) {
      return require(`~/assets/images/blog/covers/${img}`);
    },

    getLocaleDate(dateString) {
      const { locale = 'en' } = this.$i18n || {};
      const date = new Date(dateString);
      const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      };

      return getLocaleDateString({ date, locale, options });
    },
  },
};
</script>

<style lang="scss" module>
@import './SectionArticleSide.module';
</style>
