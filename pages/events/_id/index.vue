<template>
  <main :class="$style.main">
    <app-section-title :class="[$style.section, $style.title]">
      <template #subtitle>{{ $t('event.subtitle') }}</template>
      <template #title>{{ $t(event.title) }}</template>
    </app-section-title>

    <app-section-wrapper :class="[$style.section, $style.agenda]">
      <app-agenda :event="event" />
    </app-section-wrapper>

    <app-section-wrapper :class="[$style.section, $style.curator]">
      <app-curator partners :curator="curator" />
    </app-section-wrapper>
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
