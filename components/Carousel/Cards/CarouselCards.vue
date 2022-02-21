<template>
  <div
    v-swiper="swiperOption"
    :class="$style.swiper"
    :instance-name="carouselId"
  >
    <ul :class="[$style.list, 'swiper-wrapper']">
      <li
        v-for="(item, index) in items"
        :key="`${carouselId}-${index}`"
        :class="[$style.item, 'swiper-slide']"
      >
        <component
          :is="cardComponent"
          v-if="cardComponent"
          :class="$style.card"
          v-bind="getProperties(item)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

const CARD_COMPONENT_NAMES = {
  'app-card-team': { prop: 'team-member' },
  'app-card-event': { prop: 'event' },
};

export default {
  name: 'AppCarouselCards',

  directives: {
    swiper: directive,
  },

  props: {
    carouselId: {
      type: String,
      required: true,
    },

    cardComponent: {
      type: String,
      required: true,
      validator: (componentName) => !!CARD_COMPONENT_NAMES[componentName],
    },

    items: {
      type: Array,
      required: true,
    },

    navigation: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      swiperOption: {
        enabled: this.isSwiper,

        navigation: this.navigation,

        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,

        breakpoints: {
          450: {
            slidesPerView: 2,
            centeredSlides: false,
          },

          680: {
            slidesPerView: 3,
            centeredSlides: false,
          },

          1024: {
            slidesPerView: 4,
            centeredSlides: false,
          },
        },
      },
    };
  },

  computed: {
    componentOptions() {
      return CARD_COMPONENT_NAMES[this.cardComponent];
    },
  },

  methods: {
    getProperties(item) {
      return {
        [this.componentOptions.prop]: item,
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './CarouselCards.module';
</style>
