export default {
  state: () => ({
    menu: [],
    contacts: [],
    social: [],
    themes: [],
    courses: [],
    events: [],
    partners: [],
    team: [],
    posts: [],
  }),

  getters: {
    menuLinks: (state) => state.menu,
    contactLinks: (state) => state.contacts,
    socialLinks: (state) => state.social,
    themes: (state) => state.themes,
    courses: (state) => state.courses,
    courseBySlug: (state) => (slug) => state.courses.find((course) => course.slug === slug),
    eventsLinks: (state) => state.events,
    eventBySlug: (state) => (slug) => state.events.find((event) => event.slug === slug),
    partnersLinks: (state) => state.partners,
    team: (state) => state.team,
    teamMemberById: (state) => (id) => state.team.find((member) => member.id === id),
    posts: (state) => state.posts,
    postBySlug: (state) => (slug) => state.posts.find((post) => post.slug === slug),
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
      await dispatch('getLinkItems', 'themes');
      await dispatch('getLinkItems', 'courses');
      await dispatch('getLinkItems', 'events');
      await dispatch('getLinkItems', 'partners');
      await dispatch('getLinkItems', 'team');
      await dispatch('getLinkItems', 'posts');
    },
  },
};
