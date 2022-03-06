<template>
  <nav :class="$style.switcher">
    <a
      v-for="locale in locales"
      :key="locale.code"
      :class="[$style.link, { [$style.active]: isActive(locale.code) }]"
      href="#"
      @click.prevent.stop="switchLocale(locale.code)"
      >{{ locale.code }}</a
    >
  </nav>
</template>

<script>
export default {
  name: 'AppLangSwitcher',

  computed: {
    locales() {
      return this.$i18n.locales;
    },
  },

  methods: {
    switchLocale(newLocale) {
      this.$i18n.setLocale(newLocale);
    },

    isActive(locale) {
      return locale === this.$i18n.locale;
    },
  },
};
</script>

<style lang="scss" module>
@import './LangSwitcher.module';
</style>
