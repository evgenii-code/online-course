<template>
  <div :class="$style.faq">
    <v-accordion :class="$style.list">
      <v-accordion-item
        v-for="(item, index) in items"
        :key="`accordion-${index}`"
        :open="index === 0"
        :class="$style.item"
      >
        <template #title>
          <h3 :class="$style.title">
            <b v-if="item.prefix" :class="$style.prefix">{{ item.prefix }}</b
            >{{ item.title }}
          </h3>
        </template>

        <template #content>
          <p :class="$style.text">{{ item.content }}</p>
        </template>
      </v-accordion-item>
    </v-accordion>
  </div>
</template>

<script>
export default {
  name: 'AppFaq',

  props: {
    scope: {
      type: String,
      default: null,
    },

    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
@import './Faq.module';
</style>
