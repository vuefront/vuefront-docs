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

# Vuefront Documentation

Vuefront is a open-source vue powered agnistic frontend. Which means if you already have a blog or an ecommerce site, you most likely can use it streight out of the box. It is built on Vue and works great together with Nuxt or Vue Cli. It is by default an SPA (single page application) with a option to turn into a PWA (progressiv web app).

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

## Why use VueFront

Two words: Decoupling and Symplicity... well three if you count 'end'

In modern web development, monolithic applications have been divided into smaller simpler parts, where each one is often outsorced to specilized teams and services. VueFront is one of them. It allows you to decouple your monolithic web application, which could be your current CMS like wordpress or shopify and outsource the frontend. You get a new shiny SPA front, while keeping your usual backend and your business flow.

**With this in mind, VueFront is:**

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
