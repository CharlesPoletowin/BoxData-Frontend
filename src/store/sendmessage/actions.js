/*
export function someAction (context) {
}
*/

export function setPosition (context, newData) {
  context.commit('setLocationXY', newData)
}
