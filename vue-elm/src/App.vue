<template>
  <div id="app">
    <user-home-page></user-home-page>
    <app-footer></app-footer>
  </div>
</template>

<style>
</style>
<script>
import AppFooter from './components/AppFooter'
import UserHomePage from './components/UserHomePage'
export default {
  name: 'app',
  components: {
    UserHomePage,
    AppFooter
  }
}
</script>
