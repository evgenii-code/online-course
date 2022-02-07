export default {
  state: () => ({
    menu: [],
    contacts: [],
    social: [],
    courses: [],
    events: [],
    partners: [],
    team: [],
  }),

  getters: {
    menuLinks: (state) => state.menu,
    contactLinks: (state) => state.contacts,
    socialLinks: (state) => state.social,
    coursesLinks: (state) => state.courses,
    eventsLinks: (state) => state.events,
    partnersLinks: (state) => state.partners,
    teamLinks: (state) => state.team,
  },

  mutations: {
    setLinks(state, {
      linksType,
      links
    }) {
      state[linksType] = links;
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
      await dispatch('getLinkItems', 'courses');
      await dispatch('getLinkItems', 'events');
      await dispatch('getLinkItems', 'partners');
      await dispatch('getLinkItems', 'team');
    },
  },
};
