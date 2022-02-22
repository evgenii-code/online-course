<template>
  <main :class="$style.main">
    <app-section-title :class="[$style.section, $style.title]">
      <template #subtitle>{{ $t(`courses.themes.${course.theme}`) }}</template>
      <template #title>{{ $t(course.title) }}</template>
    </app-section-title>

    <app-section-wrapper :class="[$style.section, $style.curator]">
      <app-curator
        stats
        img-name="cody-fisher.png"
        :role="$t('course.role')"
        :description="$t('course.description')"
        :author-id="course.author_id"
      />
    </app-section-wrapper>

    <app-section-wrapper :class="[$style.section, $style.audience]">
      <app-audience :audience-list="$t('course.audience.items')">
        <template #title>{{ $t('course.audience.title') }}</template>
        <template #subtitle>{{ $t('course.audience.subtitle') }}</template>
      </app-audience>
    </app-section-wrapper>

    <app-section-wrapper
      background="gray"
      :class="[$style.section, $style.testimonials]"
    >
      <app-testimonials />
    </app-section-wrapper>

    <app-section-request
      variant="course"
      :class="[$style.section, $style.request]"
    >
      <template #title>{{ $t('request.course.title') }}</template>
      <template #subtitle>{{ $t('request.course.subtitle') }}</template>
      <template #submit>{{ $t('request.course.submit') }}</template>
    </app-section-request>

    <app-section-carousel
      :class="[$style.section, $style.courses]"
      :items="courses"
      card-component="app-card-course"
      carousel-id="carousel-course"
      path-to-more-items="/courses"
      show-footer
    >
      <template #title>{{ $t('course.all.title') }}</template>
      <template #subtitle>{{ $t('course.all.subtitle') }}</template>
      <template #more>{{ $t('course.all.more') }}</template>
      <template #action>{{ $t('course.all.action') }}</template>
    </app-section-carousel>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppSpecificCoursePage',

  computed: {
    ...mapGetters({
      courseBySlug: 'core/courseBySlug',
      teamMemberById: 'core/teamMemberById',
      courses: 'core/courses',
    }),

    slug() {
      return this.$route?.params?.slug;
    },

    course() {
      return this.courseBySlug(this.slug);
    },
  },
};
</script>

<style lang="scss" module>
@import './index.module';
</style>
