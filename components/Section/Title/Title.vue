<template>
  <app-section-wrapper background="gradient-primary" :class="$style.section">
    <template #noContainer>
      <img
        src="~/assets/images/usp/shapes/arrows-up-right.svg"
        alt="Background image"
        aria-hidden="true"
        role="none"
        :class="[$style.image, $style.up]"
      />

      <img
        src="~/assets/images/usp/shapes/semi-circle-three.svg"
        alt="Background image"
        aria-hidden="true"
        role="none"
        :class="[$style.image, $style['semi-circle-three']]"
      />

      <img
        src="~/assets/images/usp/shapes/circles.svg"
        alt="Background image"
        aria-hidden="true"
        role="none"
        :class="[$style.image, $style.circles]"
      />

      <img
        src="~/assets/images/usp/shapes/dots.svg"
        alt="Background image"
        aria-hidden="true"
        role="none"
        :class="[$style.image, $style.dots]"
      />
    </template>

    <app-heading :class="$style.heading">
      <template #subtitle><slot name="subtitle" /></template>
      <template #title><slot name="title" /></template>
    </app-heading>
  </app-section-wrapper>
</template>

<script>
export default {
  name: 'AppTitle',
};
</script>

<style lang="scss" module>
@import './Title.module';
</style>
