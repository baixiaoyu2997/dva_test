import * as apis from "../services/example";
export default {
  namespace: "indexTest",
  state: {
    name: "L.Rain",
    cnodeData: [],
  },
  reducers: {
    setName(state, payload) {
      return {
        ...state,
        name: payload.name,
      };
    },
    setCNodeData(state, payload) {
      return {
        ...state,
        cnodeData: payload.data,
      };
    },
  },
  effects: {
    *setNameAsync({ payLoad }, { put, call }) {
      yield console.log("run");
      yield put({
        type: "setName",
        name: "超人",
      });
    },
    *testCnode({ payload }, { put, call }) {
        console.log(payload)
      let res = yield call(apis.testCNode);
      if (res.data) {
        yield put({
          type: "setCNodeData",
          data: res.data.data,
        });
      }
    },
  },
};
