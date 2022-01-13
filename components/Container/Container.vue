<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppContainer',
};
</script>

<style lang="scss" module>
@import './Container.module.scss';
</style>
