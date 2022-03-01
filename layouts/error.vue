<template>
  <main :class="$style.main">
    <app-section-wrapper :class="$style.section">
      <app-heading centered :class="$style.heading">
        <template #title>{{ error.message }}</template>
        <template #subtitle>{{ $t('error.occurred') }}</template>
      </app-heading>

      <nuxt-link :class="$style.link" :to="localePath('/')">{{
        $t('ui.homePage')
      }}</nuxt-link>
    </app-section-wrapper>
  </main>
</template>

<script>
export default {
  name: 'ErrorPage',

  props: {
    error: {
      type: Object,
      required: true,
    },
  },

  computed: {
    errorMessage() {
      return this.data;
    },
  },
};
</script>

<style lang="scss" module>
@import './error.module';
</style>
