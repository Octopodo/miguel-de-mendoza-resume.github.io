<template>
  <v-navigation-drawer 
    class="blue-grey darken-4 pl-4" 
      :width="500"
      permanent
      floating
  >
    <v-row>
      <div
        class="pa-4"
      >
        <div class="display-1 amber--text text--darken-3 kt-title">
          {{ name }}
          <v-btn icon href="https://github.com/Octopodo" target="_blank">
          <v-icon large class="amber--text text--darken-3">mdi-github</v-icon>
        </v-btn>
        </div>
        <div class="title blue--text text--lighten-2">
          {{ title }}
        </div>
      </div>

    </v-row>
    
    <v-expansion-panels :value="1" >
      <v-expansion-panel :value="true">
        <v-expansion-panel-header class="black py-3 pl-6 blue-grey darken-3">
          PERSONAL INFO
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pl-8 subtitle blue-grey darken-2">
          <div class="pt-3">
            BIRTHDAY:
          </div>
          <div class="grey--text text--lighten-2 ">
            {{ birth }}
          </div>
          <div class="pt-3">
            EMAIL:
          </div>
          <a 
            class=" .text-decoration-underline blue--text"
            :href="`mailto:${email}`"
          >
            {{ email }}
          </a>
          <div class="pt-3">
            PHONE:
          </div>
          <div class="grey--text text--lighten-2 ">
            {{ phone }}
          </div>
        </v-expansion-panel-content>
        
      </v-expansion-panel >
      <skills-list
        title="LANGUAGES"
        skills="languages"
        @change="print"
        show-level
        language
        :show="show[1]"
      />
      <skills-list
        title="PROGRAMMING SKILLS"
        skills="programming"
        @change="print"
        show-level
        :show="show[2]"
      />
      <skills-list
        title="SOFTWARE"
        skills="software"
        @change="print"
        show-level
        :show="show[3]"
      />
      <skills-list
        title="VISUAL SKILLS"
        skills="visual"
        @change="print"
        show-level
        :show="show[4]"
      />
    </v-expansion-panels>
    
  </v-navigation-drawer >
</template>

<script>
import { mapGetters } from 'vuex'
import SkillsList from '@/components/skills/SkillsList'
export default {
  components: {
    SkillsList,
  },
  computed: {
    ...mapGetters({
      name: 'personalInfo/name',
      title: 'personalInfo/title',
      birth: 'personalInfo/birth',
      email: 'personalInfo/email',
      phone: 'personalInfo/phone',
    })
  },
  data() {
    return {
      panel: [1],
      mini:true,
      show: [false, true, false, false, false]
    }
  },
  methods: {
    print() {
      this.show.forEach((element, index) => {
        let show = this.panel.indexOf(index) !== -1;
          this.show[index] = show
      })
    }
  }
}
</script>

// <style lang="sass" scoped>

// </style>