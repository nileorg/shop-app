<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <LoggedOut>
        <p>You are not logged in, and this is a members-only area!</p>
        <LoginButton />
      </LoggedOut>
      <LoggedIn>
        <p>You are logged in and can see the special content.</p>
        <LogoutButton />
      </LoggedIn>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {
  LoginButton,
  LogoutButton,
  LoggedIn,
  LoggedOut
} from "solid-vue-components";

export default {
  name: "app",
  components: {
    LoginButton,
    LogoutButton,
    LoggedIn,
    LoggedOut
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
