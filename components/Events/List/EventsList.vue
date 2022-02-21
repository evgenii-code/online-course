<template>
  <ul :class="$style.list">
    <li
      v-for="(event, index) in events"
      :key="`event-${index}`"
      :class="$style.item"
    >
      <app-card-event
        :class="$style.card"
        :colored-shadow="coloredShadow"
        :vertical="vertical"
        :event="event"
      />
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

    vertical: {
      type: Boolean,
      default: false,
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
