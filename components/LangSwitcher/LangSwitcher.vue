<template>
  <nav :class="$style.switcher">
    <v-variant
      v-for="(locale, index) in locales"
      :key="`option-toggler-${index}`"
      v-model="selectedLocale"
      name="locale-options"
      :current-value="locale.code"
      :class="$style.locale"
    >
      <template #custom="{ isChecked }">
        <span :class="[$style.button, { [$style.active]: isChecked }]">
          {{ locale.code }}
        </span>
      </template>
    </v-variant>
  </nav>
</template>

<script>
export default {
  name: 'AppLangSwitcher',

  data() {
    return {
      selectedLocale: this.$i18n.locale,
    };
  },

  computed: {
    locales() {
      return this.$i18n.locales;
    },
  },

  watch: {
    selectedLocale(newLocale) {
      this.switchLocale(newLocale);
    },
  },

  methods: {
    switchLocale(newLocale) {
      this.$i18n.setLocale(newLocale);
    },
  },
};
</script>

<style lang="scss" module>
@import './LangSwitcher.module';
</style>
