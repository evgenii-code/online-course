<template>
  <label :class="$style.label" :for="uuid">
    <input
      :id="uuid"
      v-model="model"
      :type="inputType"
      :value="currentValue"
      v-bind="$attrs"
      :class="$style.input"
    />

    <v-button outline :theme="theme" tag="span" :class="$style.button"
      ><slot
    /></v-button>
  </label>
</template>

<script>
import getUID from '~/utils/getUID';

export default {
  name: 'AppButtonGroupItem',

  model: {
    prop: 'modelValue',
    event: 'change',
  },

  props: {
    modelValue: {
      type: [Array, String],
      required: true,
    },

    currentValue: {
      type: String,
      required: true,
    },

    checkedTheme: {
      type: String,
      default: 'primary',
    },

    notCheckedTheme: {
      type: String,
      default: 'clear',
    },
  },

  computed: {
    inputType() {
      return this.multiple ? 'checkbox' : 'radio';
    },

    multiple() {
      return Array.isArray(this.modelValue);
    },

    model: {
      get() {
        return this.modelValue;
      },

      set(currentValue) {
        this.$emit('change', currentValue);
      },
    },

    shouldBeChecked() {
      if (this.multiple) {
        return this.modelValue.includes(this.currentValue);
      }

      return this.modelValue === this.currentValue;
    },

    theme() {
      return this.shouldBeChecked ? this.checkedTheme : this.notCheckedTheme;
    },
  },

  beforeCreate() {
    this.uuid = getUID();
  },
};
</script>

<style lang="scss" module>
@import './ButtonGroupItem.module';
</style>
