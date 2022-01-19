<template>
  <div :class="$style.layout">
    <!-- header -->
    <app-header :class="$style.header" />

    <main :class="$style.main">
      <Nuxt />
    </main>

    <!-- footer -->
    <app-footer :class="$style.footer" />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<style lang="scss">
@import '~/scss/index.scss';
</style>

<style lang="scss" module>
@import './default.module.scss';
</style>
