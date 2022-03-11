<template>
  <nav :class="$style.picker">
    <fieldset :class="$style.fieldset">
      <legend :class="titleClasses">{{ title }}</legend>

      <label
        v-for="(color, index) of colors"
        :key="color"
        :class="getLabelClasses(color)"
      >
        <input
          :id="`radio-${index}`"
          v-model="colorMode"
          type="radio"
          :name="name"
          :value="color"
          :class="[$style.radio, $style['sr-only']]"
        />

        <component :is="`icon-${color}`" :class="$style.icon" />

        <p :class="$style['sr-only']">{{ color }}</p>
      </label>

      <span :class="$style.glider" :style="gliderPosition" />
    </fieldset>
  </nav>
</template>

<script>
import IconSystem from '@/assets/icons/circle-dot-regular.svg?inline';
import IconLight from '@/assets/icons/sun.svg?inline';
import IconDark from '@/assets/icons/moon.svg?inline';

export default {
  name: 'AppThemePicker',

  components: {
    IconSystem,
    IconLight,
    IconDark,
  },

  props: {
    titleVisible: {
      type: Boolean,
      default: false,
    },

    title: {
      type: String,
      default: 'Color scheme',
    },

    name: {
      type: String,
      default: 'color-scheme',
    },
  },

  data() {
    return {
      colors: ['light', 'system', 'dark'],
    };
  },

  computed: {
    titleClasses() {
      return {
        [this.$style.title]: true,
        [this.$style['sr-only']]: !this.titleVisible,
      };
    },
    colorMode: {
      get() {
        return this.$colorMode.unknown ? 'light' : this.$colorMode.preference;
      },

      set(color) {
        this.$colorMode.preference = color;
      },
    },

    gliderPosition() {
      const position = this.colors.indexOf(this.colorMode);

      return `--theme-glider-position: calc(${
        100 * position
      }% + var(--icons-gap) * ${position})`;
    },
  },

  methods: {
    setColorMode(color) {
      this.$colorMode.preference = color;
    },

    getLabelClasses(color) {
      const classes = {
        [this.$style.label]: true,
      };

      if (this.$colorMode.unknown) {
        return classes;
      }

      return {
        ...classes,
        [this.$style.selected]: color === this.$colorMode.preference,
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './ThemePicker.module';
</style>
