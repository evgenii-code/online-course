<template>
  <nav :class="$style.pagination" :aria-label="title">
    <ul :class="$style.pages">
      <!-- Previous page -->
      <li
        v-if="isPreviousPageControlVisible"
        key="previous-page"
        :class="[$style.page, $style.arrow, $style.prev]"
      >
        <v-button-clear
          :aria-label="previousLabel"
          :aria-controls="ariaControls"
          :class="[$style.button, $style[size]]"
          @click="setCurrentPage(currentPage - 1)"
        >
          <v-icon :class="$style.icon" name="arrow-left" />
        </v-button-clear>
      </li>

      <!-- Pages -->
      <li
        v-for="page in pages"
        :key="`page-${page}`"
        :class="[$style.page, $style[size]]"
      >
        <v-button-clear
          :class="[
            $style.button,
            $style[size],
            $style.page,
            { [$style.active]: isChecked(page) },
          ]"
          v-bind="$attrs"
          :aria-label="pageLabel + page"
          :aria-controls="ariaControls"
          :aria-checked="isChecked(page)"
          v-on="events"
          @click="setCurrentPage(page)"
          >{{ page }}</v-button-clear
        >
      </li>

      <!-- Next page -->
      <li
        v-if="isNextPageControlVisible"
        key="next-page"
        :class="[$style.page, $style.arrow, $style.next]"
      >
        <v-button-clear
          :aria-label="nextLabel"
          :aria-controls="ariaControls"
          :class="[$style.button, $style[size]]"
          @click="setCurrentPage(currentPage + 1)"
        >
          <v-icon :class="$style.icon" name="arrow-right" />
        </v-button-clear>
      </li>
    </ul>
  </nav>
</template>

<script>
import getVisiblePages from '~/utils/getVisiblePages';

const BUTTON_SIZES = ['regular'];

export default {
  name: 'AppPagination',

  inheritAttrs: false,

  model: {
    prop: 'currentPage',
    event: 'click',
  },

  props: {
    ariaControls: {
      type: String,
      required: true,
    },

    totalItems: {
      type: Number,
      required: true,
    },

    currentPage: {
      type: Number,
      required: true,
    },

    perPage: {
      type: Number,
      required: true,
    },

    visiblePages: {
      type: Number,
      default: 5,
    },

    pageLabel: {
      type: String,
      default: 'Go to page # ',
    },

    title: {
      type: String,
      default: 'Pagnation',
    },

    previousLabel: {
      type: String,
      default: 'Go to previous page',
    },

    nextLabel: {
      type: String,
      default: 'Go to next page',
    },

    size: {
      type: String,
      default: 'regular',
      validator: (size) => BUTTON_SIZES.includes(size),
    },
  },

  computed: {
    pagesTotal() {
      return Math.ceil(this.totalItems / this.perPage);
    },

    isPreviousPageControlVisible() {
      return this.currentPage > 1;
    },

    isNextPageControlVisible() {
      return this.currentPage < this.pagesTotal;
    },

    pages() {
      const pagesTotal = this.pagesTotal;
      const currentPage = this.currentPage;
      const visiblePages = this.visiblePages;

      return getVisiblePages({ pagesTotal, currentPage, visiblePages });
    },

    events() {
      const listeners = { ...this.$listeners };

      delete listeners.click;

      return listeners;
    },
  },

  methods: {
    setCurrentPage(page) {
      this.$emit('click', page);
    },

    isChecked(page) {
      return page === this.currentPage;
    },
  },
};
</script>

<style lang="scss" module>
@import './Pagination.module';
</style>
