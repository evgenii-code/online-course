<template>
  <label :class="$style.variant" :for="uuid">
    <input
      :id="uuid"
      v-model="model"
      :type="inputType"
      :value="currentValue"
      v-bind="$attrs"
      :class="$style.input"
      v-on="events"
    />

    <span :class="$style.content">
      <slot name="custom" :isChecked="isChecked">
        <!-- TODO - make custom radio && checkbox check mark -->
        <span :class="$style.mark" />
      </slot>

      <span :class="$style.label">
        <slot name="label" />
      </span>
    </span>
  </label>
</template>

<script>
import getUID from '~/utils/getUID';

export default {
  name: 'AppVarianToggler',

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
  },

  computed: {
    inputType() {
      return this.multiple ? 'checkbox' : 'radio';
    },

    multiple() {
      return Array.isArray(this.modelValue);
    },

    events() {
      const listeners = { ...this.$listeners };

      delete listeners.change;

      return listeners;
    },

    model: {
      get() {
        return this.modelValue;
      },

      set(currentValue) {
        this.$emit('change', currentValue);
      },
    },

    isChecked() {
      if (this.multiple) {
        return this.modelValue.includes(this.currentValue);
      }

      return this.modelValue === this.currentValue;
    },
  },

  beforeCreate() {
    this.uuid = getUID();
  },
};
</script>

<style lang="scss" module>
@import './Variant.module';
</style>
