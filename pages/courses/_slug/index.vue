<template>
  <main :class="$style.main">
    <app-section-title :class="[$style.section, $style.title]">
      <template #subtitle>{{ $t(`courses.themes.${course.theme}`) }}</template>
      <template #title>{{ $t(course.title) }}</template>
    </app-section-title>

    <app-section-wrapper :class="[$style.section, $style.about]">
      <app-course-about
        :course="course"
        :button-text="$t('course.join')"
        :date="date"
        :details="$t('course.details')"
      >
        <template #title>{{ $t('course.about.title') }}</template>

        <template #info>
          <app-course-info :list-items="$t('course.about.list')">
            <template #title>{{ $t('course.about.subtitle') }}</template>
            <template #description>{{
              $t('course.about.description')
            }}</template>
          </app-course-info>
        </template>
      </app-course-about>
    </app-section-wrapper>

    <app-section-wrapper :class="[$style.section, $style.curator]">
      <app-curator
        stats
        img-name="cody-fisher.png"
        :role="$t('course.author.role')"
        :description="$t('course.author.description')"
        :author-id="course.author_id"
      />
    </app-section-wrapper>

    <app-section-wrapper :class="[$style.section, $style.audience]">
      <app-audience :audience-list="$t('course.audience.items')">
        <template #title>{{ $t('course.audience.title') }}</template>
        <template #subtitle>{{ $t('course.audience.subtitle') }}</template>
      </app-audience>
    </app-section-wrapper>

    <app-section-wrapper :class="[$style.section, $style.program]">
      <app-course-program :list-items="$t('course.program.lessons')">
        <template #title>{{ $t('course.program.title') }}</template>
        <template #subtitle>{{ $t('course.program.subtitle') }}</template>
      </app-course-program>
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
import { getRangeFromDates } from '~/utils/date';

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

    date() {
      const locale = this.$i18n?.locale || 'en';
      const start = new Date(this.course.date.start);
      const end = new Date(this.course.date.end);
      const options = {
        month: 'short',
        day: 'numeric',
        hour12: false,
      };

      return getRangeFromDates({
        locale,
        start,
        end,
        options,
      });
    },
  },
};
</script>

<style lang="scss" module>
@import './index.module';
</style>
