import skillsData from '@/store/data/skills-data'

export default {
  namespaced: true,
  state: () => (skillsData),
  getters: {
    languages: state => state.languages,
    programming: state => state.programming,
    software: state => state.software,
    visual: state => state.visual
  }
}