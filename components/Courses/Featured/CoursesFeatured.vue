<template>
  <div :class="$style.courses">
    <div :class="$style.top">
      <app-heading :class="$style.heading">
        <template #subtitle>{{ $t('courses.subtitle') }}</template>

        <template #title>{{ $t('courses.title') }}</template>
      </app-heading>

      <v-button
        link
        :to="localePath('/courses')"
        :class="$style.button"
        outline
        >{{ $t('courses.all') }}</v-button
      >
    </div>

    <app-courses-list :class="$style.list" :courses="filteredCourses" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppCoursesFeatured',

  props: {
    limit: {
      type: Number,
      default: 6,
    },
  },

  computed: {
    ...mapGetters({
      courses: 'core/courses',
    }),

    filteredCourses() {
      return this.courses?.slice(0, this.limit) || [];
    },
  },
};
</script>

<style lang="scss" module>
@import './CoursesFeatured.module';
</style>
