<template>
  <article :class="$style.program">
    <app-heading :class="$style.heading">
      <template #title><slot name="title" /></template>
      <template #subtitle><slot name="subtitle" /></template>
    </app-heading>

    <v-accordion-list :class="$style.list" :items="listItems" />

    <picture :class="$style.picture">
      <img :class="$style.image" :src="imageUrl" :alt="$t('ui.illustration')" />
    </picture>
  </article>
</template>

<script>
export default {
  name: 'AppCourseProgram',

  props: {
    listItems: {
      type: Array,
      required: true,
    },

    imageName: {
      type: String,
      default: 'illustration-1.svg',
    },
  },

  computed: {
    imageUrl() {
      return require(`~/assets/images/courses/program/${this.imageName}`);
    },
  },
};
</script>

<style lang="scss" module>
@import './CourseProgram.module';
</style>
