<template>
  <main :class="$style.main">
    <app-section-wrapper :class="[$style.section, $style.courses]">
      <template #noContainer>
        <img
          src="~/assets/images/courses/background/dots.svg"
          alt="Background image"
          aria-hidden="true"
          :class="[$style.image, $style.courses, $style.dots]"
        />

        <img
          src="~/assets/images/courses/background/circles.svg"
          alt="Background image"
          aria-hidden="true"
          :class="[$style.image, $style.courses, $style.circles]"
        />

        <img
          src="~/assets/images/courses/background/arrows.svg"
          alt="Background image"
          aria-hidden="true"
          :class="[$style.image, $style.courses, $style.arrows]"
        />
      </template>

      <app-courses-all :class="$style.content" />
    </app-section-wrapper>

    <app-section-wrapper
      background="gray"
      :class="[$style.section, $style.testimonials]"
    >
      <app-testimonials :class="$style.content" />
    </app-section-wrapper>

    <app-section-wrapper :class="[$style.section, $style.certificate]">
      <app-certificate :class="$style.content" />
    </app-section-wrapper>

    <app-section-subscribe :class="[$style.section, $style.subscribe]">
      <template #title>{{ $t('subscribe.announcements.title') }}</template>
      <template #subtitle>{{
        $t('subscribe.announcements.subtitle')
      }}</template>
    </app-section-subscribe>
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
