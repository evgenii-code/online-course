<template>
  <li :class="classes">
    <v-button-clear
      :id="buttonId"
      type="button"
      :class="$style.button"
      :aria-expanded="isOpen"
      :aria-controls="sectionId"
      v-on="events"
    >
      <v-icon :class="$style.icon" :name="isOpen ? 'minus' : 'plus'" />

      <span :class="$style.title">
        {{ title }}
        <slot name="title" />
      </span>
    </v-button-clear>

    <transition
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div
        v-show="isOpen"
        :id="sectionId"
        role="region"
        :aria-labelledby="buttonId"
        :class="$style.details"
      >
        <div :class="$style.content">
          {{ content }}
          <slot name="content" />
        </div>
      </div>
    </transition>
  </li>
</template>

<script>
import getUID from '~/utils/getUID';

export default {
  name: 'AppAcordionItem',

  _isAccordionItem: true,

  props: {
    title: {
      type: String,
      default: '',
    },

    content: {
      type: String,
      default: '',
    },

    open: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isOpen: false,
      uuid: getUID(),
    };
  },

  computed: {
    classes() {
      return {
        [this.$style.item]: true,
        [this.$style.active]: this.isOpen,
      };
    },

    events() {
      return {
        ...this.$listeners,
        click: this.onClick,
      };
    },

    buttonId() {
      return `button-${this.uuid}`;
    },

    sectionId() {
      return `section-${this.uuid}`;
    },
  },

  watch: {
    open: {
      immediate: true,
      handler(value) {
        this.isOpen = value;
      },
    },
  },

  methods: {
    toggle(value) {
      const newValue = typeof value === 'boolean' ? !!value : !this.isOpen;
      const change = this.isOpen !== undefined && newValue !== this.isOpen;

      this.isOpen = newValue;

      if (change) {
        this.$parent.$emit('itemChange', this);
      }
    },

    onClick(event) {
      this.toggle(event);
      this.$emit('click', event);
    },

    afterEnter(element) {
      element.style.height = `auto`;
    },

    enter(element) {
      const { width } = getComputedStyle(element);

      element.style.width = width;
      element.style.position = `absolute`;
      element.style.visibility = `hidden`;
      element.style.height = `auto`;

      const { height } = getComputedStyle(element);

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      // Force repaint to make sure the
      // animation is triggered correctly.
      // eslint-disable-next-line no-unused-expressions
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = height;
      });
    },

    leave(element) {
      const { height } = getComputedStyle(element);

      element.style.height = height;

      // Force repaint to make sure the
      // animation is triggered correctly.
      // eslint-disable-next-line no-unused-expressions
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = 0;
      });
    },
  },
};
</script>

<style lang="scss" module>
@import './Accordion.module';
</style>

<style lang="scss" scoped>
* {
  will-change: height;
  // transform: translateZ(0);
  backface-visibility: hidden;
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.2s ease-in-out;
  overflow: hidden;
}
.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
