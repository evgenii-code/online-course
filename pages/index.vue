<template>
  <main :class="$style.main">
    <app-background :class="[$style.section, $style.usp]">
      <app-container :class="$style.container">
        <app-unique-selling-point :class="$style.content" />
      </app-container>
    </app-background>

    <section :class="[$style.section, $style.about]">
      <img
        src="~/assets/images/about/dots.svg"
        alt="Background image"
        aria-hidden="true"
        role="none"
        :class="[$style.image, $style.dots]"
      />

      <img
        src="~/assets/images/about/circles.svg"
        alt="Background image"
        aria-hidden="true"
        role="none"
        :class="[$style.image, $style.circles]"
      />

      <app-container :class="$style.container">
        <app-about :class="$style.content" />
      </app-container>
    </section>

    <section :class="[$style.section, $style.courses]">
      <app-container :class="$style.container">
        <app-courses :class="$style.content" />
      </app-container>
    </section>

    <section :class="[$style.section, $style.benefits]">
      <app-container :class="$style.container">
        <app-benefits :class="$style.content" />
      </app-container>
    </section>

    <section :class="[$style.section, $style.events]">
      <app-container :class="$style.container">
        <app-events :class="$style.content" />
      </app-container>
    </section>

    <section :class="[$style.section, $style.certificate]">
      <app-container :class="$style.container">
        <app-certificate :class="$style.content" />
      </app-container>
    </section>

    <section :class="[$style.section, $style.team]">
      <app-container :class="$style.container">
        <app-card-team
          v-for="teamMember in teamLinks"
          :key="`team-member-${teamMember.id}`"
          :class="$style.content"
          :team-member="teamMember"
        />
      </app-container>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'IndexPage',

  computed: {
    ...mapGetters({
      teamLinks: 'core/teamLinks',
    }),
  },
};
</script>

<style lang="scss" module>
@import './index.module';
</style>
