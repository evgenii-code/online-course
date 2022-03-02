<template>
  <app-section-wrapper :background="background" :class="classes">
    <article :class="$style.content">
      <picture :class="$style.picture">
        <img :class="$style.image" :src="imgUrl" alt="Background image" />
      </picture>

      <div :class="$style.wrapper">
        <app-heading :class="$style.heading">
          <template #title><slot name="title" /></template>
          <template #subtitle><slot name="subtitle" /></template>
        </app-heading>

        <validation-observer
          v-slot="{ invalid }"
          tag="form"
          :class="$style.form"
          @submit.prevent
        >
          <validation-provider
            v-for="(field, index) in FIELDS"
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
              :class="[$style.input, $style.email]"
              :placeholder="$t(`request.${field.name}`)"
              :error="errors[0]"
              :success="valid"
              :name="field.name"
            />
          </validation-provider>

          <v-button
            :class="[$style.button, $style.submit]"
            type="submit"
            :disabled="invalid"
            ><slot name="submit">{{ $t('ui.submit') }}</slot></v-button
          >

          <p v-if="showNextStep" :class="$style.step">
            {{ $t('request.nextStep') }}
          </p>
        </validation-observer>
      </div>
    </article>
  </app-section-wrapper>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

const VARIANTS = {
  event: { background: 'none', img: 'event.svg' },
  course: { background: 'gray', img: 'course.svg' },
};
const FIELDS = [
  {
    name: 'email',
    type: 'email',
    rules: 'required|email',
  },
  {
    name: 'fullName',
    type: 'text',
    rules: 'required|alpha_spaces',
  },
  {
    name: 'phone',
    type: 'text',
    rules: 'required',
  },
];

export default {
  name: 'AppSectionRequest',

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  props: {
    variant: {
      type: String,
      default: 'event',
      validator: (variant) => !!VARIANTS[variant],
    },

    showNextStep: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      VARIANTS,
      FIELDS,

      fields: {
        fullName: '',
        email: '',
        phone: '',
      },
    };
  },

  computed: {
    variantOptions() {
      return VARIANTS[this.variant] || VARIANTS.main;
    },

    background() {
      return this.variantOptions?.background;
    },

    imgUrl() {
      return require(`~/assets/images/request/${this.variantOptions.img}`);
    },

    classes() {
      return {
        [this.$style.section]: true,
        [this.$style[this.variant]]: true,
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './SectionRequest.module';
</style>
