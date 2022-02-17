<template>
  <main :class="$style.main">
    <app-section-usp :class="[$style.section, $style.usp]" />

    <app-section-wrapper :class="[$style.section, $style.about]">
      <template #noContainer>
        <img
          src="~/assets/images/about/dots.svg"
          alt="Background image"
          aria-hidden="true"
          role="none"
          :class="[$style.image, $style.forms, $style.dots]"
        />

        <img
          src="~/assets/images/about/circles.svg"
          alt="Background image"
          aria-hidden="true"
          role="none"
          :class="[$style.image, $style.forms, $style.circles]"
        />
      </template>

      <app-about />
    </app-section-wrapper>

    <app-section-wrapper :class="[$style.section, $style.courses]">
      <app-courses-featured />
    </app-section-wrapper>

    <app-section-wrapper :class="[$style.section, $style.benefits]">
      <app-benefits />
    </app-section-wrapper>

    <app-section-wrapper
      background="gradient-primary"
      :class="[$style.section, $style.events]"
    >
      <app-events-featured />
    </app-section-wrapper>

    <app-section-wrapper :class="[$style.section, $style.certificate]">
      <app-certificate />
    </app-section-wrapper>

    <app-section-wrapper
      background="gray"
      :class="[$style.section, $style.team]"
    >
      <app-team :class="[$style.content, $style.team]" is-swiper />

      <app-testimonials :class="[$style.content, $style.testimonials]" />
    </app-section-wrapper>

    <app-section-wrapper :class="[$style.section, $style.posts]">
      <app-posts-latest />
    </app-section-wrapper>

    <app-section-subscribe :class="[$style.section, $style.subscribe]" />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>

<style lang="scss" module>
@import './index.module';
</style>
