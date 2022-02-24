<template>
  <article :class="$style.curator">
    <picture :class="$style.picture">
      <img
        :class="$style.image"
        :src="getCuratorImage(curator.img)"
        :alt="curator.name"
      />
    </picture>

    <app-heading :class="$style.heading">
      <template #title>{{ curator.name }}</template>
      <template #subtitle>{{ curator.role }}</template>
    </app-heading>

    <div :class="$style.info">
      <p :class="$style.position">{{ curator.position }}</p>

      <ul v-if="stats && curator.stats" :class="$style.stats">
        <li
          v-for="(statValue, statName) in curator.stats"
          :key="`stats-${statName}`"
          :class="$style.item"
        >
          <v-icon
            :class="$style.icon"
            size="small"
            :name="getIconByStatName(statName)"
          />
          <p :class="$style.text">
            {{ getRatingText(statName, statValue) }}
          </p>
        </li>
      </ul>

      <p :class="$style.description">{{ curator.description }}</p>

      <app-partners v-if="partners" colorless :class="$style.partners" />

      <app-social-links
        v-if="curator.links"
        :class="$style.links"
        :social-links="curator.links"
      />
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import { getIconByStatName } from '~/utils/getIconByStatName';
import { getArrayFromObject, getRenamedKeys } from '~/utils/dataTypes';

export default {
  name: 'AppCurator',

  props: {
    role: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    imgName: {
      type: String,
      required: true,
    },

    authorId: {
      type: [Number, String],
      required: true,
    },

    partners: {
      type: Boolean,
      default: false,
    },

    stats: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapGetters({
      teamMemberById: 'core/teamMemberById',
    }),

    curator() {
      const curator = this.teamMemberById(this.authorId);

      if (!curator || typeof curator !== 'object' || curator === null) {
        return null;
      }

      const linksArr = getArrayFromObject(curator.links);
      const linksKeysToRename = {
        key: ['title', 'icon'],
        value: 'link',
      };
      const links = getRenamedKeys(linksArr, linksKeysToRename);

      return {
        role: this.role,
        name: this.$t(curator.name),
        position: this.$t(curator.position),
        description: this.description,
        stats: curator.stats,
        links,
        img: this.imgName,
      };
    },
  },

  methods: {
    getCuratorImage(img) {
      return require(`~/assets/images/curator/${img}`);
    },

    getRatingText(statName, statValue) {
      return this.$tc(`team.stats.${statName}`, statValue, {
        [statName]: statValue,
      });
    },

    getIconByStatName(statName) {
      return getIconByStatName(statName);
    },
  },
};
</script>

<style lang="scss" module>
@import './Curator.module';
</style>
