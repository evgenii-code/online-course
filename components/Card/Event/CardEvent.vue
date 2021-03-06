<template>
  <div :class="classes">
    <p :class="$style.heading">
      <time :class="$style.date" :datetime="event.date.start">
        <span :class="$style.day">{{ day }}</span>
        <span :class="$style.month">{{ month }}</span>
        <span :class="$style.time">{{ time }}</span>
      </time>
    </p>

    <div :class="$style.description">
      <h3 :class="$style.title">{{ $t(event.title) }}</h3>
      <p :class="$style.category">{{ $t(event.category) }}</p>
    </div>

    <v-button link :to="localePath(href)" :class="$style.button" outline>{{
      $t('events.more')
    }}</v-button>
  </div>
</template>

<script>
import {
  getDateFromString,
  getLocaleDateString,
  getRangeFromDates,
} from '~/utils/date';

export default {
  name: 'AppCardEvent',

  props: {
    vertical: {
      type: Boolean,
      default: false,
    },

    event: {
      type: Object,
      required: true,
    },

    coloredShadow: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        [this.$style.card]: true,
        [this.$style.vertical]: this.vertical,
        [this.$style.colored]: this.coloredShadow,
      };
    },

    href() {
      return this.event.link + '/' + this.event.slug;
    },

    locale() {
      return this.$i18n?.locale || 'en';
    },

    dateStartObj() {
      return getDateFromString(this.event.date.start);
    },

    dateEndObj() {
      return getDateFromString(this.event.date.end);
    },

    day() {
      const options = { day: '2-digit' };

      return getLocaleDateString({ date: this.dateStartObj, options });
    },

    month() {
      const options = { month: 'long' };

      return getLocaleDateString({
        locale: this.locale,
        date: this.dateStartObj,
        options,
      });
    },

    time() {
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };

      try {
        return getRangeFromDates({
          locale: this.locale,
          start: this.dateStartObj,
          end: this.dateEndObj,
          options,
        });
      } catch (_) {
        return getLocaleDateString({
          locale: this.locale,
          date: this.dateStartObj,
          options,
        });
      }
    },
  },
};
</script>

<style lang="scss" module>
@import './CardEvent.module';
</style>
