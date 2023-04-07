<template>
  <div class="join-modal">
    <p>{{ msg }}</p>
    <!-- 
    <div v-if="loggedinUser">
      <h3>
        Loggedin User:
        {{ loggedinUser.fullname }}
        <button @click="doLogout">Logout</button>
      </h3>
    </div> -->

    <div>
      <form @submit.prevent="doLogin" v-if="signin" class="login-form">
        <h2>Sign In to Winner</h2>
        <input type="text" v-model="loginCred.username" placeholder="User name" />
        <input type="password" v-model="loginCred.password" placeholder="Password" />
        <button>Login</button>
      </form>

      <!-- <p class="mute">user1 or admin, pass:123 </p> -->
      <form @submit.prevent="doSignup" v-if="join" class="login-form">
        <h2>Join Winner</h2>
        <input type="text" v-model="signupCred.fullname" placeholder="Your full name" />
        <input type="text" v-model="signupCred.username" placeholder="Username" />
        <input type="password" v-model="signupCred.password" placeholder="Password" />
        <div>
          <div
  class="fb-like"
  data-share="true"
  data-width="450"
  data-show-faces="true">
  <button>Continue</button>
        </div>
      </div>
    </form>
  </div>
  <button @click="loginWithFacebook">Login with Facebook</button>
  </div>
</template>

<script>
import ImgUploader from '../cmps/ImgUploader.vue'
export default {
  props: ['join', 'signin'],
  name: 'login-signup',
  data() {
    return {
      hideModal: false,
      msg: '',
      loginCred: { username: 'kazem', password: '111' },
      signupCred: { username: '', password: '', fullname: '', imgUrl: '' },
    }
  },
  computed: {
    users() {
      return this.$store.getters.users
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser
    },
  },
  methods: {
    async doLogin() {
      if (!this.loginCred.username) {
        this.msg = 'Please enter username/password'
        return
      }
      try {
        await this.$store.dispatch({ type: "login", userCred: this.loginCred })
        this.$router.push('/')
        this.$emit('closeModal', this.hideModal)
      } catch (err) {
        console.log(err)
        this.msg = 'Failed to login'
      }
    },
    async doSignup() {
      if (!this.signupCred.fullname || !this.signupCred.password || !this.signupCred.username) {
        this.msg = 'Please fill up the form'
        return
      }

      await this.$store.dispatch({ type: 'signup', userCred: this.signupCred })
      this.$router.push('/')
      this.$emit('closeModal', this.hideModal)
    },
    loadUsers() {
      this.$store.dispatch({ type: "loadUsers" })
    },
    async removeUser(userId) {
      try {
        await this.$store.dispatch({ type: "removeUser", userId })
        this.msg = 'User removed'
      } catch (err) {
        this.msg = 'Failed to remove user'
      }
    },
    loginWithFacebook() {
      // Initialize the Facebook SDK
      FB.init({
        appId: 'YOUR_APP_ID',
        cookie: true,
        xfbml: true,
        version: 'v11.0'
      });

      // Trigger the Facebook login flow
      FB.login(response => {
        if (response.authResponse) {
          // User is logged in
          const accessToken = response.authResponse.accessToken;

          // Use the access token to retrieve the user's information
          FB.api('/me', { fields: 'name,email' }, userData => {
            // Handle the user's data
            console.log(userData);
          });
        } else {
          // User cancelled login or did not fully authorize
          console.log('User cancelled login or did not fully authorize.');
        }
      });
    }
  },
  created() {
    this.loadUsers()
  },
  components: {
    ImgUploader
  }
}
</script>
