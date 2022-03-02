<template>
  <span :class="classes">
    <label v-if="label" :for="uuid" :class="$style.label">{{ label }}</label>

    <span :class="$style.wrapper">
      <input
        :id="uuid"
        v-model="internalValue"
        :type="type"
        :name="name"
        v-bind="$attrs"
        :class="$style.field"
        :disabled="disabled"
        v-on="events"
      />

      <span v-if="hasPostfix" :class="$style.postfix">
        <slot name="postfix"></slot>
      </span>
    </span>

    <p v-if="internalError" :class="$style.message">
      {{ internalError }}
    </p>
  </span>
</template>

<script>
import getUID from '~/utils/getUID';

const INPUT_SIZES = ['small', 'regular', 'large'];
const INPUT_THEME_NAMES = ['light', 'dark'];

export default {
  name: 'AppInput',

  inheritAttrs: false,

  props: {
    value: {
      type: String,
      default: '',
    },

    label: {
      type: String,
      default: '',
    },

    type: {
      type: String,
      default: 'text',
    },

    error: {
      type: [String, Boolean],
      default: '',
    },

    success: {
      type: Boolean,
      default: false,
    },

    name: {
      type: String,
      default: '',
    },

    size: {
      type: String,
      default: 'regular',
      validator: (size) => INPUT_SIZES.includes(size),
    },

    theme: {
      type: String,
      default: 'light',
      validator: (theme) => INPUT_THEME_NAMES.includes(theme),
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      internalValue: this.value,
      internalError: this.error,
    };
  },

  computed: {
    events() {
      return {
        ...this.$listeners,
        input: this.onInput,
      };
    },

    classes() {
      return {
        [this.$style.input]: true,
        [this.$style[this.size]]: true,
        [this.$style[this.theme]]: true,
        [this.$style.error]: !!this.internalError,
        [this.$style.success]: this.success,
        [this.$style.disabled]: this.disabled,
      };
    },

    hasPostfix() {
      return !!this.$slots.postfix;
    },
  },

  watch: {
    value(value) {
      this.internalValue = value;
    },

    error(error) {
      this.internalError = error;
    },
  },

  beforeCreate() {
    this.uuid = getUID();
  },

  methods: {
    onInput(event) {
      this.internalValue = event.target.value;
      this.$emit('input', this.internalValue);
    },
  },
};
</script>

<style lang="scss" module>
@import './Input.module.scss';
</style>
