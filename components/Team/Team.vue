<template>
  <div :class="$style.team">
    <header :class="$style.header">
      <app-heading :class="$style.heading">
        <template #title>{{ $t('team.title') }}</template>
        <template #subtitle>{{ $t('team.subtitle') }}</template>
      </app-heading>

      <div v-if="isSwiper" :class="$style.controls">
        <v-button-control :class="[$style.button, $style.prev]">
          <v-icon name="arrow-left" />
        </v-button-control>

        <v-button-control :class="[$style.button, $style.next]">
          <v-icon name="arrow-right" />
        </v-button-control>
      </div>
    </header>

    <div v-swiper:teamMembers="swiperOption" :class="$style.swiper">
      <ul
        :class="[
          $style.members,
          { [$style.grid]: !isSwiper },
          { 'swiper-wrapper': isSwiper },
        ]"
      >
        <li
          v-for="teamMember in team"
          :key="`team-member-${teamMember.id}`"
          :class="[$style.member, { 'swiper-slide': isSwiper }]"
        >
          <app-card-team :class="$style.card" :team-member="teamMember" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper';
import { mapGetters } from 'vuex';
import 'swiper/css/swiper.css';

export default {
  name: 'AppTeam',

  directives: {
    swiper: directive,
  },

  props: {
    isSwiper: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      swiperOption: {
        enabled: this.isSwiper,

        navigation: {
          nextEl: `.${this.$style.next}`,
          prevEl: `.${this.$style.prev}`,
        },

        slidesPerView: 1,
        spaceBetween: 30,

        breakpoints: {
          450: {
            slidesPerView: 2,
          },

          680: {
            slidesPerView: 3,
          },

          1024: {
            slidesPerView: 4,
          },
        },
      },
    };
  },

  computed: {
    ...mapGetters({
      team: 'core/team',
    }),

    attrs() {
      return this.swiper ? { 'v-swiper': this.swiperOption } : {};
    },
  },

  mounted() {
    this.disableSwiper();
  },

  methods: {
    disableSwiper() {
      if (this.isSwiper) return;

      this.teamMembers.destroy(true, true);
    },
  },
};
</script>

<style lang="scss" module>
@import './Team.module';
</style>
