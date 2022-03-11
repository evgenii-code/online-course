<template>
  <nav :class="$style.picker">
    <fieldset :class="$style.fieldset">
      <legend :class="titleClasses">{{ title }}</legend>

      <label
        v-for="(theme, index) of themes"
        :key="theme.value"
        :class="getLabelClasses(theme.value)"
        :for="`picker-radio-${index}`"
      >
        <input
          :id="`picker-radio-${index}`"
          v-model="selectedTheme"
          type="radio"
          :value="theme.value"
          :class="[$style.radio, $style['sr-only']]"
        />

        <v-icon aria-hidden="true" :class="$style.icon" :name="theme.icon" />

        <p :class="$style['sr-only']">{{ theme.text }}</p>
      </label>

      <span
        aria-hidden="true"
        role="none"
        :class="$style.glider"
        :style="gliderPosition"
      />
    </fieldset>
  </nav>
</template>

<script>
export default {
  name: 'AppThemePicker',

  props: {
    titleVisible: {
      type: Boolean,
      default: false,
    },

    title: {
      type: String,
      default: 'Color theme',
    },

    themes: {
      type: Array,
      required: true,
    },
  },

  computed: {
    titleClasses() {
      return {
        [this.$style.title]: true,
        [this.$style['sr-only']]: !this.titleVisible,
      };
    },

    selectedTheme: {
      get() {
        return this.$colorMode.unknown ? 'light' : this.$colorMode.preference;
      },

      set(themeName) {
        this.$colorMode.preference = themeName;
      },
    },

    gliderPosition() {
      let position = this.themes.findIndex(
        (theme) => theme.value === this.selectedTheme
      );

      if (position === -1) {
        position = 0;
      }

      return `--theme-glider-position: calc(${
        100 * position
      }% + var(--icons-gap) * ${position})`;
    },
  },

  methods: {
    setColorMode(themeName) {
      this.$colorMode.preference = themeName;
    },

    getLabelClasses(themeName) {
      const classes = {
        [this.$style.label]: true,
      };

      if (this.$colorMode.unknown) {
        return classes;
      }

      return {
        ...classes,
        [this.$style.selected]: themeName === this.$colorMode.preference,
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './ThemePicker.module';
</style>
