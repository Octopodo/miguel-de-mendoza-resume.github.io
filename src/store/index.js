import Vue from 'vue'
import Vuex from 'vuex'
import PersonalInfo from '@/store/personal-info-module'
import Skills from '@/store/skills-module'
import Experience from '@/store/experience-module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    personalInfo: PersonalInfo,
    skills: Skills,
    experience: Experience
  }
})
