<template>
  <app-section-wrapper background="gray" :class="classes">
    <div :class="$style.header">
      <app-heading :class="$style.heading">
        <template #title><slot name="title" /></template>
        <template #subtitle><slot name="subtitle" /></template>
      </app-heading>

      <div :class="$style.controls">
        <v-button-control :class="[$style.button, $style.prev]">
          <v-icon name="arrow-left" />
        </v-button-control>

        <v-button-control :class="[$style.button, $style.next]">
          <v-icon name="arrow-right" />
        </v-button-control>
      </div>
    </div>

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

    <div v-if="showFooter" :class="$style.footer">
      <slot name="footer">
        <p :class="$style.text">
          <slot name="more" />
        </p>

        <v-button :class="$style.button" link :to="localePath(pathToMoreItems)">
          <slot name="action" />
        </v-button>
      </slot>
    </div>
  </app-section-wrapper>
</template>

<script>
import { directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

const VARIANTS = {
  'app-card-team': {
    class: 'team',
    itemPropName: 'team-member',
    props: {},
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
  'app-card-event': {
    class: 'event',
    itemPropName: 'event',
    props: { vertical: true },
    breakpoints: {
      680: {
        slidesPerView: 2,
        centeredSlides: false,
      },

      1024: {
        slidesPerView: 3,
        centeredSlides: false,
      },
    },
  },
  'app-card-course': {
    class: 'course',
    itemPropName: 'course',
    props: {},
    breakpoints: {
      680: {
        slidesPerView: 2,
        centeredSlides: false,
      },

      1024: {
        slidesPerView: 2,
        centeredSlides: false,
      },
    },
  },
};

export default {
  name: 'AppSectionCarousel',

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
      validator: (componentName) => !!VARIANTS[componentName],
    },

    items: {
      type: Array,
      required: true,
    },

    navigation: {
      type: Object,
      default: null,
    },

    showFooter: {
      type: Boolean,
      default: false,
    },

    pathToMoreItems: {
      type: String,
      default: '/',
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

        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,

        breakpoints: VARIANTS[this.cardComponent].breakpoints,
      },
    };
  },

  computed: {
    componentOptions() {
      return VARIANTS[this.cardComponent];
    },

    classes() {
      return {
        [this.$style.carousel]: true,
        [this.$style[this.componentOptions.class]]: true,
      };
    },
  },

  methods: {
    getProperties(item) {
      const itemProp = { [this.componentOptions.itemPropName]: item };

      return {
        ...itemProp,
        ...this.componentOptions.props,
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './SectionCarousel.module';
</style>
