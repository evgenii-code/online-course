<template>
  <v-button-clear
    :class="[$style.button, { [$style.animated]: animated }]"
    v-bind="$attrs"
    v-on="events"
    @animationend="stopAnimation"
  >
    <v-icon :name="icon" :class="$style.icon" />

    <span :class="$style.text">
      <slot />
    </span>
  </v-button-clear>
</template>

<script>
export default {
  name: 'AppButtonLoadMore',

  props: {
    icon: {
      type: String,
      default: 'arrow-convert',
    },
  },

  data() {
    return {
      animated: false,
    };
  },

  computed: {
    events() {
      return {
        ...this.$listeners,
        click: this.startAnimation,
      };
    },
  },

  methods: {
    startAnimation() {
      this.animated = true;
    },

    stopAnimation() {
      this.animated = false;
    },
  },
};
</script>

<style lang="scss" module>
@import './ButtonLoadMore.module';
</style>
