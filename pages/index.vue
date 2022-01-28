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
        <v-tabs full-width-tabs :class="$style.content">
          <v-tabs-item title="Experienced Tutors" icon="star" selected
            >Content 1</v-tabs-item
          >
          <v-tabs-item title="Feedback & Support" icon="like"
            >Content 2</v-tabs-item
          >
          <v-tabs-item title="24/7 Online Library" icon="layouts"
            >Content 3</v-tabs-item
          >
          <v-tabs-item title="Community" icon="chat">Content 4</v-tabs-item>
        </v-tabs>
      </app-container>
    </section>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>

<style lang="scss" module>
@import './index.module';
</style>
