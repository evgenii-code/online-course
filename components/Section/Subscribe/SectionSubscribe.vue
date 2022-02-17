<template>
  <app-section-wrapper background="gradient-primary" :class="$style.section">
    <template #noContainer>
      <img
        src="~/assets/images/subscribe/illustration-1.svg"
        alt="Background image"
        aria-hidden="true"
        role="none"
        :class="[$style.image, $style.illustration, $style.left]"
      />
      <img
        src="~/assets/images/subscribe/illustration-1.svg"
        alt="Background image"
        aria-hidden="true"
        role="none"
        :class="[$style.image, $style.illustration, $style.right]"
      />
    </template>

    <app-subscribe :class="$style.content">
      <template #title>{{ $t('subscribe.announcements.title') }}</template>
      <template #subtitle>{{
        $t('subscribe.announcements.subtitle')
      }}</template>
    </app-subscribe>
  </app-section-wrapper>
</template>

<script>
export default {
  name: 'AppSectionSubscribe',
};
</script>

<style lang="scss" module>
@import './SectionSubscribe.module';
</style>
