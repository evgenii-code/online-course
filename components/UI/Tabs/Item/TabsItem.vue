<template>
  <div v-show="isActive" :class="$style.tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppTabsItem',

  _isTabComponent: true,

  props: {
    icon: {
      type: String,
      default: null,
    },

    title: {
      type: String,
      default: 'Tab',
    },

    selected: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isActive: false,
    };
  },

  mounted() {
    this.isActive = this.selected;
  },
};
</script>

<style lang="scss" module>
@import './TabsItem.module';
</style>
