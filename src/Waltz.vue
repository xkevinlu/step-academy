<template>
  <div class="container fluid pa-0 ma-0">

    <Player
      :instruction="currentFigure"
      :count="currentCount"
      :figure="waltz.newcomer.figures.RFChangeStep"
    />
    <!-- <Controls :count="currentCount" :instruction="currentInstruction"/> -->
    <NextPrevFigures
      :precedingFigures="waltz.newcomer.figures"
      :followingFigures="waltz.newcomer.figures"
    />
    <AllFigures
      :figureList="waltz"
      @change-dance="current++"
    />
  </div>
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
                level: 'Newcomer',
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
                level: 'Newcomer',
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
              level: 'Bronze',
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
          silver: {
            level: 'Silver',
            figures: {
              Wing: {
              title:'Wing',
              commenceFacing: 135,
              startFoot: 'RFF',
              endFoot: 'LFB',
              level: 'Silver',
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
          gold: {
            level: 'Gold',
            figures: {
              TurningLockToRight: {
              title:'Turning Lock to Right',
              commenceFacing: 135,
              startFoot: 'RFF',
              endFoot: 'LFB',
              level: 'Gold',
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
            }, // Turning lock to right
            } // Figures
          }, // Gold
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
