<template>
  <main :class="$style.main">
    <section :class="[$style.section, $style.events]">
      <app-container :class="$style.container">
        <app-events-all :class="$style.content" />
      </app-container>
    </section>
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
