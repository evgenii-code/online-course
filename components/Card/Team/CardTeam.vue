<template>
  <div :class="$style.card">
    <div :class="$style.wrapper">
      <img
        :class="$style.image"
        :src="getTeamMemeberImg(teamMember.img)"
        :alt="teamMember.name"
      />

      <div :class="$style.overlay">
        <ul :class="$style.items">
          <li
            v-for="(link, socialMedia, index) of teamMember.links"
            :key="`link-${index}`"
            :class="$style.item"
          >
            <a
              :class="$style.link"
              :href="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon :class="$style.icon" :name="socialMedia" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <footer :class="$style.footer">
      <h3 :class="$style.title">{{ $t(teamMember.name) }}</h3>
      <p :class="$style.position">{{ $t(teamMember.position) }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppCardTeam',

  props: {
    teamMember: {
      type: Object,
      required: true,
    },
  },

  methods: {
    getTeamMemeberImg(img) {
      return require(`~/assets/images/team/${img}`);
    },
  },
};
</script>

<style lang="scss" module>
@import './CardTeam.module';
</style>
