<template>
  <article :class="$style.about">
    <div :class="$style.wrapper">
      <app-heading :class="$style.heading">
        <template #title><slot name="title" /></template>
      </app-heading>

      <div :class="$style.info">
        <slot name="info" />
      </div>
    </div>

    <app-card-details
      :class="$style.details"
      :details="details"
      :external-link="externalLink"
      :button="buttonText"
      :date="date"
    >
    </app-card-details>
  </article>
</template>

<script>
export default {
  name: 'AppCouseAbout',

  props: {
    buttonText: {
      type: String,
      required: true,
    },

    course: {
      type: Object,
      required: true,
    },

    details: {
      type: Array,
      required: true,
    },

    externalLink: {
      type: Object,
      default: null,
    },

    date: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" module>
@import './CourseAbout.module';
</style>
