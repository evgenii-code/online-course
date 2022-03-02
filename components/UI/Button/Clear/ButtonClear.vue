<template>
  <button :class="$style.button" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButtonClear',

  inheritAttrs: false,
};
</script>

<style lang="scss" module>
@import './ButtonClear.module';
</style>
