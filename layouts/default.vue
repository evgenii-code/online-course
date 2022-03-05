<template>
  <div :class="$style.layout">
    <!-- header -->
    <app-header :class="$style.header" />

    <Nuxt />

    <!-- footer -->
    <app-footer :class="$style.footer" />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',

  head() {
    const { baseURL = '/' } = this.$config;
    const metaImageUrl = `${baseURL}/images/main-screen.jpg`;
    const titleText = this.$t('meta.title');
    const descriptionText = this.$t('meta.description');

    // if (!this?.$nuxtI18nHead) return;

    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });

    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },

      title: titleText,

      meta: [
        // Title
        {
          hid: 'title',
          name: 'title',
          content: titleText,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: titleText,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: titleText,
        },

        // Desctiption
        {
          hid: 'description',
          name: 'description',
          content: descriptionText,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: descriptionText,
        },

        // Image
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: metaImageUrl,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: metaImageUrl,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: descriptionText,
        },

        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: titleText,
        },

        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        ...i18nHead.meta,
      ],

      link: [...i18nHead.link],
    };
  },
};
</script>

<style lang="scss">
@import '~/scss/index.scss';
</style>

<style lang="scss" module>
@import './default.module.scss';
</style>
