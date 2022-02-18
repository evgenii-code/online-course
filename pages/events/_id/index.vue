<template>
  <main :class="$style.main">
    <app-section-title :class="[$style.section, $style.title]">
      <template #subtitle>{{ $t('event.subtitle') }}</template>
      <template #title>{{ $t(event.title) }}</template>
    </app-section-title>

    <app-section-wrapper :class="[$style.section, $style.agenda]">
      <app-agenda :event="event" />
    </app-section-wrapper>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppSpecificEvent',

  computed: {
    ...mapGetters({
      eventBySlug: 'core/eventBySlug',
    }),

    slug() {
      return this.$route?.params?.id;
    },

    event() {
      return this.eventBySlug(this.slug);
    },
  },
};
</script>

<style lang="scss" module>
@import './index.module';
</style>
