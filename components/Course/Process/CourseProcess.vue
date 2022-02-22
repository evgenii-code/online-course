<template>
  <article :class="$style.process">
    <app-heading centered :class="$style.heading">
      <template #title><slot name="title" /></template>
      <template #subtitle><slot name="subtitle" /></template>
    </app-heading>

    <ul :class="$style.steps">
      <li
        v-for="(step, index) in steps"
        :key="`step-${index}`"
        :class="$style.step"
      >
        <p :class="$style.count">{{ getStepIndex(index) }}</p>
        <h3 :class="$style.title">{{ step.title }}</h3>
        <p :class="$style.description">{{ step.description }}</p>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'AppCourseProcess',

  props: {
    steps: {
      type: Array,
      required: true,
    },
  },

  methods: {
    getStepIndex(index) {
      return String(index + 1).padStart(2, '0');
    },
  },
};
</script>

<style lang="scss" module>
@import './CourseProcess.module';
</style>
