<template>
  <app-section-wrapper :class="$style.feedback" direction="row">
    <picture :class="$style.picture">
      <img
        :class="$style.image"
        src="~/assets/images/contacts/illustration-1.svg"
        :alt="$t('contacts.feedback.title')"
      />
    </picture>

    <div :class="$style.wrapper">
      <app-heading :class="$style.heading">
        <template #title>{{ $t('contacts.feedback.title') }}</template>
        <template #subtitle>{{ $t('contacts.feedback.subtitle') }}</template>
      </app-heading>

      <validation-observer
        v-slot="{ invalid }"
        ref="form"
        tag="form"
        :class="$style.form"
        @submit.prevent="handleFormSubmit"
      >
        <template v-for="(field, index) in formOptions">
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

          <!-- Text area component -->
          <validation-provider
            v-else-if="field.type === 'textarea'"
            :key="`field-${index}`"
            v-slot="{ errors, valid }"
            :rules="field.rules"
            slim
            :name="field.name"
            mode="eager"
          >
            <v-text-area
              v-model="values[field.name]"
              :label="$t(field.label)"
              :class="[$style.input, $style[field.name]]"
              :placeholder="$t(field.placeholder)"
              :error="errors[0]"
              :success="valid"
              :name="field.name"
              :type="field.type"
              message-absolute
              rows="4"
            />
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
          >{{ $t('contacts.feedback.submit') }}</v-button
        >
      </validation-observer>
    </div>
  </app-section-wrapper>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

const FORM_OPTIONS = [
  {
    name: 'firstName',
    type: 'text',
    rules: 'required|min:2|max:256',
    label: 'contacts.feedback.firstName.label',
    placeholder: 'contacts.feedback.firstName.placeholder',
  },
  {
    name: 'lastName',
    type: 'text',
    rules: 'required|min:2|max:256',
    label: 'contacts.feedback.lastName.label',
    placeholder: 'contacts.feedback.lastName.placeholder',
  },
  {
    name: 'email',
    type: 'email',
    rules: 'required|email|min:2|max:256',
    label: 'contacts.feedback.email.label',
    placeholder: 'contacts.feedback.email.placeholder',
  },
  {
    name: 'phone',
    type: 'text',
    rules: 'min:7|max:256',
    label: 'contacts.feedback.phone.label',
    placeholder: 'contacts.feedback.phone.placeholder',
  },
  {
    name: 'message',
    type: 'textarea',
    rules: 'required|max:500',
    label: 'contacts.feedback.message.label',
    placeholder: 'contacts.feedback.message.placeholder',
  },
  {
    name: 'agreement',
    type: 'checkbox',
    rules: '',
    label: 'contacts.feedback.agreement',
  },
];

export default {
  name: 'AppSectionFeedback',

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data() {
    return {
      formOptions: FORM_OPTIONS,
      values: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agreement: true,
      },
    };
  },

  methods: {
    handleFormSubmit() {
      // eslint-disable-next-line no-console
      console.log('values', { ...this.values });
    },
  },
};
</script>

<style lang="scss" module>
@import './SectionFeedback.module';
</style>
