<template>
  <div>
    <h1>Register</h1>
    <input
     type="email" 
     name="email"
     v-model="email"
     placeholder="email" />
     <br>

     <input
     type="password" 
     name="password"
     v-model="password"
     placeholder="password" />
     <br>

     <button 
     @click="register">
     Register
    </button>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      username: 'Nickp445'
    }
  },
  methods: {
    async register(){
      console.log('Reg clicked!', this.email, this.password);
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password,
        username: this.username
      })
      console.log(response.data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
