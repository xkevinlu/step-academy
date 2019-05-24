<template>
  <div class="container">
    <v-list class="list">
        <p class="subhead">Precedes</p>
        <v-list-tile
          v-for="figure in precedingFigures"
          :key="figure.title"
          avatar
        >
          <v-list-tile-action>
            <v-icon v-if="figure.icon" color="brown">star</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="figure.title"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
      <v-list class="list">
             <p class="subhead">Follows</p>
          <v-list-tile
            v-for="figure in precedingFigures"
            :key="figure.title"
            avatar
          >
            <v-list-tile-action>
              <v-icon v-if="figure.icon" color="brown">star</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="figure.title"></v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>
  </div>

</template>

<script>
export default {
  name: 'NextPrevFigures',
  props: {
    precedingFigures: Array,
    followingFigures: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  display:flex;
  justify-content:center;
  margin-top:60px;
  width:100%;
  border:1px solid red;
}

.list {
  width:100%;
}

</style>
