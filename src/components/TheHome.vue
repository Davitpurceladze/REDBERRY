<template>
  <img src="../assets/backgroundIMG.jpg" class="backgroundLogo" />
  <img src="../assets/redberryLogo.jpg" class="redberryLogo" />
  <hr />
  <img src="../assets/digitalLogo.jpg" class="digitalLogo" />

  <div>
    <router-link to="/pagepersonal">
      <div class="text">რეზიუმეს დამატება</div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.backgroundLogo {
  width: 1920px;
  height: 1080px;

  background-image: url("../assets/backgroundIMG.jpg");
}

.text {
  font-family: "HelveticaNeue";
  font-style: normal;
  font-weight: 500;
  justify-content: center;
  margin-left: 25%;
  margin-top: 15px;
  text-decoration: none;
  display: flex;
  width: 212px;
  height: 24px;

  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
}

a {
  position: absolute;
  width: 464px;
  height: 60px;
  left: 728px;
  top: 513px;
  text-decoration: none;

  background-color: #1a1a1a;
  border-radius: 8px;
}

.digitalLogo {
  position: absolute;
  width: 299px;
  height: 299px;
  left: 1076px;
  top: 473px;
  mix-blend-mode: multiply;
}

hr {
  position: absolute;
  border: 1px solid #1a1a1a;
  width: 1780px;
  left: 70px;
  right: 70px;
  top: 89px;
}

.redberryLogo {
  position: absolute;
  width: 236px;
  height: 38px;
  top: 25px;
  left: 70px;
}
</style>
