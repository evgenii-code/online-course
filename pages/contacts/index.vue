<template>
  <main :class="$style.main">
    <app-section-contacts :class="[$style.section, $style.contacts]" />

    <app-section-feedback :class="[$style.section, $style.feedback]" />
  </main>
</template>

<script>
export default {
  name: 'ContactsPage',
};
</script>

<style lang="scss" module>
@import './index.module';
</style>
