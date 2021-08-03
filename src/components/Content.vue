<template>
  <div>
    <v-row>
      <v-col
        xs="6"
        sm="4"
        md="3"
      >
        <Skills class="ml-0"/>
      </v-col>
      <v-col
        xs="6"
        sm="8"
        md="9"
        class="black"
      >
        <JobLife/>
      </v-col>
      
      
    </v-row>
    
  </div>
</template>

<script>

import JobLife from "@/components/experience/JobLife"
import Skills from "@/components/skills/Skills"
export default {
  components: {
    JobLife,
    Skills
  }
}
</script>

<style lang="scss" scoped>

</style>