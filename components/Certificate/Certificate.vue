<template>
  <div :class="$style.certificate">
    <app-heading :class="$style.heading">
      <template #title>{{ $t('certificate.title') }}</template>

      <template #subtitle>{{ $t('certificate.subtitle') }}</template>
    </app-heading>

    <div :class="$style.wrapper">
      <p :class="$style.description">{{ $t('certificate.description') }}</p>

      <app-partners :class="$style.partners" />
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
export default {
  name: 'AppCertificate',
};
</script>

<style lang="scss" module>
@import './Certificate.module';
</style>
