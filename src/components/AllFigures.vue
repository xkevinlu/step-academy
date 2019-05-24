<template>
  <div class="container">

      <v-list>
        <p class="subhead">Syllabus</p>
        <v-list-group
          v-for="item in figureList"
          :key="item.id"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.level }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="subItem in item.figures"
            :key="subItem.title"
            @click="$emit('change-dance')"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
  </div>

</template>

<script>
export default {
  name: 'AllFigures',
  props: {
    figureList: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  margin-top:60px;
  width:100%;
  border:1px solid red;
}


</style>
