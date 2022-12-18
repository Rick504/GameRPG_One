<template>
  <div id="app">
    <input type="text" v-model="userName">
    <input type="password" v-model="userPassword">
    <button @click="login">Entrar</button>
    {{this.$store.state.users}}
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      userName: null,
      userPassword: null
    }
  },
  methods: {
    login() {
      const dataUser = {
        user_name: this.userName,
        password: this.userName
      }

      const dataJson = JSON.stringify(dataUser)
    }
  },
  mounted () {
        this.$store.dispatch('actionusersList')
    },
}
</script>
