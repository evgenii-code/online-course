<template>
  <div :class="$style.courses">
    <div :class="$style.top">
      <app-heading :class="$style.heading">
        <template #subtitle>{{ $t('courses.subtitle') }}</template>

        <template #title>{{ $t('courses.title') }}</template>
      </app-heading>
    </div>

    <nav :class="$style.themes">
      <v-button-group-item
        v-for="(option, index) in themesOptions"
        :key="`options-${index}`"
        v-model="selectedTheme"
        name="theme-options"
        :current-value="option.value"
        :class="$style.theme"
      >
        {{ option.text }}
      </v-button-group-item>
    </nav>

    <app-courses-list
      vertical
      :class="$style.list"
      :courses="filteredCourses"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppCoursesAll',

  props: {
    limit: {
      type: Number,
      default: 6,
    },
  },

  data() {
    return {
      selectedTheme: this.$options.allThemes.value || '',
    };
  },

  allThemes: { value: 'all' },

  computed: {
    ...mapGetters({
      courses: 'core/courses',
      themes: 'core/themes',
    }),

    themesOptions() {
      const themes =
        this.themes.map(({ theme, title }) => ({
          value: theme,
          text: this.$t(title),
        })) || [];

      return [this.$options.allThemes, ...themes];
    },

    filteredCourses() {
      if (this.selectedTheme === this.$options.allThemes.value) {
        return this.courses;
      }

      return (
        this.courses?.filter((course) => course.theme === this.selectedTheme) ||
        []
      );
    },
  },

  beforeCreate() {
    this.$options.allThemes.text = this.$t('courses.allThemes');
  },
};
</script>

<style lang="scss" module>
@import './CoursesAll.module';
</style>
