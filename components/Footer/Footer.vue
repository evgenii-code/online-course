<template>
  <footer :class="$style.footer">
    <!-- Top half -->
    <div :class="[$style.half, $style.top]">
      <app-container :class="$style.grid">
        <!-- Description section -->
        <div :class="$style.description">
          <v-logo theme="dark" :class="$style.logo" />

          <p :class="$style.text">{{ $t('footer.description') }}</p>

          <app-footer-social
            :social-links="socialLinks"
            :class="$style.social"
          />
        </div>

        <!-- Site map -->
        <app-footer-list :list-items="menuLinks">
          <template #header>
            <h2 :class="$style.title">{{ $t('footer.map') }}</h2>
          </template>
        </app-footer-list>

        <!-- Courses -->
        <app-footer-list :list-items="[]">
          <template #header>
            <h2 :class="$style.title">{{ $t('footer.courses') }}</h2>
          </template>
        </app-footer-list>

        <!-- Contacts -->
        <app-footer-list :list-items="contactLinks">
          <template #header>
            <h2 :class="$style.title">
              {{ $t('footer.contacts') }}
            </h2>
          </template>
        </app-footer-list>

        <!-- Subscription -->
        <div :class="$style.subscription">
          <h2 :class="$style.title">{{ $t('footer.subscription') }}</h2>

          <p :class="$style.footnote">{{ $t('footer.footnote') }}</p>
        </div>
      </app-container>
    </div>

    <!-- Bottom half -->
    <div :class="[$style.half, $style.bottom]">
      <app-container :class="$style.container">
        <small :class="$style.copyright">
          &#169;

          <i18n tag="span" :class="$style.text" path="footer.copyright">
            <template #love>
              <v-icon :class="$style.heart" name="heart" size="small" />
            </template>
          </i18n>
        </small>

        <button :class="$style.top" @click="scrollToTop">
          {{ $t('footer.goToTop') }}
        </button>
      </app-container>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppFooter',

  computed: {
    ...mapGetters({
      menuLinks: 'core/menuLinks',
      contactLinks: 'core/contactLinks',
      socialLinks: 'core/socialLinks',
    }),
  },

  methods: {
    scrollToTop() {
      if (!window) return;

      window?.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" module>
@import './Footer.module.scss';
</style>
