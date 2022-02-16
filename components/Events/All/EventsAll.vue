<template>
  <div :class="$style.events">
    <app-heading :class="$style.heading">
      <template #title>{{ $t('events.filters.title') }}</template>

      <template #subtitle>{{ $t('events.filters.subtitle') }}</template>
    </app-heading>

    <div :class="$style.filters">
      <!-- Themes Select -->
      <label :class="[$style.filter, $style.theme]">
        <span :class="$style.description">
          {{ $t('events.filters.category') }}
        </span>

        <v-select
          v-model="fields.theme"
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

      <!-- Sort by Select -->
      <label :class="[$style.filter, $style.sort]">
        <span :class="$style.description">
          {{ $t('events.filters.sortBy') }}
        </span>

        <v-select
          v-model="fields.sort"
          :class="$style.select"
          :clearable="false"
          :searchable="false"
          :reduce="(option) => option.value"
          label="text"
          :options="sortOptions"
        >
          <template #open-indicator="{ attributes }">
            <v-icon size="small" v-bind="attributes" name="chevron-down" />
          </template>
        </v-select>
      </label>

      <!-- Per page Select -->
      <label :class="[$style.filter, $style['per-page']]">
        <span :class="$style.description">
          {{ $t('events.filters.show') }}
        </span>

        <v-select
          v-model="fields.perPage"
          :class="$style.select"
          :clearable="false"
          :searchable="false"
          :options="perPageOptions"
        >
          <template #open-indicator="{ attributes }">
            <v-icon size="small" v-bind="attributes" name="chevron-down" />
          </template>
        </v-select>

        <span :class="$style.text">
          {{ $t('events.filters.perPage') }}
        </span>
      </label>

      <!-- Search input -->
      <label :class="[$style.filter, $style.search]">
        <span :class="$style.description">
          {{ $t('events.filters.search') }}
        </span>

        <v-input
          v-model.trim="search"
          type="search"
          :placeholder="$t('events.filters.search')"
          :name="search"
        >
          <template #postfix>
            <v-icon :class="$style.icon" size="small" name="search" />
          </template>
        </v-input>
      </label>

      <!-- List view toggler -->
      <div :class="$style.views">
        <v-variant
          v-for="(view, index) in views"
          :key="`view-toggler-${index}`"
          v-model="fields.view"
          :current-value="view"
          :aria-controls="listId"
          :class="$style.toggler"
        >
          <template #custom="{ isChecked }">
            <v-icon
              :class="[$style.icon, { [$style.active]: isChecked }]"
              :name="view"
            />
          </template>
          <template #label>
            <span :class="$style.label">{{
              $t('ui.show') + ' ' + $t(`ui.${view}`)
            }}</span>
          </template>
        </v-variant>
      </div>
    </div>

    <app-events-list
      :id="listId"
      :vertical="isGrid"
      :class="itemsClasses"
      :events="cropedEvents"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import vSelect from 'vue-select';

import '~/scss/plugins/vueSelect.scss';

import sortByDate from '~/utils/sortByDate';

export default {
  name: 'AppEventsAll',

  components: {
    vSelect,
  },

  data() {
    return {
      search: '',
      listId: 'event-list',
      views: ['list', 'grid'],
      fields: {
        view: 'list',
        theme: this.$options.allThemes.value || '',
        sort: 'newest',
        perPage: 9,
      },
      perPageOptions: [3, 6, 9],
    };
  },

  allThemes: { value: 'all' },

  computed: {
    ...mapGetters({
      events: 'core/eventsLinks',
      themes: 'core/themes',
    }),

    isGrid() {
      return this.fields.view === 'grid';
    },

    themesOptions() {
      const themes =
        this.themes.map(({ theme, title }) => ({
          value: theme,
          text: this.$t(title),
        })) || [];

      return [this.$options.allThemes, ...themes];
    },

    sortOptions() {
      return [
        {
          text: this.$t('events.filters.oldest'),
          value: 'oldest',
        },

        {
          text: this.$t('events.filters.newest'),
          value: 'newest',
        },
      ];
    },

    sortedEvents() {
      const events = [...(this.events || [])];

      if (this.fields.sort === 'oldest') {
        return sortByDate(events, false, 'date.start');
      }

      return sortByDate(events, true, 'date.start');
    },

    themedEvents() {
      if (this.fields.theme === this.$options.allThemes.value) {
        return this.sortedEvents || [];
      }

      return (
        this.sortedEvents.filter(
          (event) => event.theme === this.fields.theme
        ) || []
      );
    },

    cropedEvents() {
      return this.themedEvents?.slice(0, this.fields.perPage) || [];
    },

    filteredEvents() {
      const filteredEvents =
        this.events?.filter((course) => {
          // Get course i18n title
          const title = this.$t(course.title).toLowerCase();

          return title.includes(this.search.toLowerCase());
        }) || [];

      if (this.selectedTheme === this.$options.allThemes.value) {
        return filteredEvents;
      }

      return (
        filteredEvents.filter(
          (course) => course.theme === this.selectedTheme
        ) || []
      );
    },

    itemsClasses() {
      return {
        [this.$style.items]: true,
        [this.$style[this.fields.view]]: true,
      };
    },
  },

  created() {
    this.$options.allThemes.text = this.$t('events.filters.all');
  },
};
</script>

<style lang="scss" module>
@import './EventsAll.module';
</style>
