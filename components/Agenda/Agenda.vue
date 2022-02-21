<template>
  <article :class="$style.agenda">
    <div :class="$style.wrapper">
      <app-heading :class="$style.heading">
        <template #title>{{ $t('event.agenda') }}</template>
      </app-heading>

      <app-faq :class="$style.accordion" :items="$t('event.themes')" />
    </div>

    <app-card-details
      :class="$style.details"
      :details="details"
      :link="link"
      :button="$t('event.join')"
    >
    </app-card-details>
  </article>
</template>

<script>
import { getLocaleDateString } from '~/utils/date';

export default {
  name: 'AppAgenda',

  props: {
    event: {
      type: Object,
      required: true,
    },
  },

  computed: {
    link() {
      return {
        text: this.$t('event.link'),
        url: 'https://facebook.com',
      };
    },

    date() {
      const locale = this.$i18n?.locale || 'en';
      const startDate = new Date(this.event.date.start);
      const endDate = new Date(this.event.date.end);
      const startOptions = {
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };
      const endOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
      const startString = getLocaleDateString({
        locale,
        date: startDate,
        options: startOptions,
      });
      const endString = getLocaleDateString({
        locale,
        date: endDate,
        options: endOptions,
      });

      return startString + ' - ' + endString;
    },

    details() {
      return this.$t('event.details').map((detail) => {
        if (detail.value === '{date}') {
          return {
            ...detail,
            value: this.date,
          };
        }

        return detail;
      });
    },
  },
};
</script>

<style lang="scss" module>
@import './Agenda.module';
</style>
