<template>
  <main :class="$style.main">
    <app-section-title :class="[$style.section, $style.title]">
      <template #subtitle>{{ $t(event.category) }}</template>
      <template #title>{{ $t(event.title) }}</template>
    </app-section-title>

    <app-section-wrapper :class="[$style.section, $style.agenda]">
      <app-course-about
        :course="event"
        :button-text="$t('event.join')"
        :date="date"
        :details="$t('event.details')"
        :external-link="externalLink"
      >
        <template #title>{{ $t('event.agenda') }}</template>

        <template #info>
          <v-accordion-list :items="$t('event.themes')" />
        </template>
      </app-course-about>
    </app-section-wrapper>

    <app-section-wrapper :class="[$style.section, $style.curator]">
      <app-curator
        partners
        img-name="kathryn-murphy.png"
        :role="$t('event.role')"
        :description="$t('event.description')"
        :author-id="event.author_id"
      />
    </app-section-wrapper>

    <app-section-wrapper :class="[$style.section, $style.audience]">
      <app-audience :audience-list="$t('event.audience.items')">
        <template #title>{{ $t('event.audience.title') }}</template>
        <template #subtitle>{{ $t('event.audience.subtitle') }}</template>
      </app-audience>
    </app-section-wrapper>

    <app-section-subscribe
      show-consent
      variant="event"
      :class="[$style.section, $style.subscribe]"
    >
      <template #title>
        <i18n :tag="false" path="subscribe.events.title">
          <template #break>
            <br />
          </template>
        </i18n>
      </template>
    </app-section-subscribe>

    <app-section-request
      variant="event"
      show-next-step
      :class="[$style.section, $style.request]"
    >
      <template #title>{{ $t('request.event.title') }}</template>
      <template #subtitle>{{ $t('request.event.subtitle') }}</template>
      <template #submit>{{ $t('request.event.submit') }}</template>
    </app-section-request>

    <app-section-carousel
      :class="[$style.section, $style.events]"
      :items="events"
      card-component="app-card-event"
      carousel-id="carousel-events"
      path-to-more-items="/events"
      show-footer
    >
      <template #title>{{ $t('event.all.title') }}</template>
      <template #subtitle>{{ $t('event.all.subtitle') }}</template>
      <template #more>{{ $t('event.all.more') }}</template>
      <template #action>{{ $t('event.all.action') }}</template>
    </app-section-carousel>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import { getRangeFromDates } from '~/utils/date';

export default {
  name: 'AppSpecificEvent',

  computed: {
    ...mapGetters({
      eventBySlug: 'core/eventBySlug',
      events: 'core/eventsLinks',
    }),

    slug() {
      return this.$route?.params?.slug;
    },

    event() {
      return this.eventBySlug(this.slug);
    },

    date() {
      const locale = this.$i18n?.locale || 'en';
      const start = new Date(this.event.date.start);
      const end = new Date(this.event.date.end);
      const endOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
      const options = {
        ...endOptions,
        month: 'short',
        day: 'numeric',
      };

      return getRangeFromDates({
        locale,
        start,
        end,
        options,
        endOptions,
      });
    },

    externalLink() {
      return {
        text: this.$t('event.link'),
        url: 'https://linkedIn.com',
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './index.module';
</style>
