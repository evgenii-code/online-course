<template>
  <div v-if="isOpen" v-trap-focus :class="$style.modal">
    <div :class="$style.wrapper">
      <div :class="$style.overlay" @click="close" />

      <div :class="$style.body">
        <v-button-clear :class="[$style.button, $style.close]" @click="close">
          <v-icon name="cross" :class="$style.cross" />
        </v-button-clear>

        <header v-if="!hideHeader" :class="[$style.section, $style.header]">
          <h2 :class="$style.title">
            <slot name="title">Title</slot>
          </h2>
        </header>

        <div v-if="$slots.content" :class="[$style.section, $style.content]">
          <slot name="content" :close="close" :confirm="confirm"></slot>
        </div>

        <footer v-if="!hideFooter" :class="[$style.section, $style.footer]">
          <slot name="footer" :close="close" :confirm="confirm">
            <div :class="$style.buttons">
              <v-button :class="[$style.button, $style.cancel]" @click="close"
                >Cancel</v-button
              >
              <v-button :class="[$style.button, $style.submit]" @click="confirm"
                >OK</v-button
              >
            </div>
          </slot>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Modal that uses scoped slots to control visibility
 * Emits 'ok' event if clicked OK button
 * Emits 'close' event if clicked Cancel or Close button
 * The 'close' and 'confirm' methods are available for use in the 'footer' slot
 */
import trapFocus from '~/directives/trap-focus';

export default {
  name: 'AppModal',

  directives: {
    trapFocus,
  },

  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },

    hideHeader: {
      type: Boolean,
      default: false,
    },

    hideFooter: {
      type: Boolean,
      default: false,
    },
  },

  EVENT_TYPE_NAME: 'keyup',

  mounted() {
    this.setListeners();
  },

  beforeDestroy() {
    this.removeListeners();
  },

  methods: {
    setListeners() {
      document.addEventListener(
        this.$options.EVENT_TYPE_NAME,
        this.handleKeyDown
      );
    },

    removeListeners() {
      document.removeEventListener(
        this.$options.EVENT_TYPE_NAME,
        this.handleKeyDown
      );
    },

    handleKeyDown(event) {
      if (this.isOpen && event.key === 'Escape') {
        this.close();
      }
    },

    confirm() {
      this.$emit('ok');
    },

    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" module>
@import './Modal.module';
</style>
