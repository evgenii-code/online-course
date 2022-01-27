<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppTabsItem',

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
@import './TabsItem.module';
</style>
