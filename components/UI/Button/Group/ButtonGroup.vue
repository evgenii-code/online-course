<template>
  <div :class="$style.group">
    <v-button-group-item
      v-for="(option, index) in options"
      :key="`options-${index}`"
      v-model="model"
      v-bind="$attrs"
      :current-value="option.value"
    >
      {{ option.text }}
    </v-button-group-item>
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
    options: {
      type: Array,
      required: true,
    },

    modelValue: {
      type: [Array, String],
      required: true,
    },
  },

  computed: {
    model: {
      get() {
        return this.modelValue;
      },

      set(currentValue) {
        this.$emit('change', currentValue);
      },
    },
  },
};
</script>

<style lang="scss" module>
@import './ButtonGroup.module';
</style>
