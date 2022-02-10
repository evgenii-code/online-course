<template>
  <nav :class="$style.account">
    <v-icon name="profile" :class="$style.icon" />

    <ul :class="$style.items">
      <li :class="$style.item">
        <v-button-clear :class="$style.button">
          {{ $t('header.logIn') }}
        </v-button-clear>
      </li>

      <li :class="$style.item">
        <p :class="$style.devider">/</p>
      </li>

      <li :class="$style.item">
        <v-button-clear :class="$style.button">
          {{ $t('header.register') }}
        </v-button-clear>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppHeaderAccount',
};
</script>

<style lang="scss" module>
@import './HeaderAccount.module.scss';
</style>
