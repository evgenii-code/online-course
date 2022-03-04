<template>
  <nav :class="$style.account">
    <v-icon name="profile" :class="$style.icon" />

    <ul :class="$style.items">
      <li :class="$style.item">
        <v-button-clear :class="$style.button" @click="openModal('signIn')">
          {{ $t('header.logIn') }}
        </v-button-clear>
      </li>

      <li :class="$style.item">
        <p :class="$style.devider">/</p>
      </li>

      <li :class="$style.item">
        <v-button-clear :class="$style.button" @click="openModal('signUp')">
          {{ $t('header.register') }}
        </v-button-clear>
      </li>
    </ul>

    <app-auth-modal
      v-if="modalVariant"
      v-model="isModalOpen"
      :variant="modalVariant"
      @switchForms="switchForms"
    />
  </nav>
</template>

<script>
export default {
  name: 'AppHeaderAccount',

  data() {
    return {
      isModalOpen: false,
      modalVariant: null,
    };
  },

  methods: {
    openModal(modalVariant) {
      this.modalVariant = modalVariant;
      this.isModalOpen = true;
    },

    switchForms() {
      if (this.modalVariant === 'signIn') {
        this.openModal('signUp');
        return;
      }

      this.openModal('signIn');
    },
  },
};
</script>

<style lang="scss" module>
@import './HeaderAccount.module.scss';
</style>
