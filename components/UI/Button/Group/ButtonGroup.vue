<template>
  <div :class="$style.group">
    <label
      v-for="(option, index) in options"
      :key="`options-${index}`"
      :class="$style.label"
    >
      <input
        :type="inputType"
        :name="name"
        :value="option.value"
        :class="$style.radio"
        :checked="isChecked(option)"
        @change="handleChange(option)"
      />

      <v-button
        outline
        :theme="getButtonTheme(option)"
        tag="span"
        :class="$style.button"
        >{{ option.text }}</v-button
      >
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppButtonGroup',

  model: {
    prop: 'modelValue',
    event: 'change',
  },

  props: {
    name: {
      type: String,
      required: true,
    },

    options: {
      type: Array,
      required: true,
    },

    modelValue: {
      type: [Array, String],
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
  },

  methods: {
    getButtonTheme(option) {
      const isChecked = this.isChecked(option);

      return isChecked ? this.checkedTheme : this.notCheckedTheme;
    },

    emitNewValue(newValue) {
      this.$emit('change', newValue);
    },

    handleChange(option) {
      if (!this.multiple) {
        this.emitNewValue(option.value);

        return;
      }

      const indexofMatchedOption = this.indexOfValue(option);
      const newValue = [...this.modelValue];

      if (indexofMatchedOption !== -1) {
        newValue.splice(indexofMatchedOption, 1);
      } else {
        newValue.push(option);
      }

      this.emitNewValue(newValue);
    },

    indexOfValue(option) {
      return this.modelValue?.findIndex(({ value }) => value === option.value);
    },

    isChecked(option) {
      if (!this.multiple) {
        return option.value === this.modelValue;
      }

      return this.indexOfValue(option) !== -1;
    },
  },
};
</script>

<style lang="scss" module>
@import './ButtonGroup.module';
</style>
