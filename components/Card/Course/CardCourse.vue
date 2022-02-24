<template>
  <nuxt-link
    :to="localePath(course.link + '/' + course.slug)"
    :class="$style.link"
  >
    <article :class="classes">
      <picture :class="$style.picture">
        <img :class="$style.image" :src="imgSrc" :alt="badge" />
      </picture>

      <div :class="$style.content">
        <v-badge v-if="badge" :class="$style.badge" :variant="badgeVariant">
          {{ badge }}
        </v-badge>

        <h3 v-if="course.title" :class="$style.title">
          {{ $t(course.title) }}
        </h3>

        <p :class="$style.details">
          <span v-if="course.price" :class="$style.price">{{
            course.price
          }}</span>

          <span
            v-if="course.price && course.author_id"
            :class="$style.devider"
          />

          <span v-if="course.author_id" :class="$style.author">{{
            authorName(course.author_id)
          }}</span>
        </p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex';
import { getVariantByTheme } from '~/utils/variants';

export default {
  name: 'AppCardCourse',

  props: {
    vertical: {
      type: Boolean,
      default: false,
    },

    course: {
      type: Object,
      required: true,
    },

    pathToImage: {
      type: String,
      default: 'images/card/placeholder.jpg',
    },
  },

  computed: {
    ...mapGetters({
      teamMember: 'core/teamMemberById',
      themes: 'core/themes',
    }),

    classes() {
      return {
        [this.$style.card]: true,
        [this.$style.vertical]: this.vertical,
      };
    },

    imgSrc() {
      const placeholder = 'images/card/placeholder.jpg';

      return require(`~/assets/${this.course?.img || placeholder}`);
    },

    badge() {
      return this.$t(`courses.themes.${this.course.theme}`);
    },

    badgeVariant() {
      return getVariantByTheme(this.themes, this.course.theme);
    },
  },

  methods: {
    authorName(id) {
      const author = this.teamMember(id);
      const name = this.$te(author?.name) ? this.$t(author?.name) : '';

      return name;
    },
  },
};
</script>

<style lang="scss" module>
@import './CardCourse.module';
</style>
