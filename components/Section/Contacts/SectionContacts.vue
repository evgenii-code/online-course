<template>
  <app-section-wrapper :class="$style.contacts" direction="row">
    <div :class="[$style.wrapper, $style.text]">
      <app-heading :class="$style.heading">
        <template #title>{{ $t('contacts.title') }}</template>
        <template #subtitle>{{ $t('contacts.subtitle') }}</template>
      </app-heading>

      <ul :class="$style.list">
        <li
          v-for="(contactLink, index) in contactLinks"
          :key="`contact-${index}`"
          :class="$style.item"
        >
          <v-icon :class="$style.icon" size="large" :name="contactLink.icon" />

          <div :class="$style.info">
            <h3 :class="$style.subtitle">{{ $t(contactLink.text) }}</h3>

            <component
              :is="contactLink.tag"
              :class="$style.link"
              v-bind="getAttrs(contactLink)"
              >{{ contactLink.title }}</component
            >
          </div>
        </li>
      </ul>

      <div :class="$style.follow">
        <h3 :class="$style.subtitle">{{ $t('contacts.follow') }}</h3>

        <app-social-links :class="$style.social" :social-links="socialLinks" />
      </div>
    </div>

    <div :class="[$style.wrapper, $style.map]">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        style="border: 0"
        loading="lazy"
        allowfullscreen
        :src="$config.googleMapsEmbedUrl"
        :class="$style.iframe"
      />
    </div>
  </app-section-wrapper>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppSectionContacts',

  computed: {
    ...mapGetters({
      contactLinks: 'core/contactLinks',
      socialLinks: 'core/socialLinks',
    }),
  },

  methods: {
    getAttrs(contactLink) {
      if (contactLink.tag === 'a') {
        return {
          href: contactLink.link,
          target: '_blank',
          rel: 'noopener noreferrer',
        };
      }

      return {};
    },
  },
};
</script>

<style lang="scss" module>
@import './SectionContacts.module';
</style>
