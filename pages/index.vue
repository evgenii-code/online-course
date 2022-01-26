<template>
  <main :class="$style.main">
    <app-background :class="[$style.section, $style.usp]">
      <app-container :class="$style.container">
        <app-unique-selling-point :class="$style.content" />
      </app-container>
    </app-background>

    <section :class="[$style.section, $style.about]">
      <img
        src="~/assets/images/about/dots.svg"
        alt="Background image"
        aria-hidden="true"
        role="none"
        :class="[$style.image, $style.dots]"
      />

      <img
        src="~/assets/images/about/circles.svg"
        alt="Background image"
        aria-hidden="true"
        role="none"
        :class="[$style.image, $style.circles]"
      />

      <app-container :class="$style.container">
        <app-about :class="$style.content" />
      </app-container>
    </section>

    <section :class="[$style.section, $style.courses]">
      <app-container :class="$style.container">
        <app-courses :class="$style.content" />
      </app-container>
    </section>
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
