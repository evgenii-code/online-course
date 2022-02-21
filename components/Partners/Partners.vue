<template>
  <ul :class="$style.partners">
    <li
      v-for="(partner, index) in limitPartners"
      :key="`partner-${index}`"
      :class="$style.partner"
    >
      <a
        :href="partner.link"
        target="_blank"
        rel="noopener noreferrer"
        :class="[$style.link, { [$style.colorless]: colorless }]"
      >
        <img
          :class="$style.image"
          :src="getPartnerImage(partner.img)"
          :alt="partner.name"
        />

        <!-- Description for screen readers -->
        <span :class="$style['sr-only']">{{ partner.name }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppPartners',

  props: {
    limit: {
      type: Number,
      default: 3,
    },

    colorless: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapGetters({
      partners: 'core/partnersLinks',
    }),

    limitPartners() {
      return this.partners?.slice(0, this.limit) || [];
    },
  },

  methods: {
    getPartnerImage(img) {
      return require(`~/assets/images/partners/${img}`);
    },
  },
};
</script>

<style lang="scss" module>
@import './Partners.module';
</style>
