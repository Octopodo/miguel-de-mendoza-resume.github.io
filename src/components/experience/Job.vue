<template>
  <div class="ma-6">
    <v-card >
      <v-card-title>
        {{date}} - {{title}} - {{place}}
      </v-card-title>
      <v-card-text class="job-text">
        <slot></slot>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
      },
      date: {
        type: String,
      },
      place: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style lang="sass" scoped>
.job-text
  font-family: 'Roboto', sans-serif
</style>