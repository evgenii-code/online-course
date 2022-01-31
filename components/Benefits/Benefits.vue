<template>
  <div :class="$style.benefits">
    <app-heading :class="$style.heading" centered>
      <template #subtitle>{{ $t('benefits.subtitle') }}</template>

      <template #title>{{ $t('benefits.title') }}</template>
    </app-heading>

    <v-tabs full-width-tabs :class="$style.tabs">
      <v-tabs-item
        v-for="(benefit, index) in $t('benefits.items')"
        :key="`benefit-${index}`"
        :title="benefit.name"
        :icon="benefit.icon"
        :selected="index === 0"
        :class="$style.item"
      >
        <h3 :class="$style.title">{{ benefit.title }}</h3>

        <i18n
          :class="$style.description"
          tag="p"
          :path="`benefits.items[${index}].description`"
        >
          <template #break>
            <br :class="$style.break" />
          </template>
        </i18n>

        <picture :class="$style.picture">
          <img
            :class="$style.image"
            :src="require(`~/assets/${benefit.img}`)"
            :alt="benefit.name"
          />
        </picture>
      </v-tabs-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'AppBenefits',
};
</script>

<style lang="scss" module>
@import './Benefits.module';
</style>
