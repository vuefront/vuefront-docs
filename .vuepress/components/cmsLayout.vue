<template>
  <div class="home themes-page">
    <h1>VueFront CMS Connect</h1>
    <p>Connect your CMS to VueFront by installing a corresponding VueFront Extensions from the list below.</p>
    <div class="row">
      <div class="col">
        <router-link to="/cms/wordpress.html">
          <img src="/img/cms/wordpress.jpg">
        </router-link>
        <h4>Wordpress</h4>
        <small>Shop (WooCommerce), Blog</small>
      </div>
      <div class="col">
        <router-link to="/cms/opencart.html">
          <img src="/img/cms/opencart.jpg">
        </router-link>
        <h4>OpenCart</h4>
        <small>Shop, Blog (Blog Module)</small>
      </div>
      <div class="col">
        <router-link to="/cms/prestashop.html">
          <img src="/img/cms/prestashop.jpg">
        </router-link>
        <h4>Prestashop</h4>
        <small>Shop, Blog (PrestaBlog)</small>
      </div>

      <div class="col">
        <img src="/img/cms/magento.jpg">
        <h4>Magento</h4>
        <small>Coming soon</small>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <img src="/img/cms/drupal.jpg">
        <h4>Drupal</h4>
        <small>Coming soon</small>
      </div>
      <div class="col">
        <img src="/img/cms/shopify.jpg">
        <h4>Shopify</h4>
        <small>Coming soon</small>
      </div>
      <div class="col">
        <img src="/img/cms/bigcommerce.jpg">
        <h4>Bigcommerce</h4>
        <small>Coming soon</small>
      </div>
      <div class="col">
        <img src="/img/cms/volusion.jpg">
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
}
hr {
  margin: 20px 0px;
}
</style>
