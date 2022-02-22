<template>
  <div :class="$style.info">
    <p :class="$style.description"><slot name="description" /></p>

    <h3 :class="$style.title"><slot name="title" /></h3>

    <app-text-list :class="$style.list">
      <template v-for="(item, index) in listItems" #[getSlotName(index)]>
        <span :key="`list-item-${index}`">{{ item.text }}</span>
      </template>
    </app-text-list>
  </div>
</template>

<script>
export default {
  name: 'AppCourseInfo',

  props: {
    listItems: {
      type: Array,
      required: true,
    },
  },

  methods: {
    getSlotName(index) {
      return `item-${index + 1}`;
    },
  },
};
</script>

<style lang="scss" module>
@import './CourseInfo.module';
</style>
