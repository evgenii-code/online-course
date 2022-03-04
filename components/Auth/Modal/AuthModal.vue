<template>
  <v-modal
    :class="$style.modal"
    :is-open="isModalOpen"
    hide-footer
    @close="closeModal"
    @ok="closeModal"
  >
    <template #title>{{ $t(formOptions.text.title) }}</template>

    <template #content>
      <p :class="$style.subtitle">{{ $t(formOptions.text.subtitle) }}</p>

      <app-auth-form
        :key="`auth-form-${variant}`"
        :class="$style.form"
        :form-options="formOptions"
        @submit="formHandleSubmit"
      >
        <template #submit>{{ $t(formOptions.text.submit) }}</template>
      </app-auth-form>

      <div :class="$style.account">
        <p>{{ $t(formOptions.text.account) }}</p>

        <v-button-clear :class="$style.switch" @click="switchForms">{{
          $t(formOptions.text.action)
        }}</v-button-clear>
      </div>
    </template>
  </v-modal>
</template>

<script>
const rules = {
  fullName: 'required|alpha_spaces|min:2|max:256',
  email: 'required|email|max:256',
  password: 'required|min:6|max:256',
};
const FORM_OPTIONS = {
  signIn: {
    text: {
      title: 'auth.signIn.title',
      subtitle: 'auth.signIn.subtitle',
      submit: 'auth.signIn.submit',
      account: 'auth.signIn.noAccount',
      action: 'auth.signUp.title',
    },
    fields: [
      {
        name: 'email',
        type: 'email',
        rules: rules.email,
        label: 'ui.email',
        placeholder: 'ui.email',
      },
      {
        name: 'password',
        type: 'password',
        rules: rules.password,
        label: 'ui.password',
        placeholder: 'ui.password',
      },
      {
        name: 'remember',
        type: 'checkbox',
        rules: '',
        label: 'auth.signIn.remember',
      },
    ],
    values: {
      email: '',
      password: '',
      remember: true,
    },
  },

  signUp: {
    text: {
      title: 'auth.signUp.title',
      subtitle: 'auth.signUp.subtitle',
      submit: 'auth.signUp.submit',
      account: 'auth.signUp.haveAccount',
      action: 'auth.signIn.title',
    },
    fields: [
      {
        name: 'fullName',
        type: 'text',
        rules: rules.fullName,
        label: 'ui.fullName',
        placeholder: 'ui.fullName',
      },
      {
        name: 'email',
        type: 'email',
        rules: rules.email,
        label: 'ui.email',
        placeholder: 'ui.email',
      },
      {
        name: 'password',
        type: 'password',
        rules: rules.password + '|password:@confirmPassword',
        label: 'ui.password',
        placeholder: 'ui.password',
      },
      {
        name: 'confirmPassword',
        type: 'password',
        rules: rules.password,
        label: 'ui.confirmPassword',
        placeholder: 'ui.confirmPassword',
      },
      {
        name: 'remember',
        type: 'checkbox',
        rules: '',
        label: 'auth.signUp.remember',
      },
    ],
    values: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      remember: true,
    },
  },
};

export default {
  name: 'AppAuthModal',

  model: {
    prop: 'isModalOpen',
    event: 'toggleModal',
  },

  props: {
    isModalOpen: {
      type: Boolean,
      default: false,
    },

    variant: {
      type: String,
      required: true,
      validator: (variant) => !!FORM_OPTIONS[variant],
    },
  },

  computed: {
    formOptions() {
      return FORM_OPTIONS[this.variant];
    },
  },

  methods: {
    formHandleSubmit(fields) {
      // eslint-disable-next-line no-console
      console.log('fields', fields);
      this.closeModal();
    },

    closeModal() {
      this.emitEvent(false);
    },

    emitEvent(value) {
      this.$emit('toggleModal', value);
    },

    switchForms() {
      this.$emit('switchForms');
    },
  },
};
</script>

<style lang="scss" module>
@import './AuthModal.module';
</style>
