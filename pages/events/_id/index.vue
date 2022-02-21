<template>
  <main :class="$style.main">
    <app-section-title :class="[$style.section, $style.title]">
      <template #subtitle>{{ $t(event.category) }}</template>
      <template #title>{{ $t(event.title) }}</template>
    </app-section-title>

    <app-section-wrapper :class="[$style.section, $style.agenda]">
      <app-agenda :event="event" />
    </app-section-wrapper>

    <app-section-wrapper :class="[$style.section, $style.curator]">
      <app-curator partners :curator="curator" />
    </app-section-wrapper>

    <app-section-wrapper :class="[$style.section, $style.audience]">
      <app-audience />
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
    </app-section-request>

    <app-section-carousel
      background="gray"
      :class="[$style.section, $style.events]"
      :items="events"
      card-component="app-card-event"
      carousel-id="carousel-events"
    >
      <template #title>{{ $t('event.all.title') }}</template>
      <template #subtitle>{{ $t('event.all.subtitle') }}</template>
      <template #footer>
        <div :class="$style.footer">
          <p :class="$style.text">
            {{ $t('event.all.more') }}
          </p>
          <v-button :class="$style.button" link :to="localePath('/events')">{{
            $t('event.all.action')
          }}</v-button>
        </div>
      </template>
    </app-section-carousel>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppSpecificEvent',

  computed: {
    ...mapGetters({
      eventBySlug: 'core/eventBySlug',
      teamMemberById: 'core/teamMemberById',
      events: 'core/eventsLinks',
    }),

    slug() {
      return this.$route?.params?.id;
    },

    event() {
      return this.eventBySlug(this.slug);
    },

    curator() {
      const curator = this.teamMemberById(this.event.curator_id);
      const links = [];

      for (const [media, link] of Object.entries(curator.links || {})) {
        links.push({
          title: media,
          link,
          icon: media,
        });
      }

      return {
        role: this.$t('event.role'),
        name: this.$t(curator.name),
        position: this.$t(curator.position),
        description: this.$t('event.description'),
        links,
        img: 'kathryn-murphy.png',
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './index.module';
</style>
