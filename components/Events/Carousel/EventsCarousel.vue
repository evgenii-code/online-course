<template>
  <div :class="$style.carousel"></div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppEventsCarousel',

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
@import './EventsCarousel.module';
</style>
