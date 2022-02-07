<template>
  <div :class="$style.certificate">
    <app-heading :class="$style.heading">
      <template #title>{{ $t('certificate.title') }}</template>

      <template #subtitle>{{ $t('certificate.subtitle') }}</template>
    </app-heading>

    <div :class="$style.wrapper">
      <p :class="$style.description">{{ $t('certificate.description') }}</p>

      <ul :class="$style.partners">
        <li
          v-for="(partner, index) in partners"
          :key="`partner-${index}`"
          :class="$style.partner"
        >
          <a
            :href="partner.link"
            target="_blank"
            rel="noopener noreferrer"
            :class="$style.link"
          >
            <img
              :class="$style.image"
              :src="getPartnerImage(partner.img)"
              :alt="partner.name"
          /></a>
        </li>
      </ul>
    </div>

    <picture :class="$style.picture">
      <img
        :class="$style.image"
        src="~assets/images/certificate/certificate.jpg"
        :alt="$t('certificate.subtitle')"
      />
    </picture>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppCertificate',

  computed: {
    ...mapGetters({
      partners: 'core/partnersLinks',
    }),
  },

  methods: {
    getPartnerImage(img) {
      return require(`~/assets/images/certificate/${img}`);
    },
  },
};
</script>

<style lang="scss" module>
@import './Certificate.module';
</style>
