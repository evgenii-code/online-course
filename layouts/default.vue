<template>
  <div :class="$style.layout">
    <!-- header -->
    <header :class="$style.header">header</header>

    <main :class="$style.main">
      <Nuxt />
    </main>

    <!-- footer -->
    <footer :class="$style.footer">footer</footer>
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
