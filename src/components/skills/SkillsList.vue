<template>
  <v-expansion-panel class="blue-grey darken-3">
    <v-expansion-panel-header class="mx-right  pl-6 py-3">
      {{ title}}
    </v-expansion-panel-header >
    <v-expansion-panel-content class="blue-grey darken-2">
      <Skill
        class="pl-12 pr-4"
        v-for="(skill, i) in skillsData"
        :key="i"
        :skill="skill"
        :showLevel="showLevel"
        :language="language"
        :show="show"

      />
    </v-expansion-panel-content>
    
  </v-expansion-panel>
</template>

<script>

import Skill from '@/components/skills/Skill'

export default {
  components:{
    Skill
  },
  props: {
    skills:{
      type: String
    },
    module: {
      type: String,
      default: 'skills'
    },
    title: {
      type: String
    },
    showLevel: {
      type: Boolean,
      default: false
    },
    language: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean
    },
  },
  computed: {
    skillsData() {
      return this.$store.getters[`${this.module}/${this.skills}`]
    },
  },
}

</script>

<style lang="scss" scoped>

</style>