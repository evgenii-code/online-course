<template>
  <div :class="$style.wrapper">
    <!-- <ul :class="$style.tabs">
      <li
        v-for="(tab, index) in tabList"
        :key="`tabTitle-${index + 1}`"
        :class="$style.tab"
      >
        <label :class="$style.label" :for="`${uuid}${index}`">
          <slot :name="`tabTitle-${index + 1}`" />
        </label>

        <input
          :id="`${uuid}${index}`"
          v-model="activeTab"
          type="radio"
          :name="`${uuid}-tab`"
          :value="index + 1"
          :class="$style.radio"
        />
      </li>
    </ul>

    <template v-for="(tab, index) in tabList">
      <div v-show="index + 1 === activeTab" :key="`tabPanel-${index + 1}`">
        <slot :name="`tabPanel-${index + 1}`" />
      </div>
    </template> -->

    <slot />
  </div>
</template>

<script>
import getUID from '~/utils/getUID';

export default {
  name: 'AppTabs',

  props: {
    tabList: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      activeTab: 1,
      tabs: [],
    };
  },

  computed: {
    tabsTitle() {
      console.log('this.$slots.default', this.$slots.default);
      return this.$slots.default.map((tab) => tab.props.title);
    },
  },

  beforeCreate() {
    this.uuid = getUID();
  },
};
</script>

<style lang="scss" module>
@import './Tabs.module.scss';
</style>
