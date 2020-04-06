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
  effects:{
    *setNameAsync({payLoad},{put,call}){
        yield console.log('run')
        yield put({
            type:"setName",
            name:"超人"
        })
    }
}
};
