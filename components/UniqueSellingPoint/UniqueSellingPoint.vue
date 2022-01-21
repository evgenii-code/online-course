<template>
  <div :class="$style.usp">
    <div :class="$style.top">
      <div :class="$style.side">
        <div :class="$style.showreel">
          <v-button-round outter-glow :class="$style.play" />

          <p :class="$style.text">{{ $t('usp.playShowreel') }}</p>
        </div>

        <h2 :class="$style.title">{{ $t('usp.title') }}</h2>

        <div :class="$style.buttons">
          <v-button :class="$style.button" outline>{{
            $t('usp.aboutUs')
          }}</v-button>

          <v-button :class="$style.button">{{ $t('usp.courses') }}</v-button>
        </div>
      </div>

      <img
        :class="$style.image"
        src="~assets/images/usp/illustration.svg"
        :alt="$t('usp.title')"
      />
    </div>

    <ul :class="$style.benefits">
      <template v-for="(benefit, index) in benefits">
        <li
          :key="`bullet-${index}`"
          :class="[$style.benefit, $style.bullet]"
          aria-hidden="true"
          role="none"
        >
          <span />
        </li>

        <li :key="`benefit-${index}`" :class="$style.benefit">
          <p :class="$style.count">{{ benefit.count }}</p>
          <p :class="$style.text">{{ benefit.text }}</p>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppUniqueSellingPoint',

  computed: {
    benefits() {
      return this.$t('usp.benefits');
    },
  },
};
</script>

<style lang="scss" module>
@import './UniqueSellingPoint.module';
</style>
