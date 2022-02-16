<template>
  <ul :class="$style.list">
    <li
      v-for="(event, index) in events"
      :key="`event-${index}`"
      :class="$style.item"
    >
      <app-card-event
        :class="$style.card"
        :date-start="event.date.start"
        :date-end="event.date.end"
        :href="event.link"
        :colored-shadow="coloredShadow"
      >
        <template #title>{{ $t(event.title) }}</template>

        <template #category>{{ $t(event.category) }}</template>
      </app-card-event>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppEventsList',

  props: {
    events: {
      type: Array,
      required: true,
    },

    coloredShadow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
@import './EventsList.module';
</style>
