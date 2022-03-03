<template>
  <app-section-wrapper
    :background="background"
    :class="classes"
    :direction="direction"
  >
    <!-- Background images wth 'main' prop -->
    <template v-if="variant === 'main'" #noContainer>
      <img
        src="~/assets/images/subscribe/illustration-1.svg"
        alt="Background image"
        aria-hidden="true"
        :class="[$style.image, $style.main, $style.left]"
      />
      <img
        src="~/assets/images/subscribe/illustration-1.svg"
        alt="Background image"
        aria-hidden="true"
        :class="[$style.image, $style.main, $style.right]"
      />
    </template>

    <!-- Background images wth 'blog' prop -->
    <img
      v-if="variant === 'blog'"
      src="~/assets/images/subscribe/illustration-3.svg"
      alt="Background image"
      aria-hidden="true"
      :class="[$style.image, $style.blog]"
    />

    <article :class="$style.content">
      <img
        v-if="variant === 'event'"
        src="~/assets/images/subscribe/illustration-2.svg"
        alt="Background image"
        :class="[$style.image, $style.event]"
      />

      <div :class="$style.wrapper">
        <app-heading :class="$style.heading" :centered="titleCentered">
          <template #title><slot name="title" /></template>
          <template #subtitle><slot name="subtitle" /></template>
        </app-heading>

        <app-section-subscribe-form
          :class="$style.form"
          :show-consent="showConsent"
        />
      </div>
    </article>
  </app-section-wrapper>
</template>

<script>
const VARIANTS = {
  main: {
    background: 'gradient-primary',
    titleCentered: true,
    direction: 'column',
  },
  event: { background: 'none', titleCentered: false, direction: 'column' },
  blog: { background: 'gray', titleCentered: false, direction: 'row' },
};

export default {
  name: 'AppSectionSubscribe',

  props: {
    showConsent: {
      type: Boolean,
      default: false,
    },

    variant: {
      type: String,
      default: 'main',
      validator: (variant) => !!VARIANTS[variant],
    },
  },

  data() {
    return {
      VARIANTS,
    };
  },

  computed: {
    variantOptions() {
      return VARIANTS[this.variant] || VARIANTS.main;
    },

    background() {
      return this.variantOptions?.background;
    },

    titleCentered() {
      return this.variantOptions?.titleCentered;
    },

    direction() {
      return this.variantOptions?.direction;
    },

    classes() {
      return {
        [this.$style.section]: true,
        [this.$style[this.variant]]: true,
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './SectionSubscribe.module';
</style>
