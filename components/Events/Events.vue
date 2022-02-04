<template>
  <div :class="$style.events">
    <app-heading :class="$style.heading" centered>
      <template #subtitle>{{ $t('events.subtitle') }}</template>

      <template #title>{{ $t('events.title') }}</template>
    </app-heading>

    <ul :class="$style.items">
      <li
        v-for="event in filteredEvents"
        :key="event.title"
        :class="$style.item"
      >
        <app-card-event
          :class="$style.content"
          :date-start="event.date.start"
          :date-end="event.date.end"
          :href="event.link"
          colored-shadow
        >
          <template #title>{{ $t(event.title) }}</template>
          <template #category>{{ $t(event.category) }}</template>
        </app-card-event>
      </li>
    </ul>

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
  name: 'AppEvents',

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
@import './Events.module';
</style>
