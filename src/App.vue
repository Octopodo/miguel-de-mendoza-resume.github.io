<template>
  <v-app dark>
    <Content/>

  </v-app>
</template>

<script>
import Content from './components/Content';

export default {
  name: 'App',

  components: {
    Content
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
$body-font-family: 'Yanone Kaffeesatz', sans-serif !important
.v-application .v-display-1, .v-application .v-display-2
  font-family: 'Yanone Kaffeesatz', sans-serif !important
.kt-title
  font-family: 'Yanone Kaffeesatz', sans-serif !important

.no-underline
  text-decoration: none!important
</style>
