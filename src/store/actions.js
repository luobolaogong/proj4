export default {
  resetMap({ commit }, somePayload) {
    // console.log("In actions.js.resetMap(), probably because ResetButton.resetMap() called store.dispacth('resetMap'), calling commit('resetMap')");
    commit('resetMap', somePayload);
    // console.log("Leaving actions.js.resetMap(), calling commit('resetMap')");
  },
  saveMap({ commit }, somePayload) {
    console.log("In actions.js.saveMap(), probably because SaveMap.saveMap() called store.dispacth('saveMap'), calling commit('saveMap')");
    commit('saveMap', somePayload);
    console.log("Leaving actions.js.saveMap(), calling commit('saveMap')");
  }
}
