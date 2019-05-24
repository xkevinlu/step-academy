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
            :to="item.path"
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

          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
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
        {title: 'Waltz', path:'waltz'},
        {title: 'Tango', path:'tango'},
        {title: 'Viennese Waltz', path:'viennese-waltz'},
        {title: 'Foxtrot', path:'foxtrot'},
        {title: 'Quickstep', path:'quickstep'},
      ],
      current:0,
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
