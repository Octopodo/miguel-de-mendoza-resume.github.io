<template>
  <div>
    <v-row>
      <v-col >
        <div >
          {{skill.title}}
        </div>
        
        <v-expand-x-transition>
          <v-card
            class="px-4 pl-0"
            v-show="true"
            :style="barStyle"
            height="15"
            :color="barColor"
          >
          <div class="caption grey--text text--darken-3 ml-auto text-right">
            {{title}}
          </div>
          
          </v-card>
        </v-expand-x-transition>
       
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    props: {
      skill: {
        type: Object
      },
      language: {
        type: Boolean,
        default: false
      },
      showLevel: {
        type: Boolean,
        default: false
      },
      show: {
        type: Boolean,
        default: false
      },
    },
    computed: {
      barStyle() {
        return{
          width:`${this.skill.punt}%`
        }
      },
      barColor() {
        return this.colors[this.skill.level]
      },
      title() {
        let title = this.showLevel === true ? this.skill.level : '';
        title = this.language === true && this.skill.level === 'Expert' ? 'Native' : title;
        return title
      },
    },
    data() {
      return {
        value : 0,
        levels: {
          Beginer: 25,
          Intermediate: 50,
          Advanced: 75,
          Expert: 100
        },
        colors: {
          Beginer: 'yellow lighten-1',
          Intermediate: 'amber lighten-3',
          Advanced: 'light-blue lighten-3',
          Expert: 'light-green accent-2'
        }
      }
    },

  }
</script>

<style lang="sass" scoped>
.bar
  height: 15px
</style>