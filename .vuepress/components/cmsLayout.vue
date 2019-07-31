<template>
  <div class="home themes-page">
    <h1>VueFront CMS Connect</h1>
    <p>Connect your CMS to VueFront by installing a corresponding VueFront Extensions from the list below.</p>
    <div class="row">
      <div class="col">
        <router-link to="/cms/wordpress.html">
          <img src="/img/cms/wordpress.jpg" />
        </router-link>
        <h4>Wordpress</h4>
        <small>Shop (WooCommerce), Blog</small>
      </div>
      <div class="col">
        <router-link to="/cms/opencart.html">
          <img src="/img/cms/opencart.jpg" />
        </router-link>
        <h4>OpenCart</h4>
        <small>Shop, Blog (Blog Module)</small>
      </div>
      <div class="col">
        <router-link to="/cms/magento.html">
          <img src="/img/cms/magento.jpg" />
        </router-link>
        <h4>Magento</h4>
        <small>Shop, Blog (Megafan)</small>
      </div>
      <div class="col">
        <router-link to="/cms/prestashop.html">
          <img src="/img/cms/prestashop.jpg" />
        </router-link>
        <h4>Prestashop</h4>
        <small>Shop, Blog (PrestaBlog)</small>
      </div>
    </div>
    <h2>Coming soon...</h2>
    <p>
      These CMS connect Apps are in development. We will list them as soon as the inital release is availiable. If you have a CMS that you would like VueFront to support, please send us a request via
      <router-link to="/support.html">support</router-link>
    </p>
    <div class="row">
      <div class="col">
        <img src="/img/cms/drupal.jpg" class="inactive" />
        <h4>Drupal</h4>
        <small>Coming soon</small>
      </div>
      <div class="col">
        <img src="/img/cms/shopify.jpg" class="inactive" />
        <h4>Shopify</h4>
        <small>Coming soon</small>
      </div>
      <div class="col">
        <img src="/img/cms/bigcommerce.jpg" class="inactive" />
        <h4>Bigcommerce</h4>
        <small>Coming soon</small>
      </div>
      <div class="col">
        <img src="/img/cms/volusion.jpg" class="inactive" />
        <h4>Volusion</h4>
        <small>Coming soon</small>
      </div>
    </div>
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
.themes-page img {
  width: 100%;
  border-radius: 5px;
  transition: box-shadow 0.2s ease-in-out;
}
.themes-page img.inactive {
  filter: grayscale(1);
}
.themes-page img:hover {
  box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s ease-in-out;
}
hr {
  margin: 20px 0px;
}
</style>
