<template>
  <article :class="$style.audience">
    <app-heading :class="$style.heading">
      <template #title>{{ $t('event.audience.title') }}</template>
      <template #subtitle>{{ $t('event.audience.subtitle') }}</template>
    </app-heading>

    <app-text-list :class="$style.list">
      <template
        v-for="(fact, index) in $t('event.audience.items')"
        #[getSlotName(index)]
      >
        <span :key="`audience-${index}`">{{ fact.text }}</span>
      </template>
    </app-text-list>
  </article>
</template>

<script>
export default {
  name: 'AppAudience',

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
