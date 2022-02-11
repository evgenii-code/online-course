<template>
  <ul :class="$style.list">
    <li
      v-for="(course, index) in courses"
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
        <template #title>{{ $t(course.title) }}</template>

        <template #price>{{ course.price }}</template>

        <template #author>{{ authorName(course.author_id) }}</template>
      </app-card-course>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import { getVariantByTheme } from '~/utils/variants';

export default {
  name: 'AppCoursesList',

  props: {
    courses: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      getVariantByTheme,
    };
  },

  computed: {
    ...mapGetters({
      teamMember: 'core/teamMemberById',
    }),
  },

  methods: {
    getVariant(theme) {
      return getVariantByTheme(this.themes, theme);
    },

    authorName(id) {
      const author = this.teamMember(id);
      const name = this.$te(author?.name) ? this.$t(author?.name) : '';

      return name;
    },
  },
};
</script>

<style lang="scss" module>
@import './CoursesList.module';
</style>
