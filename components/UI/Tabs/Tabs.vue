<template>
  <div :class="$style.tabs">
    <ul :class="$style.header">
      <li
        v-for="(tab, index) in tabs"
        :key="`tab-title-${index}`"
        :class="[$style.tab, { [$style.wide]: fullWidthTabs }]"
      >
        <v-button-clear
          :class="[$style.button, { [$style.selected]: tab.isActive }]"
          @click="selectTab(index)"
        >
          <v-icon
            v-if="tab.icon"
            :name="tab.icon"
            size="small"
            :class="$style.icon"
          />
          {{ tab.title }}
        </v-button-clear>
      </li>
    </ul>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppTabs',

  props: {
    fullWidthTabs: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      tabs: [],
    };
  },

  computed: {
    tabsItemComponents() {
      return this.$children.filter((child) => child.$options._isTabComponent);
    },
  },

  mounted() {
    this.tabs = this.tabsItemComponents;
  },

  methods: {
    selectTab(selectedTabIndex) {
      this.tabs.forEach((tab, index) => {
        tab.isActive = selectedTabIndex === index;
      });
    },
  },
};
</script>

<style lang="scss" module>
@import './Tabs.module.scss';
</style>
