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

    <ul :class="$style.items">
      <li
        v-for="(course, index) in $t('courses.items')"
        :key="`course-${index}`"
        :class="$style.item"
      >
        <app-card-course
          :class="$style.card"
          :href="localePath(course.link)"
          :badge="$t(`courses.themes.${course.theme}`)"
          :badge-variant="getVariant(course.theme)"
          :path-to-image="course.img"
        >
          <template #title>{{ course.title }}</template>

          <template #price>{{ course.price }}</template>

          <template #author>{{ course.author }}</template>
        </app-card-course>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getVariantByTheme } from '~/utils/variants';

export default {
  name: 'AppCourses',

  data() {
    return {
      getVariantByTheme,
    };
  },

  computed: {
    ...mapGetters({
      courses: 'core/coursesLinks',
    }),
  },

  methods: {
    getVariant(theme) {
      return getVariantByTheme(this.courses, theme);
    },
  },
};
</script>

<style lang="scss" module>
@import './Courses.module';
</style>
