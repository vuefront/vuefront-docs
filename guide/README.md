---
title: Introduction
lang: en-US
sidebarDepth: 2
meta:
  - name: description
    content: VueFront Documentation. Learn how to setup, extend and develop your fully functional SPA and PWA frontend.
  - name: keywords
    content: vuefront, vuejs, nuxt, agnostic framework, documentation
---

# What is VueFront?

> “Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains.” ~ Steve Jobs

__For website owners__
VueFront lets you lets your old fashioned site into the future. You get to keep your current admin panel while upgrading to a compleatly new beautiful frontend, build on new technology: extreamly fast, no more page refresh, can work off-line, can be saved to homescreen like an mobile app and it's unbelievably extensible

__For developers__
VueFront is a free open-source vue powered agnistic frontend framework. It works straight out of the box with the most popular CMS like wordpress & woocommerce, magenta, opencart, prestashop. It is built on Vuejs and works great together with Nuxt or Vue Cli. It is by default an SPA (single page application) with a option to turn into a PWA (progressiv web app).

::: tip
Want to see how your current site looks in VueFront? Follow our simple [5 minute setup](/guide/setup.html)
:::

Currently we maintaine support for the following website/blogging and E-commerce CMS backends:

- Wordpress + WooCommerce
- OpenCart + Blog Module
- Prestashop + PrestaBLog

Soon to come...

- Magento
- Joomla
- Drupal + DrupalCommerce
- Shopify
- BigCommerce
- Volusion

## Why use VueFront?

> “Everything should be made as simple as possible, but not simpler.” ~ Albert Einstein

In the core of VueFront lies the concept __Decoupling and Symplicity__.

In modern web development, monolithic applications have been divided into smaller simpler parts, where each one is often outsorced to specilized teams and services. VueFront is one of them. It allows you to decouple your monolithic web application, which could be your current CMS like wordpress or shopify and outsource the frontend. You get a new shiny SPA front, while keeping your usual backend and your business flow.

**Here are five key features of VueFront, that will make your mouth**

- Backend Agnostic (works with many website/blogging/eccomerce CMS out of the box).
- Modern (Built with Vue on Nuxt or Vue Cli, utilizing GraphQL).
- An SPA and PWA (Single Page Application & Progressive Web App).
- Extensible (allows Themes, Apps, and easy upgrades).
- Well documented (we know how importent documentation is).

## Backend Agnostic

Infographics here...

1. Frontend Web App is built with Vue on Nuxt or Vue Cli, which implements SPA and PWA.
2. The store is managed by Vuex and an Apollo client
3. On the Backend a CMS corresponding module is installed and a GraphQL API is setup via Apollo
4. VueFront makes all requests to the Apollo API endpoint and displays the data accordingly.

### What are the trade-offs?

Since we are implementing one standard for all websites/blogs/ecommerce sites, there must be some trade-offs.

- Unique features of a CMS may not be avalible out of the box.
- Customizations done to the old frontend will have to be reimplemented on the new VueFront
- A higher learning curve for developers used to old CMSs, mostly php.

All of these limitations are being removed thanks to a growing community of VueFront creators, who develope new extensions and features, improving the VueFront ecosystem.

At the end of the day, an open-source project is all about the community around it.

::: tip
Want to do more with VueFront? Become a [VueFront Creator](/support.html).
:::
