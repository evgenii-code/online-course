<template>
  <nav :class="$style.list">
    <!-- Header -->
    <slot name="header" />

    <!-- List -->
    <ul v-if="isListVisible" :class="$style.items">
      <li
        v-for="listItem in listItems"
        :key="listItem.link"
        :class="$style.item"
      >
        <v-icon
          v-if="listItem.icon"
          :name="listItem.icon"
          :class="$style.icon"
          size="small"
        />

        <component
          :is="listItem.tag"
          :class="$style.link"
          v-bind="url(listItem)"
          >{{
            $te(listItem.title) ? $t(listItem.title) : listItem.title
          }}</component
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppFooterList',

  props: {
    listItems: {
      type: Array,
      required: true,
    },
  },

  computed: {
    isListVisible() {
      return Array.isArray(this.listItems) && this.listItems.length;
    },
  },

  methods: {
    url(listItem) {
      return listItem.tag === 'nuxt-link'
        ? { to: listItem.link }
        : { href: listItem.link };
    },
  },
};
</script>

<style lang="scss" module>
@import './FooterList.module.scss';
</style>
