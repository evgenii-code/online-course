<template>
  <div :class="classes">
    <input
      :id="uuid"
      type="checkbox"
      :checked="shouldBeChecked"
      :value="value"
      :required="required"
      v-bind="$attrs"
      v-on="events"
    />

    <label :class="$style.label" :for="uuid">
      <i :class="$style.fake" />

      <span :class="$style.content">
        {{ label }}
        <slot />
      </span>
    </label>
  </div>
</template>

<script>
import getUID from '~/utils/getUID';

const CHECKBOX_VARIANT_NAMES = ['primary'];
const CHECKBOX_SIZES = ['regular'];

export default {
  name: 'AppCheckbox',

  inheritAttrs: false,

  model: {
    prop: 'modelValue',
    event: 'change',
  },

  props: {
    label: {
      type: String,
      default: '',
    },

    value: {
      type: String,
      default: '',
    },

    required: {
      type: Boolean,
      default: false,
    },

    modelValue: {
      type: [Boolean, Array],
      default: false,
    },

    trueValue: {
      type: Boolean,
      default: true,
    },

    falseValue: {
      type: Boolean,
      default: false,
    },

    size: {
      type: String,
      default: 'regular',
      validator: (size) => CHECKBOX_SIZES.includes(size),
    },

    variant: {
      type: String,
      default: 'primary',
      validator: (variant) => CHECKBOX_VARIANT_NAMES.includes(variant),
    },
  },

  computed: {
    events() {
      return {
        ...this.$listeners,
        change: this.updateInput,
      };
    },

    shouldBeChecked() {
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.includes(this.value);
      }

      return this.modelValue === this.trueValue;
    },

    classes() {
      return {
        [this.$style.checkbox]: true,
        [this.$style[this.variant]]: true,
        [this.$style[this.size]]: true,
        [this.$style.checked]: this.shouldBeChecked,
      };
    },
  },

  beforeCreate() {
    this.uuid = getUID();
  },

  methods: {
    updateInput(event) {
      const isChecked = event.target.checked;

      if (Array.isArray(this.modelValue)) {
        const newValue = [...this.modelValue];

        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }

        this.$emit('change', newValue);
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
};
</script>

<style lang="scss" module>
@import './Checkbox.module';
</style>
