<template>
  <ul :class="$style.accordion" v-on="$listeners">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'AppAccordion',

  computed: {
    state: {
      get() {
        const items = this.$children.filter(
          (item) => item.$options._isAccordionItem
        );

        return items.map((item) => item.isOpen);
      },

      set(value) {
        const items = this.$children.filter(
          (item) => item.$options._isAccordionItem
        );

        if (items.length > 0) {
          for (const i in items) {
            items[i].isOpen = value[i] !== undefined ? !!value[i] : false;
          }
        }
      },
    },
  },

  created() {
    this.$on('itemChange', (srcComponent) => this.onChange(srcComponent));
  },

  methods: {
    onChange(srcComponent) {
      const index = this.$children.findIndex(
        (item) => item.uid === srcComponent.uid
      );

      this.$emit('change', { index, state: this.state });
    },
  },
};
</script>

<style lang="scss" module>
@import './Accordion.module';
</style>
