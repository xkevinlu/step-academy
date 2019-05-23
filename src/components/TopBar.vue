<template>
  <div class="bar">
    <div>
    <h1>{{ head }}</h1>
    <h4>{{ subhead }}</h4>
  </div>

  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    head: String,
    subhead: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bar {
  text-align:left;
  background-color:#FFFFFF;
  color:#000000;
  position:fixed;
  top:0px;
  width:100%;
  height:60px;
  display:flex;
  align-items:center;
  /* border-bottom: 1px solid grey; */
  box-shadow:0px 2px 2px rgba(68, 68, 68, 0.6);
}

h1, h4 {
  padding:0px;
  margin:4px 0px 4px 16px;
}
h1 {
  font-size:1.2em;
}

h4 {
  font-size:0.8em;
  opacity:0.7;
}

</style>
