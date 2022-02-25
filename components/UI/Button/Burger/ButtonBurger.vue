<template>
  <v-button-clear :class="classes" v-on="$listeners">
    <span :class="$style.wrapper">
      <span :class="[$style.line, $style.top]" />
      <span :class="[$style.line, $style.middle]" />
      <span :class="[$style.line, $style.bottom]" />
    </span>
  </v-button-clear>
</template>

<script>
export default {
  name: 'AppButtonBurger',

  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    classes() {
      return {
        [this.$style.burger]: true,
        [this.$style.active]: this.isActive,
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './ButtonBurger.module';
</style>
