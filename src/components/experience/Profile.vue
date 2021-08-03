<template>
<div>
  <v-card class="mx-6 mt-10 mb-8 black">
    <v-row>
      <v-col class="py-0" cols="3">
        <v-img src="img/profile.jpg"
          max-width="250"
          max-height="250"
          class="mt-5"
        ></v-img>
      </v-col>
      <v-col>
        <div class="title kt-title white--text">
          2011 - Degree in Fine Arts in <a class="no-underline" href="https://www.ufv.es/" target="_blank">UFV<v-icon small class="blue--text ">mdi-open-in-new</v-icon></a>
        </div>
        <div class="title kt-title">
          2019 - Certified in <a class="no-underline" href="http://institutodemezcla.com/" target="_blank">Instituto de Mezcla<v-icon small class="blue--text ">mdi-open-in-new</v-icon></a> (Audio mixing)
        </div>
        <v-content class="mt-12 mr-12 kt-description ">

          &emsp;Specialist in Motion Graphics, Front End and visual Workflows. I love to solve problems and oil development processes, to allow creators to maximize their creativity by reducing the working time.
          <br><br>
          &emsp;Creative, curious and a true geek. My passion for discovering how things work has allowed me to develop a unique profile, in which science, art and philosophy come together to allow me to develop comprehensive projects, focused on technological and audiovisual solutions.
        </v-content>
      </v-col>
    </v-row>
  </v-card>
</div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="sass" scoped>
.kt-description
  font-size: large!important
</style>