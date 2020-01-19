export const state = () => ({
  jwt_token: '',
  food: 'ทดสอบ state',
})
export const mutations = {
  setFood(state, food) {
    state.food = food
  },
  setJwtToken(state, token) {
    state.jwt_token = token
  }
}
