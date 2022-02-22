<template>
  <article :class="$style.audience">
    <app-heading :class="$style.heading">
      <template #title><slot name="title" /></template>
      <template #subtitle><slot name="subtitle" /></template>
    </app-heading>

    <app-text-list :class="$style.list">
      <template v-for="(audience, index) in audienceList" #[getSlotName(index)]>
        <span :key="`audience-${index}`">{{ audience.text }}</span>
      </template>
    </app-text-list>
  </article>
</template>

<script>
export default {
  name: 'AppAudience',

  props: {
    audienceList: {
      type: Array,
      required: true,
    },
  },

  methods: {
    getSlotName(index) {
      return `item-${index + 1}`;
    },
  },
};
</script>

<style lang="scss" module>
@import './Audience.module';
</style>
