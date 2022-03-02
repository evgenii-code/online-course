<template>
  <app-section-wrapper background="gradient-primary" :class="$style.section">
    <template #noContainer>
      <img
        src="~/assets/images/usp/shapes/arrows-up-right.svg"
        alt="Background image"
        aria-hidden="true"
        :class="[$style.image, $style.up]"
      />

      <img
        src="~/assets/images/usp/shapes/arrows-down.svg"
        alt="Background image"
        aria-hidden="true"
        :class="[$style.image, $style.down]"
      />

      <img
        src="~/assets/images/usp/shapes/semi-circle-three.svg"
        alt="Background image"
        aria-hidden="true"
        :class="[$style.image, $style['semi-circle-three']]"
      />

      <img
        src="~/assets/images/usp/shapes/semi-circle-one.svg"
        alt="Background image"
        aria-hidden="true"
        :class="[$style.image, $style['semi-circle-one']]"
      />

      <img
        src="~/assets/images/usp/shapes/circles.svg"
        alt="Background image"
        aria-hidden="true"
        :class="[$style.image, $style.circles]"
      />

      <img
        src="~/assets/images/usp/shapes/dots.svg"
        alt="Background image"
        aria-hidden="true"
        :class="[$style.image, $style.dots]"
      />
    </template>

    <app-unique-selling-point :class="$style.content" />
  </app-section-wrapper>
</template>

<script>
export default {
  name: 'AppSectionUsp',
};
</script>

<style lang="scss" module>
@import './SectionUsp.module';
</style>
