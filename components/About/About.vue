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

      <ul :class="$style.facts">
        <li
          v-for="(fact, index) in $t('about.facts')"
          :key="`fact-${index}`"
          :class="$style.fact"
        >
          <v-icon :class="$style.icon" name="check" size="small" />

          <p :class="$style.text">{{ fact.text }}</p>
        </li>
      </ul>

      <nuxt-link :class="$style.link" :to="localePath('/about')">
        <v-button :class="$style.button">{{ $t('about.more') }}</v-button>
      </nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'AppAbout',
};
</script>

<style lang="scss" module>
@import './About.module';
</style>
