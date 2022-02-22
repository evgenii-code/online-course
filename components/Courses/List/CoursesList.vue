<template>
  <ul :class="$style.list">
    <li
      v-for="(course, index) in courses"
      :key="`course-${index}`"
      :class="$style.item"
    >
      <app-card-course
        :class="$style.card"
        :vertical="vertical"
        :course="course"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppCoursesList',

  props: {
    vertical: {
      type: Boolean,
      default: false,
    },

    courses: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
@import './CoursesList.module';
</style>
