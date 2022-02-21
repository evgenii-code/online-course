<template>
  <div :class="$style.card">
    <div
      v-for="(detail, index) in details"
      :key="`detail-${index}`"
      :class="$style.detail"
    >
      <h3 :class="$style.title">
        {{ detail.title }}
        <span :class="$style.value">{{ detail.value }}</span>
      </h3>

      <p :class="$style.text">{{ detail.text }}</p>
    </div>

    <a
      v-if="link"
      :class="$style.link"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      >{{ link.text }}</a
    >

    <slot name="button">
      <v-button :class="$style.button" v-on="$listeners">{{ button }}</v-button>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'AppCardDetails',

  props: {
    details: {
      type: Array,
      required: true,
    },

    link: {
      type: Object,
      default: null,
    },

    button: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" module>
@import './CardDetails.module';
</style>
