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
        :class="[$style.image, $style.forms, $style.dots]"
      />

      <img
        src="~/assets/images/about/circles.svg"
        alt="Background image"
        aria-hidden="true"
        role="none"
        :class="[$style.image, $style.forms, $style.circles]"
      />

      <app-container :class="$style.container">
        <app-about :class="$style.content" />
      </app-container>
    </section>

    <section :class="[$style.section, $style.courses]">
      <app-container :class="$style.container">
        <app-courses-featured :class="$style.content" />
      </app-container>
    </section>

    <section :class="[$style.section, $style.benefits]">
      <app-container :class="$style.container">
        <app-benefits :class="$style.content" />
      </app-container>
    </section>

    <section :class="[$style.section, $style.events]">
      <app-container :class="$style.container">
        <app-events-featured :class="$style.content" />
      </app-container>
    </section>

    <section :class="[$style.section, $style.certificate]">
      <app-container :class="$style.container">
        <app-certificate :class="$style.content" />
      </app-container>
    </section>

    <section :class="[$style.section, $style.team]">
      <app-container :class="$style.container">
        <app-team :class="[$style.content, $style.team]" is-swiper />

        <app-testimonials :class="[$style.content, $style.testimonials]" />
      </app-container>
    </section>

    <section :class="[$style.section, $style.posts]">
      <app-container :class="$style.container">
        <app-posts-latest :class="$style.content" />
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
  name: 'IndexPage',
};
</script>

<style lang="scss" module>
@import './index.module';
</style>
