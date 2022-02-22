<template>
  <ul :class="$style.list">
    <li
      v-for="(course, index) in courses"
      :key="`course-${index}`"
      :class="$style.item"
    >
      <nuxt-link
        :to="localePath(course.link + '/' + course.slug)"
        :class="$style.link"
      >
        <app-card-course
          :class="$style.card"
          :href="localePath(course.link)"
          :badge="$t(`courses.themes.${course.theme}`)"
          :badge-variant="getVariant(course.theme)"
          :path-to-image="course.img"
          :vertical="vertical"
        >
          <template #title>{{ $t(course.title) }}</template>

          <template #price>{{ course.price }}</template>

          <template #author>{{ authorName(course.author_id) }}</template>
        </app-card-course>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import { getVariantByTheme } from '~/utils/variants';

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

  data() {
    return {
      getVariantByTheme,
    };
  },

  computed: {
    ...mapGetters({
      teamMember: 'core/teamMemberById',
      themes: 'core/themes',
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
