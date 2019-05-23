<template>
  <div>
  <div class="player">
    <div class="perspective" :style="{ transform: `rotate(${rotation}deg) scale(${zoom})`}">
      <div class="contents">
        <div class="footarea ml" :style="mlStyle">
          <div v-show='manOn' class="foot man">ml</div>
        </div>
          <div class="footarea mr" :style="mrStyle">
        <div v-show='manOn' class="foot man">mr</div>
        </div>
          <div class="footarea ll" :style="llStyle">
        <div v-show='ladyOn' class="foot lady">ll</div>
        </div>
          <div class="footarea lr" :style="lrStyle">
        <div v-show='ladyOn' class="foot lady">lr</div>
        </div>
      </div>
    </div>
  </div>
  <div class="controls">
    <div class="instruction">
      <h1 class="title">{{instruction}}</h1>
    </div>
    <div class="seek">
      <v-btn icon @click="step--" :disabled="step < 1">
        <i class="control fas fa-backward"
        ></i>
      </v-btn>

      <v-btn icon>
        <i class="control fas fa-play large" @click="play()"></i>
      </v-btn>

      <v-btn icon @click="step++" :disabled="step >= maxStep">
        <i class="control fas fa-forward"></i>
      </v-btn>
      <v-slider class="slider"
        ticks
        :max="maxStep"
        v-model="step"
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
</div>

</template>

<script>
export default {
  name: 'Player',
  props: {
    head: String,
    subhead: String,
    rotation: Number,
    zoom: Number,
    instruction: String,
    count: Number,
    figure: Object,
  },
  methods: {
    async play() {

    },
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
  watch: {
    step: function () {
      console.log(this.step);
    }
  },
  data() {
    return {
      manOn: true,
      ladyOn: true,
      step:0,
    }
  },
  computed: {
    maxStep() {
      return this.figure.steps.length-1;
    },
    mlStyle() {
      let ml = this.figure.steps[this.step].ml;
      let x = (ml.changeX != undefined) ? ml.changeX : 0;
      let y = (ml.changeY != undefined) ? ml.changeY : 0;
      let turn = (ml.changeRotation != undefined) ? ml.changeRotation : 0;
      let opacity = (ml.opacity != undefined) ? ml.opacity : 0;
      return {transform: `translate(${x}px, ${y}px) rotate(${turn})`};
    },
    mrStyle() {
      let mr = this.figure.steps[this.step].mr;
      let x = (mr.changeX != undefined) ? mr.changeX : 0;
      let y = (mr.changeY != undefined) ? mr.changeY : 0;
      let turn = (mr.changeRotation != undefined) ? mr.changeRotation : 0;
      let opacity = (mr.opacity != undefined) ? mr.opacity : 0;
      return {transform: `translate(${x}px, ${y}px) rotate(${turn})`};
    },
    llStyle() {
      let ll = this.figure.steps[this.step].ll;
      let x = (ll.changeX != undefined) ? ll.changeX : 0;
      let y = (ll.changeY != undefined) ? ll.changeY : 0;
      let turn = (ll.changeRotation != undefined) ? ll.changeRotation : 0;
      let opacity = (ll.opacity != undefined) ? ll.opacity : 0;
      return {transform: `translate(${x}px, ${y}px) rotate(${turn})`};
    },
    lrStyle() {
      let lr = this.figure.steps[this.step].lr;
      let x = (lr.changeX != undefined) ? lr.changeX : 0;
      let y = (lr.changeY != undefined) ? lr.changeY : 0;
      let turn = (lr.changeRotation != undefined) ? lr.changeRotation : 0;
      let opacity = (lr.opacity != undefined) ? lr.opacity : 0;
      return {transform: `translate(${x}px, ${y}px) rotate(${turn})`};
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contents {
  position:relative;
  height:360px;
  width:360px;
  border:1px dotted gray;
  margin-top:24px;
  margin-left:auto;
  margin-right:auto;
}

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
.player {
  width:100%;
  height:400px;
  border:1px solid black;
  position:relative;
  /* background-color:green; */
}

.footarea {
  width:100px;
  height:100px;
  border:1px solid red;
  display:flex;
  align-items:center;
  justify-content:center;
  transition: all 1.5s;
}

.foot {
  width:15px;
  height:30px;
}

.man {
  background-color:blue;
}

.lady {
  background-color:pink;
}

.ml {
  position: absolute;
  left: 30%;
  top: 40%;
}

.mr {
  position: absolute;
  left:40%;
  top:40%;
}

.ll {
  position: absolute;
  left:45%;
  top:25%;
  transform:rotate(180deg);

}

.lr {
  position: absolute;
  left: 35%;
  top: 25%;
  transform:rotate(90deg);
}

.moveUp {
  transform: translate(0, -80px);
  top:20px;
  left:20px;
}

</style>
