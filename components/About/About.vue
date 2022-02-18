<template>
  <article :class="$style.about">
    <picture :class="$style.picture">
      <source
        srcset="~/assets/images/about/student@x2.jpg"
        media="(min-width: 375px)"
      />

      <img
        :class="$style.image"
        src="~/assets/images/about/student@x1.jpg"
        :alt="$t('about.title')"
      />
    </picture>

    <div :class="$style.info">
      <app-heading :class="$style.heading">
        <template #subtitle>{{ $t('about.subtitle') }}</template>

        <template #title>{{ $t('about.title') }}</template>
      </app-heading>

      <app-text-list :class="$style.facts">
        <template
          v-for="(fact, index) in $t('about.facts')"
          #[getSlotName(index)]
        >
          <span :key="`fact-${index}`">{{ fact.text }}</span>
        </template>
      </app-text-list>

      <v-button link :to="localePath('/about')" :class="$style.button">{{
        $t('about.more')
      }}</v-button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'AppAbout',

  methods: {
    getSlotName(index) {
      return `item-${index + 1}`;
    },
  },
};
</script>

<style lang="scss" module>
@import './About.module';
</style>
