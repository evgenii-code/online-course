<template>
  <article :class="$style.curator">
    <picture :class="$style.picture">
      <img
        :class="$style.image"
        :src="getCuratorImage(curator.img)"
        :alt="curator.name"
      />
    </picture>

    <app-heading :class="$style.heading">
      <template #title>{{ curator.name }}</template>
      <template #subtitle>{{ curator.role }}</template>
    </app-heading>

    <div :class="$style.info">
      <p :class="$style.position">{{ curator.position }}</p>

      <slot name="additional" />

      <p :class="$style.description">{{ curator.description }}</p>

      <app-partners v-if="partners" colorless :class="$style.partners" />

      <app-social-links
        v-if="curator.links"
        :class="$style.links"
        :social-links="curator.links"
      />
    </div>
  </article>
</template>

<script>
export default {
  name: 'AppCurator',

  props: {
    curator: {
      type: Object,
      required: true,
    },

    partners: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    getCuratorImage(img) {
      return require(`~/assets/images/curator/${img}`);
    },
  },
};
</script>

<style lang="scss" module>
@import './Curator.module';
</style>
