<template>
  <header v-click-outside="closeMobileMenu" :class="headerClasses">
    <transition name="show">
      <div
        v-if="isMobileMenuOpen"
        :class="$style.overlay"
        aria-hidden="true"
        role="none"
        @click="closeMobileMenu"
      />
    </transition>

    <app-container :class="$style.container">
      <v-logo :theme="theme" :class="$style.logo" />

      <app-header-menu-desktop
        :class="[$style.menu, $style.desktop]"
        :menu-links="menuLinks"
      />

      <div :class="$style.wrapper">
        <v-button size="large">{{ $t('header.consultation') }}</v-button>

        <app-header-account :class="$style.account" />
      </div>

      <v-button-burger
        :id="$options.ids.burgerButton"
        :is-active="isMobileMenuOpen"
        :class="$style.burger"
        :aria-controls="$options.ids.mobileMenu"
        :aria-label="$t('ui.menuButton')"
        role="button"
        @click="toggleMobileMenu"
      />
    </app-container>

    <transition name="slide">
      <app-header-menu-mobile
        v-if="isMobileMenuOpen"
        :id="$options.ids.mobileMenu"
        v-trap-focus="closeMobileMenu"
        :aria-labelledby="$options.ids.burgerButton"
        :menu-links="menuLinks"
        :class="[$style.menu, $style.mobile]"
      />
    </transition>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import clickOutside from '~/directives/click-outside';
import trapFocus from '~/directives/trap-focus';
import toggleBodyClassName from '~/utils/toggleBodyClassName';

const HEADER_THEME_NAMES = ['light', 'dark'];

export default {
  name: 'AppHeader',

  directives: {
    'click-outside': clickOutside,
    'trap-focus': trapFocus,
  },

  props: {
    theme: {
      type: String,
      default: 'light',
      validator: (theme) => HEADER_THEME_NAMES.includes(theme),
    },
  },

  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
    };
  },

  ids: {
    mobileMenu: 'mobile-menu',
    burgerButton: 'burger-button',
  },

  computed: {
    ...mapGetters({
      menuLinks: 'core/menuLinks',
    }),

    headerClasses() {
      return {
        [this.$style.header]: true,
        [this.$style.scrolled]: this.isScrolled || this.isMobileMenuOpen,
        [this.$style[this.theme]]: true,
      };
    },
  },

  watch: {
    $route() {
      this.closeMobileMenu();
    },

    isMobileMenuOpen(value) {
      toggleBodyClassName(this.utilsStyle['body-blocked'], value);
    },
  },

  created() {
    this.setEventListeners();
  },

  destroyed() {
    this.removeEventListeners();
  },

  methods: {
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },

    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },

    setEventListeners() {
      if (process.server || !window) return;

      window.addEventListener('scroll', this.handleScroll);
    },

    removeEventListeners() {
      if (process.server || !window) return;

      window.removeEventListener('scroll', this.handleScroll);
    },

    handleScroll() {
      const { scrollY = 0 } = window || {};

      this.isScrolled = scrollY >= 100;
    },
  },
};
</script>

<style lang="scss" module>
@import './Header.module.scss';
</style>

<style lang="scss" module="utilsStyle">
@import '~/scss/utils/sharedStyles.scss';
</style>
