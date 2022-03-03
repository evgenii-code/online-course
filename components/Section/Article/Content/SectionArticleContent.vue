<template>
  <article :class="$style.article">
    <p :class="$style.subtitle">
      <span :class="$style.format">
        <v-icon
          :class="$style.icon"
          size="small"
          :name="getIconByPostFormat(article.format)"
        />
        {{ $t(`posts.format.${article.format}`) }}
      </span>

      <span :class="$style.devider">|</span>

      <span :class="$style.theme">
        {{ $t(`courses.themes.${article.theme}`) }}
      </span>
    </p>

    <app-heading :class="$style.heading">
      <template #title>{{ $t(article.title) }}</template>
    </app-heading>

    <div :class="$style.info">
      <p :class="$style.date">
        <v-icon :class="$style.icon" size="small" name="calendar" />
        {{ localeDate }}
      </p>

      <p v-if="article.duration" :class="$style.duration">
        <v-icon :class="$style.icon" size="small" name="clock" />
        {{ article.duration }}
      </p>

      <div :class="$style.share">
        <p :class="$style.description">{{ $t('post.share') }}</p>

        <app-social-links
          :class="$style.links"
          size="medium"
          :social-links="shareLinks"
        />
      </div>
    </div>

    <picture :class="$style.picture">
      <img :class="$style.image" :src="imageUrl" :alt="$t(article.title)" />
    </picture>

    <div :class="$style.content">
      <div
        v-for="(content, index) in $t('post.content')"
        :key="`content-${index}`"
        :class="$style.item"
      >
        <p
          v-if="content.type === 'p'"
          :class="[
            $style.paragraph,
            { [$style.bold]: content.style === 'bold' },
          ]"
        >
          {{ content.text }}
        </p>

        <app-text-list v-if="content.type === 'list'" :class="$style.list">
          <template
            v-for="(item, itemIndex) in content.items"
            #[getSlotName(itemIndex)]
          >
            <span :key="`list-item-${itemIndex}`">{{ item.text }}</span>
          </template>
        </app-text-list>

        <app-text-quote
          v-if="content.type === 'quote'"
          :class="[$style.quote, { [$style.bold]: content.style === 'bold' }]"
        >
          {{ content.text }}
        </app-text-quote>
      </div>
    </div>

    <footer :class="$style.footer">
      <p :class="$style.description">{{ $t('post.tags') }}</p>

      <ul :class="$style.list">
        <li
          v-for="(tag, tagIndex) in $t('post.tagItems')"
          :key="`tag-iten-${tagIndex}`"
          :class="$style.item"
        >
          <v-button-clear :class="$style.tag">
            {{ tag }}
          </v-button-clear>
        </li>
      </ul>

      <div :class="$style.share">
        <p :class="$style.description">{{ $t('post.share') }}</p>

        <app-social-links
          :class="$style.links"
          size="medium"
          :social-links="shareLinks"
        />
      </div>
    </footer>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import getIconByPostFormat from '~/utils/getIconByPostFormat';
import { getLocaleDateString } from '~/utils/date';

export default {
  name: 'AppSectionArticleContent',

  props: {
    article: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapGetters({
      socialLinks: 'core/socialLinks',
    }),

    shareLinks() {
      const availableLinks = ['facebook', 'twitter', 'linked-in'];

      return (this.socialLinks || []).filter((socialLink) =>
        availableLinks.includes(socialLink.icon)
      );
    },

    localeDate() {
      const { locale = 'en' } = this.$i18n || {};
      const date = new Date(this.article.date);
      const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      };

      return getLocaleDateString({ date, locale, options });
    },

    imageUrl() {
      return require(`~/assets/images/blog/covers/${this.article.img}`);
    },
  },

  methods: {
    getIconByPostFormat(iconName) {
      return getIconByPostFormat(iconName);
    },

    getSlotName(index) {
      return `item-${index + 1}`;
    },
  },
};
</script>

<style lang="scss" module>
@import './SectionArticleContent.module';
</style>
