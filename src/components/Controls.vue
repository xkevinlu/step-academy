<template>
  <div class="controls">
    <div class="instruction">
      <h1 class="title">{{instruction}}</h1>
    </div>
    <div class="seek">
      <v-btn icon>
        <i class="control fas fa-backward"></i>
      </v-btn>

      <v-btn icon>
        <i class="control fas fa-play large"></i>
      </v-btn>

      <v-btn icon>
        <i class="control fas fa-forward"></i>
      </v-btn>
      <v-slider class="slider"
        v-model="count"
      ></v-slider>
    </div>

    <div class="container">

      <v-btn icon
        @click="setManOn()"
        :class="{blue: !ladyOn}"
      >
        <i class="control fas fa-male"></i>
      </v-btn>

      <v-btn icon
        @click="setLadyOn()"
        :class="{pink: !manOn}"
      >
        <i class="control fas fa-female"></i>
      </v-btn>


      <v-btn icon
        @click="setBothOn()"
        :class="{purple : (ladyOn && manOn)}"
      >
        <v-icon>wc</v-icon>
      </v-btn>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Controls',
  props: {
    instruction: String,
    count: Number
  },
  methods : {
    setManOn() {
      this.manOn = true;
      this.ladyOn = false;
    },
    setLadyOn() {
      this.manOn = false;
      this.ladyOn = true;
    },
    setBothOn() {
      this.manOn = true;
      this.ladyOn = true;
    }
  },
  data() {
    return {
    manOn: true,
    ladyOn: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.blue {
  color:blue;
}

.pink {
  color:pink;
}

.instruction {
  padding:16px;
}

.controls {
  width:100%;
  background-color:#E5E5E5;
  border:1px solid black;
}

.container {
  display:flex;
  align-items:center;
  justify-content:center;
}
.slider {
  padding:8px 24px 0px 24px;
}

.seek {
  width:100%;
  height:80px;
  display:flex;
  justify-content:center;
  align-items:center;
}

.large {
  font-size:1.8em;
}

.control {
  font-size:1.4em;
}



</style>
