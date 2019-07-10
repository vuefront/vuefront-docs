<template>
  <div class="home themes-page">
    <div class="center">
      <h1>VueFront AppStore</h1>
      <p>Connect your CMS to VueFront by installing a corresponding VueFront Extensions from the list below.</p>
    </div>
    <img src="/img/apps.png" class="apps-img" />
    <h2>AppStore is in development.</h2>
    <p>The AppStore is on its way. We are at the stage of designing the architecture of VueFront and preparing for the first Production release. Once we have a production tested version, we will start adding APPs.</p>

    <p>
      You can start today by
      <router-link to="/support.html">contacting us</router-link>to get started with developing the very first VueFront Apps. Once we are out, your apps will be the first in the list.
    </p>
  </div>
</template>

<style>
.row {
  display: flex;
  margin: 0px -15px;
}
.col {
  flex: 1;
  padding: 15px;
}
.apps-img {
  width: 75%;
  display: block;
  box-shadow: 0px 10px 40px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin: 75px auto;
}
.center {
  text-align: center;
}
hr {
  margin: 20px 0px;
}
</style>
