<template>
  <ul :class="classes">
    <li
      v-for="socialLink in socialLinks"
      :key="socialLink.link"
      :class="$style.item"
    >
      <a
        rel="noopener noreferrer"
        target="_blank"
        :href="socialLink.link"
        :class="$style.link"
      >
        <v-icon :class="$style.icon" :size="size" :name="socialLink.icon" />

        <!-- Description for screen readers -->
        <span :class="$style['sr-only']">{{ socialLink.title }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppSocialLinks',

  props: {
    socialLinks: {
      type: Array,
      required: true,
    },

    size: {
      type: String,
      default: 'regular',
    },
  },

  computed: {
    classes() {
      return {
        [this.$style.social]: true,
        [this.$style[this.size]]: true,
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './SocialLinks.module.scss';
</style>
