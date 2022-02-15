<template>
  <main :class="$style.main">
    <section :class="[$style.section, $style.courses]">
      <img
        src="~/assets/images/courses/background/dots.svg"
        alt="Background image"
        aria-hidden="true"
        role="none"
        :class="[$style.image, $style.courses, $style.dots]"
      />

      <img
        src="~/assets/images/courses/background/circles.svg"
        alt="Background image"
        aria-hidden="true"
        role="none"
        :class="[$style.image, $style.courses, $style.circles]"
      />

      <img
        src="~/assets/images/courses/background/arrows.svg"
        alt="Background image"
        aria-hidden="true"
        role="none"
        :class="[$style.image, $style.courses, $style.arrows]"
      />

      <app-container :class="$style.container">
        <app-courses-all :class="$style.content" />
      </app-container>
    </section>
  </main>
</template>

<script>
export default {
  name: 'PageCaourses',
};
</script>

<style lang="scss" module>
@import './index.module';
</style>
