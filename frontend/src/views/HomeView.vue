<template>
  <div class="home">
    <input type="text" v-model="userName">
    <input type="password" v-model="userPassword">
    <button @click="login">Entrar</button>
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

    }
  },
}
</script>
