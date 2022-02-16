<template>
  <div :class="$style.events">
    <app-heading :class="$style.heading" centered>
      <template #subtitle>{{ $t('events.subtitle') }}</template>

      <template #title>{{ $t('events.title') }}</template>
    </app-heading>

    <app-events-list
      :class="$style.list"
      :events="filteredEvents"
      colored-shadow
    />

    <div :class="$style.footnote">
      <p :class="$style.more">{{ $t('events.footnote') }}</p>

      <v-button link :class="$style.button" :to="localePath('/events')">{{
        $t('events.all')
      }}</v-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppEventsFeatured',

  computed: {
    ...mapGetters({
      events: 'core/eventsLinks',
    }),

    filteredEvents() {
      return this.events?.slice(0, 3) || [];
    },
  },
};
</script>

<style lang="scss" module>
@import './EventsFeatured.module';
</style>
