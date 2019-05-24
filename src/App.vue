<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Ajay Phatak</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile
            v-for="item in dances"
            :key="item.title"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar app dark color="primary">
          <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>

          <v-toolbar-title class="white--text">{{currentDance}}</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon @click="cameraRotation -= 45">
            <v-icon>rotate_left</v-icon>
          </v-btn>

          <v-btn icon @click="cameraRotation += 45">
            <v-icon>rotate_right</v-icon>
          </v-btn>

          <v-btn icon @click="zoom -= 0.10">
            <v-icon>zoom_out</v-icon>
          </v-btn>

          <v-btn icon @click="zoom += 0.10">
            <v-icon>zoom_in</v-icon>
          </v-btn>

          <!-- <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn> -->
        </v-toolbar>

    <v-content>
      <router-link to="/foo">Go to Foo</router-link>
<router-link to="/bar">Go to Bar</router-link>
      <router-view></router-view>
      <Player
        :rotation="cameraRotation"
        :zoom="zoom"
        :instruction="currentFigure"
        :count="currentCount"
        :figure="waltz.newcomer.figures.RFChangeStep"
      />
      <!-- <Controls :count="currentCount" :instruction="currentInstruction"/> -->
      <NextPrevFigures
        :precedingFigures="items"
        :followingFigures="items"
      />
      <AllFigures
        :figureList="waltz"
        @change-dance="current++"
      />
    </v-content>
  </v-app>
</template>

<script>
import Player from './components/Player'
// import Controls from './components/Controls'
import NextPrevFigures from './components/NextPrevFigures'
import AllFigures from './components/AllFigures'

export default {
  name: 'App',
  components: {
    Player, NextPrevFigures, AllFigures
  },
  watch: {
    zoom: function() {
      if ( this.zoom < 0.5 ) {
        this.zoom = 0.5;
      } else if (this.zoom > 1.5) {
        this.zoom = 1.5;
      }
    }
  },
  data () {
    return {
      drawer: null,
      dances: [
        {title: 'Waltz'},
        {title: 'Tango'},
        {title: 'Viennese Waltz'},
        {title: 'Foxtrot'},
        {title: 'Quickstep'},
      ],
      current:0,
      cameraRotation:0,
      zoom:1,
      items: [
        {id:1, title:'one', icon:true},
        {id:2, title:'two', icon:true},
        {id:3, title:'three', icon:true},
      ],
      waltz: {
          newcomer: {
            level: 'Newcomer',
            figures: {
              RFChangeStep: {
                title:'RF Change Step',
                commenceFacing: 135,
                startFoot: 'RFF',
                endFoot: 'LFF',
                steps: [
                  {
                    count:0,
                    instructionBoth:'Prepare to move DW',
                    instructionMan:'Begin on LF',
                    instructionLady:'Begin on RF',
                    ml:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:1,
                    },
                    mr:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:-0.8,
                    },
                    ll:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:-0.8,
                    },
                    lr:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:1,
                    },
                  },
                  {
                    count:1,
                    instructionBoth:'Moving DW',
                    instructionMan:'RF forward (HT)',
                    instructionLady:'LF back (TH)',
                    ml:{
                      changeRotation:0,
                      changeOpacity:-0.8,
                    },
                    mr:{
                      changeY:-80,
                      changeOpacity:0.8,
                      footwork:'HT',
                    },
                    ll:{
                      changeY:-80,
                      changeOpacity:0.8,
                      footwork:'TH',
                    },
                    lr:{
                      changeOpacity:-0.8,
                    },
                  },
                  {
                    count:1.5,
                    instructionBoth:'Moving DW',
                    instructionMan:'RF forward (HT)',
                    instructionLady:'LF back (TH)',
                    ml:{
                      changeX:0,
                      changeY:-80,
                      changeRotation:0,
                      changeOpacity:0.8,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                    mr:{
                      changeX:0,
                      changeY:-80,
                      changeRotation:0,
                      changeOpacity:0.8,
                      transformOrigin:'center',
                      transition:null,
                      footwork:null,
                    },
                    ll:{
                      changeX:0,
                      changeY:-80,
                      changeRotation:0,
                      changeOpacity:0.8,
                      transformOrigin:'center',
                      transition:null,
                      footwork:null,
                    },
                    lr:{
                      changeX:0,
                      changeY:-80,
                      changeRotation:0,
                      changeOpacity:0.8,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'TH',
                    },
                  },
                  {
                    count:2,
                    instructionBoth:'Moving DW',
                    instructionMan:'RF forward (HT)',
                    instructionLady:'LF back (TH)',
                    ml:{
                      changeX:-80,
                      changeY:-80,
                      changeRotation:0,
                      changeOpacity:0,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                    mr:{
                      changeX:0,
                      changeY:-80,
                      changeRotation:0,
                      changeOpacity:0,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                    ll:{
                      changeX:0,
                      changeY:-80,
                      changeRotation:0,
                      changeOpacity:0,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                    lr:{
                      changeX:-80,
                      changeY:-80,
                      changeRotation:0,
                      changeOpacity:0,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                  },
                  {
                    count:3,
                    instructionBoth:'Moving DW',
                    instructionMan:'RF forward (HT)',
                    instructionLady:'LF back (TH)',
                    ml:{
                      changeX:-80,
                      changeY:-80,
                      changeRotation:0,
                      changeOpacity:0,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                    mr:{
                      changeX:-80,
                      changeY:-80,
                      changeRotation:0,
                      changeOpacity:0,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                    ll:{
                      changeX:-80,
                      changeY:-80,
                      changeRotation:0,
                      changeOpacity:0,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                    lr:{
                      changeX:-80,
                      changeY:-80,
                      changeRotation:0,
                      changeOpacity:0,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                  },
                ],
              }, // RF Change Step
              LFChangeStep: {
                title:'LF Change Step',
                commenceFacing: 135,
                startFoot: 'LFF',
                endFoot: 'RFF',
                steps: [
                  {
                    count:0,
                    ml:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:0.8,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                    mr:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:-0.8,
                      transformOrigin:'center',
                      transition:null,
                      footwork:null,
                    },
                    ll:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:-0.8,
                      transformOrigin:'center',
                      transition:null,
                      footwork:null,
                    },
                    lr:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:0.8,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'TH',
                    },
                  },
                  {
                    count:1,
                    ml:{
                      changeX:0,
                      changeY:-20,
                      changeRotation:0,
                      changeOpacity:0.8,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                    mr:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:-0.8,
                      transformOrigin:'center',
                      transition:null,
                      footwork:null,
                    },
                    ll:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:-0.8,
                      transformOrigin:'center',
                      transition:null,
                      footwork:null,
                    },
                    lr:{
                      changeX:0,
                      changeY:-20,
                      changeRotation:0,
                      changeOpacity:0.8,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'TH',
                    },
                  },
                  {
                    count:2,
                    ml:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:0,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                    mr:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:0,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                    ll:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:0,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                    lr:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:0,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                  },
                  {
                    count:3,
                    ml:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:0,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                    mr:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:0,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                    ll:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:0,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                    lr:{
                      changeX:0,
                      changeY:0,
                      changeRotation:0,
                      changeOpacity:0,
                      transformOrigin:'center',
                      transition:'all 2s',
                      footwork:'HT',
                    },
                  },
                ],
              }, // LF Change Step
            }, // Figures
          }, // Newcomer
          bronze: {
            level: 'Bronze',
            figures: {
            closedImpetus: {
              title:'Closed Impetus',
              commenceFacing: 135,
              startFoot: 'RFF',
              endFoot: 'LFB',
              steps: [
                {
                  count:1,
                  ml:{
                    changeX:0,
                    changeY:-80,
                    changeRotation:0,
                    changeOpacity:0.8,
                    transformOrigin:'center',
                    transition:'all 2s',
                    footwork:'HT',
                  },
                  mr:{
                    changeX:0,
                    changeY:0,
                    changeRotation:0,
                    changeOpacity:-0.8,
                    transformOrigin:'center',
                    transition:null,
                    footwork:null,
                  },
                  ll:{
                    changeX:0,
                    changeY:0,
                    changeRotation:0,
                    changeOpacity:-0.8,
                    transformOrigin:'center',
                    transition:null,
                    footwork:null,
                  },
                  lr:{
                    changeX:0,
                    changeY:-20,
                    changeRotation:0,
                    changeOpacity:0.8,
                    transformOrigin:'center',
                    transition:'all 2s',
                    footwork:'TH',
                  },
                },
                {
                  count:2,
                  ml:{
                    changeX:0,
                    changeY:0,
                    changeRotation:0,
                    changeOpacity:0,
                    transformOrigin:'center',
                    transition:'all 2s',
                    footwork:'HT',
                  },
                  mr:{
                    changeX:0,
                    changeY:0,
                    changeRotation:0,
                    changeOpacity:0,
                    transformOrigin:'center',
                    transition:'all 2s',
                    footwork:'HT',
                  },
                  ll:{
                    changeX:0,
                    changeY:0,
                    changeRotation:0,
                    changeOpacity:0,
                    transformOrigin:'center',
                    transition:'all 2s',
                    footwork:'HT',
                  },
                  lr:{
                    changeX:0,
                    changeY:0,
                    changeRotation:0,
                    changeOpacity:0,
                    transformOrigin:'center',
                    transition:'all 2s',
                    footwork:'HT',
                  },
                },
                {
                  count:3,
                  ml:{
                    changeX:0,
                    changeY:0,
                    changeRotation:0,
                    changeOpacity:0,
                    transformOrigin:'center',
                    transition:'all 2s',
                    footwork:'HT',
                  },
                  mr:{
                    changeX:0,
                    changeY:0,
                    changeRotation:0,
                    changeOpacity:0,
                    transformOrigin:'center',
                    transition:'all 2s',
                    footwork:'HT',
                  },
                  ll:{
                    changeX:0,
                    changeY:0,
                    changeRotation:0,
                    changeOpacity:0,
                    transformOrigin:'center',
                    transition:'all 2s',
                    footwork:'HT',
                  },
                  lr:{
                    changeX:0,
                    changeY:0,
                    changeRotation:0,
                    changeOpacity:0,
                    transformOrigin:'center',
                    transition:'all 2s',
                    footwork:'HT',
                  },
                },
              ],
            }, // Closed Impetus
            } // Figures
          }, // Bronze
      } // Waltz

    }
  },

  computed: {
    currentFigure() {
      return this.waltz.newcomer.figures.RFChangeStep.title;
    },
    currentDance() {
      return 'Waltz';
    },
    currentCount() {
      return 3;
    },
    currentInstruction() {
      return this.waltz.newcomer.figures.RFChangeStep.steps[0].instructionBoth;
    },
  }
}
</script>
