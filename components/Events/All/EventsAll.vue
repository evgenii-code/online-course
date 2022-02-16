<template>
  <div :class="$style.events">
    <app-heading :class="$style.heading">
      <template #title>{{ $t('events.filters.title') }}</template>

      <template #subtitle>{{ $t('events.filters.subtitle') }}</template>
    </app-heading>

    <div :class="$style.filters">
      <label :class="$style.search">
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

      <div :class="$style.views">
        <v-variant
          v-for="(view, index) in views"
          :key="`view-toggler-${index}`"
          v-model="selectedView"
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
      :vertical="selectedView === 'grid'"
      :class="itemsClasses"
      :events="events"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppEventsAll',

  data() {
    return {
      search: '',
      listId: 'event-list',
      views: ['list', 'grid'],
      selectedView: 'list',
    };
  },

  computed: {
    ...mapGetters({
      events: 'core/eventsLinks',
    }),

    itemsClasses() {
      return {
        [this.$style.items]: true,
        [this.$style[this.selectedView]]: true,
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './EventsAll.module';
</style>
