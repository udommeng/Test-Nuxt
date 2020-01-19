<template>
  <v-container>
    <h1>Login</h1>
    <v-btn  @click="login" text to="/login">Login</v-btn>

  </v-container>
</template>

<script>
export default {
  methods: {
    login() {
      this.$auth.loginWith('local', {
        data: {
          SchoolNo: 'ts5sk',
          UserName: '1900101247044',
          Password: 'b8516'
        }
      })

      this.$router.push('/')
    }
  }
}
</script>

<style></style>
