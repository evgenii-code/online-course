export default {
  state: () => ({
    links: {
      menu: [],
      contacts: [],
      social: []
    },
  }),

  getters: {
    menuLinks: (state) => state.links.menu,
    contactLinks: (state) => state.links.contacts,
    socialLinks: (state) => state.links.social,
  },

  mutations: {
    setLinks(state, {
      linksType,
      links
    }) {
      state.links[linksType] = links;
    },
  },

  actions: {
    getLinkItems: async ({
      commit
    }, linksType) => {
      try {

        const {
          default: links
        } = await import(`~/data/${linksType}.json`);
        commit('setLinks', {
          linksType,
          links
        });
      } catch (_) {}
    },

    getAllLinkItems: async ({
      dispatch
    }) => {
      await dispatch('getLinkItems', 'menu');
      await dispatch('getLinkItems', 'contacts');
      await dispatch('getLinkItems', 'social');
    },
  },
};
