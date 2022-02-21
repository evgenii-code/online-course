<template>
  <main :class="$style.main">
    <app-section-wrapper :class="[$style.section, $style.events]">
      <app-events-all :class="$style.content" />
    </app-section-wrapper>

    <app-section-subscribe :class="[$style.section, $style.subscribe]">
      <template #title>{{ $t('subscribe.announcements.title') }}</template>
      <template #subtitle>{{
        $t('subscribe.announcements.subtitle')
      }}</template>
    </app-section-subscribe>
  </main>
</template>

<script>
export default {
  name: 'AppEventsPage',
};
</script>

<style lang="scss" module>
@import './events.module';
</style>
