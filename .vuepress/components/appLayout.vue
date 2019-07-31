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
      Start today with developing the very first VueFront App. Once we launch the AppStore, your app will be the first in the list. Learn more by
      <router-link to="/support.html">contacting us</router-link>.
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
  width: 75% !important;
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
