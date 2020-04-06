export default {
  namespace: "indexTest",
  state: {
    name: "L.Rain",
  },
  reducers: {
    setName(state, payload) {
      return {
        ...state,
        name: payload.name,
      };
    },
  },
};
