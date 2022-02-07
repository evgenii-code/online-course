<template>
  <div :class="$style.team">
    <app-heading :class="$style.heading">
      <template #title>{{ $t('team.title') }}</template>
      <template #subtitle>{{ $t('team.subtitle') }}</template>
    </app-heading>

    <ul :class="$style.members">
      <li
        v-for="teamMember in teamLinks"
        :key="`team-member-${teamMember.id}`"
        :class="$style.member"
      >
        <app-card-team :class="$style.card" :team-member="teamMember" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppTeam',

  computed: {
    ...mapGetters({
      teamLinks: 'core/teamLinks',
    }),
  },
};
</script>

<style lang="scss" module>
@import './Team.module';
</style>
