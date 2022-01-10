<template>
  <div :class="$style.test">test</div>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>

<style lang="scss" module>
@import '~/scss/utils/_spacing.scss';

.test {
  font-size: toRem(40px);
}
</style>
