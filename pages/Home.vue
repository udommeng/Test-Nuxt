
<template>
  <div>
    การเรียกค่าจาก State = {{ifood}}

    <h1>{{ $auth.user.StdNo ? $auth.user.StdNo : "" }}</h1>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  data() {
    return {
      ifood : this.$store.state.food // เรียกค่าจาก state
    }
  },
}
</script>

<style>

</style>
