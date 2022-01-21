<template>
  <component :is="component" v-bind="to" :class="classes">
    <picture :class="$style.picture">
      <img :class="$style.image" :src="imgSrc" :alt="badge" />
    </picture>

    <div :class="$style.content">
      <v-badge v-if="badge" :class="$style.badge" :variant="badgeVariant">
        {{ badge }}
      </v-badge>

      <h3 v-if="$slots.title" :class="$style.title">
        <slot name="title" />
      </h3>

      <p :class="$style.details">
        <span v-if="$slots.price" :class="$style.price">
          <slot name="price" />
        </span>

        <span v-if="$slots.price && $slots.author" :class="$style.devider" />

        <span v-if="$slots.author" :class="$style.author">
          <slot name="author" />
        </span>
      </p>
    </div>
  </component>
</template>

<script>
export default {
  name: 'AppCardCourse',

  props: {
    vertical: {
      type: Boolean,
      default: false,
    },

    href: {
      type: String,
      default: null,
    },

    badge: {
      type: String,
      default: 'Card badge',
      required: true,
    },

    badgeVariant: {
      type: String,
      default: 'primary',
    },

    pathToImage: {
      type: String,
      default: 'images/card/placeholder.jpg',
    },
  },

  computed: {
    classes() {
      return {
        [this.$style.card]: true,
        [this.$style.vertical]: this.vertical,
      };
    },

    component() {
      return this.href ? 'nuxt-link' : 'div';
    },

    to() {
      return this.href ? { to: this.localePath(this.href) } : null;
    },

    imgSrc() {
      return require(`~/assets/${this.pathToImage}`);
    },
  },
};
</script>

<style lang="scss" module>
@import './CardCourse.module';
</style>
