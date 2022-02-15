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

    <section :class="[$style.section, $style.testimonials]">
      <app-container :class="$style.container">
        <app-testimonials :class="$style.content" />
      </app-container>
    </section>

    <section :class="[$style.section, $style.certificate]">
      <app-container :class="$style.container">
        <app-certificate :class="$style.content" />
      </app-container>
    </section>

    <section :class="[$style.section, $style.subscribe]">
      <img
        src="~/assets/images/subscribe/illustration-1.svg"
        alt="Background image"
        aria-hidden="true"
        role="none"
        :class="[$style.image, $style.illustration, $style.left]"
      />
      <img
        src="~/assets/images/subscribe/illustration-1.svg"
        alt="Background image"
        aria-hidden="true"
        role="none"
        :class="[$style.image, $style.illustration, $style.right]"
      />

      <app-container :class="$style.container">
        <app-subscribe :class="$style.content">
          <template #title>{{ $t('subscribe.announcements.title') }}</template>
          <template #subtitle>{{
            $t('subscribe.announcements.subtitle')
          }}</template>
        </app-subscribe>
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
