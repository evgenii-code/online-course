<template>
  <article :class="$style.discount">
    <app-heading :class="$style.heading">
      <template #title><slot name="title" /></template>
    </app-heading>

    <validation-observer
      v-slot="{ invalid }"
      tag="form"
      :class="$style.form"
      @submit.prevent
    >
      <div :class="$style.inputs">
        <validation-provider
          v-for="(field, index) in fieldsOptions"
          :key="`field-${index}`"
          v-slot="{ errors, valid }"
          :rules="field.rules"
          slim
          :name="$t(`ui.${field.name}`)"
          mode="eager"
        >
          <v-input
            v-model="fields[field.name]"
            :label="$t(`ui.${field.name}`)"
            :name="field.name"
            :class="[$style.input, $style.email]"
            :placeholder="$t(`request.${field.name}`)"
            :error="errors[0]"
            :success="valid"
          />
        </validation-provider>
      </div>

      <v-button
        :class="[$style.button, $style.submit]"
        type="submit"
        :disabled="invalid"
        ><slot name="submit">{{ $t('ui.submit') }}</slot></v-button
      >
    </validation-observer>
  </article>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
  name: 'AppCourseDiscount',

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  props: {
    deadline: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      fieldsOptions: [
        {
          name: 'fullName',
          type: 'text',
          rules: 'required|alpha_spaces',
        },
        {
          name: 'email',
          type: 'email',
          rules: 'required|email',
        },
        {
          name: 'phone',
          type: 'text',
          rules: 'required',
        },
      ],
      fields: {
        fullName: '',
        email: '',
        phone: '',
      },
    };
  },
};
</script>

<style lang="scss" module>
@import './CourseDiscount.module';
</style>
