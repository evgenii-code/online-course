<template>
  <div :class="$style.card">
    <p :class="$style.badge">
      <v-icon :class="$style.icon" :name="iconName" size="small" />
      {{ $t(`blog.format.${post.format}`) }}
    </p>

    <picture :class="$style.picture">
      <img
        v-if="post.img"
        :class="$style.image"
        :src="imgUrl"
        :alt="$t(post.title)"
      />
    </picture>

    <div :class="$style.body">
      <header :class="$style.header">
        <p :class="$style.details">
          <b>{{ $t(post.theme) }}</b>
          <span>{{ ' | ' + date }}</span>
          <span v-if="post.duration">{{ ' | ' + post.duration }}</span>
        </p>

        <h3 :class="$style.title">{{ $t(post.title) }}</h3>
      </header>

      <p :class="$style.description">{{ $t('blog.description') }}</p>

      <footer :class="$style.footer">
        <nuxt-link :to="localePath(post.link)" :class="$style.link">
          {{ action }}
          <v-icon name="arrow-right" :class="$style.arrow" />
        </nuxt-link>
      </footer>
    </div>
  </div>
</template>

<script>
import { getLocaleDateString } from '~/utils/date';
import getActionByPostFormat from '~/utils/getActionByPostFormat';
import getIconByPostFormat from '~/utils/getIconByPostFormat';

export default {
  name: 'AppCardBlog',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    imgUrl() {
      return require(`~/assets/images/blog/covers/${this.post.img}`);
    },

    date() {
      const date = new Date(this.post.date);
      const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      };
      const locale = this.$i18n?.locale || 'en';
      const result = getLocaleDateString({
        locale,
        date,
        options,
      });

      return result;
    },

    action() {
      const action = getActionByPostFormat(this.post.format);

      return this.$t(`blog.actions.${action}`);
    },

    iconName() {
      return getIconByPostFormat(this.post.format);
    },
  },
};
</script>

<style lang="scss" module>
@import './CardBlog.module';
</style>
