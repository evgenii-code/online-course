<template>
  <div :class="$style.posts">
    <app-heading :class="$style.heading">
      <template #subtitle>{{ $t('courses.filters.subtitle') }}</template>

      <template #title>{{ $t('courses.filters.title') }}</template>
    </app-heading>

    <div :class="[$style.content, $style.filters]">
      <nav :class="$style.formats">
        <v-variant
          v-for="(option, index) in formatsOptions"
          :key="`option-toggler-${index}`"
          v-model="fields.selectedFormat"
          name="format-options"
          :current-value="option.value"
          :aria-controls="listId"
          :class="$style.format"
        >
          <template #custom="{ isChecked }">
            <v-button
              outline
              :theme="isChecked ? 'primary' : 'clear'"
              tag="span"
              :class="$style.button"
            >
              <v-icon
                v-if="option.value !== 'all'"
                :name="getIconByPostFormat(option.value)"
                size="small"
                :class="$style.icon"
              />
              <span>{{ option.text }}</span>
            </v-button>
          </template>
        </v-variant>
      </nav>

      <!-- Themes Select -->
      <label :class="[$style.filter, $style.theme]">
        <span :class="$style.description">
          {{ $t('posts.filters.category') }}
        </span>

        <v-select
          v-model="fields.selectedTheme"
          :class="$style.select"
          :clearable="false"
          :searchable="false"
          :reduce="(option) => option.value"
          label="text"
          :options="themesOptions"
        >
          <template #open-indicator="{ attributes }">
            <v-icon size="small" v-bind="attributes" name="chevron-down" />
          </template>
        </v-select>
      </label>

      <!-- Search input -->
      <label :class="$style.search">
        <span :class="$style.description">
          {{ $t('posts.filters.search') }}
        </span>

        <v-input
          v-model.trim="fields.search"
          type="search"
          :placeholder="$t('posts.filters.search')"
          name="search"
        >
          <template #postfix>
            <v-icon :class="$style.icon" size="small" name="search" />
          </template>
        </v-input>
      </label>
    </div>

    <app-posts-list
      :class="[$style.content, $style.list]"
      :items="postWithFormatFilter"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import vSelect from 'vue-select';
import { getFormatsList } from '~/utils/getFormatsOptions';
import sortByDate from '~/utils/sortByDate';
import getIconByPostFormat from '~/utils/getIconByPostFormat';

import '~/scss/plugins/vueSelect.scss';

export default {
  name: 'AppPostsAll',

  components: {
    vSelect,
  },

  props: {
    perPage: {
      type: Number,
      default: 8,
    },
  },

  data() {
    return {
      fields: {
        selectedFormat: '',
        selectedTheme: '',
        search: '',
      },
      listId: 'posts-list',
      currentPage: 1,
    };
  },

  allFormats: { value: 'all' },
  allThemes: { value: 'all' },

  computed: {
    ...mapGetters({
      posts: 'core/posts',
      themes: 'core/themes',
    }),

    // First filter - Sort by date
    latestPosts() {
      return sortByDate(this.posts, true);
    },

    // Second filter - Search input
    postsWithSearchFilter() {
      return (
        this.latestPosts?.filter((post) => {
          // Get event i18n title
          const title = this.$t(post.title).toLowerCase();

          return title.includes(this.fields.search.toLowerCase());
        }) || []
      );
    },

    // Third filter - Theme
    postsWithThemeFilter() {
      if (this.fields.selectedTheme === this.$options.allThemes.value) {
        return this.postsWithSearchFilter || [];
      }

      return (
        this.postsWithSearchFilter.filter(
          (post) => post.theme === this.fields.selectedTheme
        ) || []
      );
    },

    // Fourth filter - Format
    postWithFormatFilter() {
      if (this.fields.selectedFormat === this.$options.allFormats.value) {
        return this.postsWithThemeFilter || [];
      }

      return (
        this.postsWithThemeFilter.filter(
          (post) => post.format === this.fields.selectedFormat
        ) || []
      );
    },

    formatsOptions() {
      const formatsList = getFormatsList(this.posts);
      const formatsOptions = formatsList.map((format) => ({
        value: format,
        text: this.$t(`posts.format.${format}`),
      }));

      return [this.$options.allFormats, ...formatsOptions];
    },

    themesOptions() {
      const themes =
        this.themes.map(({ theme, title }) => ({
          value: theme,
          text: this.$t(title),
        })) || [];

      return [this.$options.allThemes, ...themes];
    },
  },

  watch: {
    'fields.selectedFormat'(newFormat) {
      this.$router.push({ query: { format: newFormat } });
    },
  },

  created() {
    this.$options.allFormats.text = this.$t('posts.format.all');
    this.$options.allThemes.text = this.$t('courses.filters.all');

    this.setSelectedFormat();
    this.setSelectedTheme();
  },

  methods: {
    setSelectedFormat() {
      const { format } = this.$route.query;

      this.fields.selectedFormat =
        format || this.$options.allFormats.value || '';
    },

    setSelectedTheme() {
      this.fields.selectedTheme = this.$options.allThemes.value || '';
    },

    getIconByPostFormat(format) {
      return getIconByPostFormat(format);
    },
  },
};
</script>

<style lang="scss" module>
@import './PostsAll.module';
</style>
