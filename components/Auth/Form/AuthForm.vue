<template>
  <validation-observer
    v-slot="{ invalid }"
    ref="form"
    tag="form"
    :class="$style.form"
    @submit.prevent="handleFormSubmit"
  >
    <template v-for="(field, index) in formOptions.fields">
      <!-- Checkbox component -->
      <validation-provider
        v-if="field.type === 'checkbox'"
        :key="`field-${index}`"
        :rules="field.rules"
        slim
        :name="field.name"
        mode="eager"
      >
        <v-checkbox
          v-model="values[field.name]"
          :class="[$style.input, $style[field.name]]"
          :name="field.name"
        >
          {{ $t(field.label) }}
        </v-checkbox>
      </validation-provider>

      <!-- Input component -->
      <validation-provider
        v-else
        :key="`field-${index}`"
        v-slot="{ errors, valid }"
        :rules="field.rules"
        slim
        :name="field.name"
        mode="eager"
      >
        <v-input
          v-model="values[field.name]"
          :label="$t(field.label)"
          :class="[$style.input, $style[field.name]]"
          :placeholder="$t(field.placeholder)"
          :error="errors[0]"
          :success="valid"
          :name="field.name"
          :type="field.type"
          message-absolute
        />
      </validation-provider>
    </template>

    <v-button
      :class="[$style.button, $style.submit]"
      type="submit"
      :disabled="invalid"
      ><slot name="submit">{{ $t('ui.submit') }}</slot></v-button
    >
  </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
  name: 'AppAuthForm',

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  props: {
    formOptions: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      values: { ...this.formOptions.values },
    };
  },

  mounted() {
    this.focusOnFirstInput();
  },

  methods: {
    handleFormSubmit() {
      this.$emit('submit', { ...this.values });
    },

    focusOnFirstInput() {
      this.$nextTick(() =>
        this.$refs.form?.$el?.querySelector('input')?.focus()
      );
    },
  },
};
</script>

<style lang="scss" module>
@import './AuthForm.module';
</style>
