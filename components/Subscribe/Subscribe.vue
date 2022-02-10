<template>
  <div :class="$style.subscribe">
    <app-heading :class="$style.heading">
      <template #title><slot name="title" /></template>
      <template #subtitle><slot name="subtitle" /></template>
    </app-heading>

    <app-subscribe-form :class="$style.form" />
  </div>
</template>

<script>
export default {
  name: 'AppSubscribe',
};
</script>

<style lang="scss" module>
@import './Subscribe.module';
</style>
