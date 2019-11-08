/*
export function someMutation (state) {
}
*/

export function xlocate (state) {
  state.XLocation = 1
}

export function xrecover (state) {
  state.XLocation = 0
}

export function ylocate (state) {
  state.YLocation = 1
}

export function yrecover (state) {
  state.YLocation = 0
}

export function xvibrate (state) {
  state.XVibration = 1
}

export function xvibraterecover (state) {
  state.XVibration = 0
}

export function yvibrate (state) {
  state.YVibration = 1
}

export function yvibraterecover (state) {
  state.YVibration = 0
}

export function shakeIt (state) {
  state.ShakeIt = 1
}

export function shakeRecover (state) {
  state.ShakeIt = 0
}
