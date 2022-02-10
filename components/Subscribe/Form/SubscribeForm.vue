<template>
  <validation-observer
    v-slot="{ invalid }"
    tag="form"
    :class="$style.form"
    @submit.prevent="handleSubmit"
  >
    <div :class="$style.wrapper">
      <validation-provider
        v-slot="{ errors, valid }"
        rules="required|email"
        slim
        :name="$t('ui.email')"
        mode="eager"
      >
        <v-input
          v-model="fields.email"
          :class="$style.email"
          :placeholder="$t('subscribe.email')"
          :error="errors[0]"
          :success="valid"
        />
      </validation-provider>

      <v-button :class="$style.button" type="submit" :disabled="invalid">{{
        $t('subscribe.action')
      }}</v-button>
    </div>

    <validation-provider
      v-if="showConsent"
      :rules="{ required: { allowFalse: false } }"
      slim
      :name="$t('ui.consent')"
      mode="eager"
    >
      <v-checkbox v-model="fields.consent" :class="$style.consent" required>
        {{ $t('subscribe.consent') }}
      </v-checkbox>
    </validation-provider>
  </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
  name: 'AppSubscribeForm',

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  props: {
    showConsent: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      fields: {
        email: '',
        consent: true,
      },
    };
  },

  methods: {
    handleSubmit() {
      this.$emit('submit', this.fields.email);
    },
  },
};
</script>

<style lang="scss" module>
@import './SubscribeForm.module';
</style>
