export default {
  actions: {
    async nuxtServerInit({
      dispatch
    }) {
      await dispatch('core/getAllLinkItems');
    },
  },
};
