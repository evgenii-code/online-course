<template>
  <ul :class="$style.list">
    <li
      v-for="(_, __, index) in $slots"
      :key="`slot-${index}`"
      :class="$style.item"
    >
      <v-icon :class="$style.icon" :name="icon" size="small" />

      <p :class="$style.text"><slot :name="`item-${index + 1}`" /></p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppTextList',

  props: {
    icon: {
      type: String,
      default: 'check',
    },
  },
};
</script>

<style lang="scss" module>
@import './TextList.module';
</style>
