<template>
  <ul :class="$style.social">
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
        <v-icon :class="$style.icon" :name="socialLink.icon" />

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
  },
};
</script>

<style lang="scss" module>
@import './SocialLinks.module.scss';
</style>
