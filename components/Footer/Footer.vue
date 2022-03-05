<template>
  <footer :class="$style.footer">
    <!-- Top half -->
    <div :class="[$style.half, $style.top]">
      <app-container :class="$style.grid">
        <!-- Description section -->
        <div :class="$style.description">
          <v-logo theme="dark" :class="$style.logo" />

          <p :class="$style.text">{{ $t('footer.description') }}</p>

          <app-social-links
            :social-links="socialLinks"
            :class="$style.social"
          />
        </div>

        <!-- Site map -->
        <app-footer-list :class="$style.map" :list-items="menuLinks">
          <template #header>
            <h2 :class="$style.title">{{ $t('footer.map') }}</h2>
          </template>
        </app-footer-list>

        <!-- Courses -->
        <app-footer-list :class="$style.courses" :list-items="themes">
          <template #header>
            <h2 :class="$style.title">{{ $t('footer.courses') }}</h2>
          </template>
        </app-footer-list>

        <!-- Contacts -->
        <app-footer-list
          :class="$style.contacts"
          :list-items="visibleContactLinks"
        >
          <template #header>
            <h2 :class="$style.title">
              {{ $t('footer.contacts') }}
            </h2>
          </template>
        </app-footer-list>

        <!-- Subscription -->
        <div :class="$style.subscription">
          <h2 :class="$style.title">{{ $t('footer.subscription') }}</h2>

          <validation-observer tag="form" :class="$style.form" @submit.prevent>
            <validation-provider
              v-slot="{ errors, valid }"
              rules="required|email"
              slim
              :name="$t('footer.email')"
              mode="eager"
            >
              <v-input
                v-model="fields.email"
                :class="$style.email"
                :placeholder="$t('footer.email')"
                theme="dark"
                size="small"
                :error="errors[0]"
                :success="valid"
                name="email"
              >
                <template #postfix>
                  <v-button-clear :class="$style.submit" :disabled="errors[0]">
                    <v-icon
                      name="arrow-right"
                      :class="$style.icon"
                      size="small"
                    />
                  </v-button-clear>
                </template>
              </v-input>
            </validation-provider>
          </validation-observer>

          <p :class="$style.footnote">{{ $t('footer.footnote') }}</p>
        </div>
      </app-container>
    </div>

    <!-- Bottom half -->
    <div :class="[$style.half, $style.bottom]">
      <app-container :class="$style.container">
        <small :class="$style.copyright">
          &#169;

          <i18n tag="span" :class="$style.text" path="footer.copyright">
            <template #love>
              <v-icon :class="$style.heart" name="heart" size="small" />
            </template>
          </i18n>
        </small>

        <!-- Lang switcher -->
        <app-lang-switcher :class="$style.lang" />

        <v-button-clear :class="$style.scroll" @click="scrollToTop">
          {{ $t('footer.goToTop') }}
        </v-button-clear>
      </app-container>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
  name: 'AppFooter',

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data() {
    return {
      fields: {
        email: '',
      },
    };
  },

  computed: {
    ...mapGetters({
      menuLinks: 'core/menuLinks',
      themes: 'core/themes',
      contactLinks: 'core/contactLinks',
      socialLinks: 'core/socialLinks',
    }),

    visibleContactLinks() {
      return (this.contactLinks || []).filter(({ link }) => !!link);
    },
  },

  methods: {
    scrollToTop() {
      if (!window) return;

      window?.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" module>
@import './Footer.module.scss';
</style>
