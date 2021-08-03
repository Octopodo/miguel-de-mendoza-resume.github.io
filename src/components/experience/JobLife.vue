<template>
<div>
  <Profile/>
  <div class="ml-6 mt-12 display-1 kt-title blue--text text--lighten-2">
    JOBS
  </div>
  <v-card :min-width="300" class="black">
    <Job
      class="mt-4"
      title="Lockdown Survivor"
      date="2019/Today"
    >
     During the lockdowns, I have taken the opportunity to develop my personal projects, among which 3 stand out:
    <br><br>
        &emsp;<a class="no-underline" :href="links.ktBundle" target="_blank">KT Bundle<v-icon small class="blue--text ">mdi-open-in-new</v-icon></a>: I have developed my own framework for the Photoshop, 
      after Effects and Adobe Animate APIs, to be able to develop solid tools for these programs very quickly and on 
      project demand. Technologies: Adobe Extendscript, Adobe CEP, Javascript and VueJs. 
    <br><br>
        &emsp;<a class="no-underline" :href="links.fretboard" target="_blank">Fretboard Master<v-icon small class="blue--text ">mdi-open-in-new</v-icon></a>: Taking advantage of my musical knowledge, 
      guitar learning and programming, I’m developing a web app to study the guitar fretboard. 
      Among other features, the application is able to generate more than 300 scales, generate the 
      finger positions and create random sequences with a metronome. Technologies: Javascript, VueJs. 
      <v-btn icon :href="links.fretboardRepo" target="_blank">
        <v-icon class="blue--text">mdi-github</v-icon>
      </v-btn>
    <br><br>
        &emsp;<a class="no-underline" :href="links.estepaistube" target="_blank">Estepáistube<v-icon small class="blue--text ">mdi-open-in-new</v-icon></a>: I have released a cartoon series for youtube. 
        Except for some sounds, the production is made entirely by me: concept, script, animatics, character design, voices, 
        folley, audio and tool development.
    </Job>
    <Job
      title="Motion Graphics"
      date="2016/2019"
      place="Freelance"
    >
      Full development of animation pieces with After Effects, as well as video post-production in
<a class="no-underline" :href="links.lolalamota" target="_blank">Señor Balboa Productions<v-icon small class="blue--text ">mdi-open-in-new</v-icon>
</a>, Forpro.tv and Ejecon: Chroma Technician, CC, Production Support, Camera Operator in events and sound engineer.
    </Job>
    <Job
      title="Motion Graphics Designer"
      date="2016(Sept-Oct)"
      place="Lucky Road Productions"
    >
       Lead motion graphics designer for the Disney Channel tv show <a :href="links.bocazas" target="_blank" class="no-underline">“Boca-zas”
         <v-icon small class="blue--text ">mdi-open-in-new</v-icon></a>. The most important challenge was to deal with 
         creating a huge amount of graphic material, in a very short period of time, automating the process using  Adobe Extendscript APIs for Photoshop and After Effects.
    </Job>
   
    <Job
      title="Creative Director and R&D"
      date="2014/2015"
      place="The Virality Agency"
    >
      Responsible for the visual identity of the company. My main functions were the conceptualization,
       creation and maintenance of all visual material: <a :href="links.tva" target="_blank" class="no-underline">videos
         <v-icon small class="blue--text ">mdi-open-in-new</v-icon></a>,
        ,mailing, reporting and corporate visuals. In addition, I was also in charge of the R&D department developing different Social Media and Facial Recognition algorithms , written in C++ 
    </Job>
    <Job
      title="Motion Graphics"
      date="2011/2014"
      place="Freelance"
    >
      Motion graphics design and creation: corporate, spots, video clips and infographics, for clients like Cáritas, Renta 4, Cintra and Señor Balboa Productions always complying with the delivery times
and the required level of quality in each project.

    </Job>
  </v-card>
</div>
</template>

<script>
import Job from '@/components/experience/Job'
import Profile from '@/components/experience/Profile'
export default {
  components: {
    Job,
    Profile
  },
  data() {
    return {
      links: {
        ktBundle: 'https://github.com/Octopodo/com.kt.tools.bundle',
        fretboard: 'https://octopodo.github.io/FretboardMaster.github.io/',
        fretboardRepo: 'https://github.com/Octopodo/FretboardMaster.github.io',
        estepaistube: 'https://www.youtube.com/watch?v=6AedJxMpSyo',
        lolalamota: 'https://vimeo.com/191449143',
        bocazas: 'https://www.youtube.com/watch?v=FMkgKLRiquw&ab_channel=DisneyChannelEspa%C3%B1a',
        tva:'https://vimeo.com/246088232'
      }
    }
  },
}
</script>

<style lang="sass" scoped>

</style>