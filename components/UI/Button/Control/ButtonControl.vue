<template>
  <v-button-clear :class="$style.button" v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-button-clear>
</template>

<script>
export default {
  name: 'AppButtonControl',

  inheritAttrs: false,
};
</script>

<style lang="scss" module>
@import './ButtonControl.module';
</style>
