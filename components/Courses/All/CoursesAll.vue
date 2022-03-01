<template>
  <div :class="$style.courses">
    <app-heading :class="$style.heading">
      <template #subtitle>{{ $t('courses.filters.subtitle') }}</template>

      <template #title>{{ $t('courses.filters.title') }}</template>
    </app-heading>

    <div :class="[$style.content, $style.filters]">
      <nav :class="$style.themes">
        <v-variant
          v-for="(option, index) in themesOptions"
          :key="`option-toggler-${index}`"
          v-model="selectedTheme"
          name="theme-options"
          :current-value="option.value"
          :aria-controls="listId"
          :class="$style.theme"
        >
          <template #custom="{ isChecked }">
            <v-button
              outline
              :theme="isChecked ? 'primary' : 'clear'"
              tag="span"
              :class="$style.button"
            >
              <span>
                {{ option.text }}
                <sup>
                  {{ option.count }}
                </sup>
              </span>
            </v-button>
          </template>
        </v-variant>
      </nav>

      <label :class="$style.search">
        <span :class="$style.description">
          {{ $t('courses.filters.search') }}
        </span>

        <v-input
          v-model.trim="search"
          type="search"
          :placeholder="$t('courses.filters.search')"
          :name="search"
        >
          <template #postfix>
            <v-icon :class="$style.icon" size="small" name="search" />
          </template>
        </v-input>
      </label>
    </div>

    <app-courses-list
      :id="listId"
      vertical
      :class="[$style.content, $style.list]"
      :courses="filteredCourses"
    />

    <v-button-load-more :class="$style.load">
      {{ $t('courses.filters.more') }}
    </v-button-load-more>
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
      selectedTheme: '',
      search: '',
      listId: 'courses-list',
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
          count: this.countCoursesByTheme(theme),
        })) || [];

      return [this.$options.allThemes, ...themes];
    },

    filteredCourses() {
      const coursesWithAppliedSearch =
        this.courses?.filter((course) => {
          // Get course i18n title
          const title = this.$t(course.title).toLowerCase();

          return title.includes(this.search.toLowerCase());
        }) || [];

      if (this.selectedTheme === this.$options.allThemes.value) {
        return coursesWithAppliedSearch;
      }

      return (
        coursesWithAppliedSearch.filter(
          (course) => course.theme === this.selectedTheme
        ) || []
      );
    },
  },

  watch: {
    selectedTheme(newTheme) {
      this.$router.push({ query: { theme: newTheme } });
    },
  },

  created() {
    this.$options.allThemes.text = this.$t('courses.filters.all');
    this.$options.allThemes.count = this.courses?.length || 0;

    this.setSelectedTheme();
  },

  methods: {
    setSelectedTheme() {
      const { theme } = this.$route.query;

      this.selectedTheme = theme || this.$options.allThemes.value || '';
    },

    countCoursesByTheme(theme) {
      return (
        this.courses?.reduce(
          (count, course) => (course.theme === theme ? ++count : count),
          0
        ) || 0
      );
    },
  },
};
</script>

<style lang="scss" module>
@import './CoursesAll.module';
</style>
