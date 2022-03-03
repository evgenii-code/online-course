<template>
  <div :class="$style.testimonials">
    <app-heading :class="$style.heading">
      <template #title>{{ $t('testimonials.title') }}</template>
      <template #subtitle>{{ $t('testimonials.subtitle') }}</template>
    </app-heading>

    <div :class="$style.carousel">
      <v-button-control :class="[$style.button, $style.prev]">
        <v-icon name="arrow-left" />
      </v-button-control>

      <div v-swiper:testimonials="swiperOption" :class="$style.swiper">
        <ul :class="$style.wrapper" class="swiper-wrapper">
          <li
            v-for="(testimonial, index) in $t('testimonials.items')"
            :key="`testimonial-${testimonial.id}`"
            :class="$style.slide"
            class="swiper-slide"
          >
            <app-text-quote :class="$style.quote">
              <i18n
                tag="p"
                :class="$style.text"
                :path="`testimonials.items[${index}].text`"
              >
                <template #break>
                  <br :class="$style.break" />
                </template>
              </i18n>

              <div :class="$style.autor">
                <img
                  :class="$style.avatar"
                  :src="
                    require(`~/assets/images/testimonials/${testimonial.img}`)
                  "
                  :alt="testimonial.author"
                />

                <div :class="$style.info">
                  <cite :class="$style.name">{{ testimonial.author }}</cite>

                  <p :class="$style.course">{{ testimonial.course }}</p>
                </div>
              </div>
            </app-text-quote>
          </li>
        </ul>
      </div>

      <v-button-control :class="[$style.button, $style.next]">
        <v-icon name="arrow-right" />
      </v-button-control>
    </div>

    <div :class="$style.pagination" />
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'AppTestimonials',

  directives: {
    swiper: directive,
  },

  data() {
    return {
      swiperOption: {
        enabled: this.isSwiper,

        slideActiveClass: this.$style.active,

        navigation: {
          nextEl: `.${this.$style.next}`,
          prevEl: `.${this.$style.prev}`,
        },

        pagination: {
          el: `.${this.$style.pagination}`,
          type: 'bullets',
          clickable: true,
        },

        slidesPerView: 1,
      },
    };
  },
};
</script>

<style lang="scss" module>
@import './Testimonials.module';
</style>
