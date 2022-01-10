export default {
  state: () => ({
    menuLinks: [],
  }),

  getters: {
    menuLinks: (state) => state.menuLinks,
  },

  mutations: {
    setMenuLinks(state, payload) {
      state.menuLinks = payload;
    },
  },

  actions: {
    getMenuLinks: async ({
      commit
    }) => {
      const {
        default: menuLinks
      } = await import('~/data/menu.json');
      commit('setMenuLinks', menuLinks);
    },
  },
};
