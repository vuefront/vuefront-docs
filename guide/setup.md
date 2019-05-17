---
title: Quick Setup
lang: en-US
sidebarDepth: 2
meta:
  - name: description
    content: Quick Setup for VueFront. Learn how to quickly setup and lauch your VueFront App.
  - name: keywords
    content: quick setup, vuefront, vuejs, nuxt, agnostic framework, documentation
---

# Quick Setup
Try our 5 minute setup

1. Install CMS Connect App. [Download and install your CMS Connect app →](/cms/)

2. Install VueFront (you should have `Nodejs >= 8` and `yarn or npm` installed)
```bash
# Create VueFront app. replace <project-name> with vuefront
yarn create vuefront-app <project-name>
# OR npx create-vuefront-app <project-name>

yarn dev
```

## Step 1. Install CMS Connect App

For VueFront to have access to your website data, you need to install a CMS Connect App that will provide a GraphQL API endpoint. VueFront will then to fetch all the data from your website like any other webapp. CMS Connect APP also adds the required functionality such as submiting reviews, adding products to cart, checkout etc.

- Wordpress/Woocommerce
- OpenCart

[view all CMS Connect Apps →](/cms/)

The CMS Connect App will provide you with your API Url. You will need it on the next step, when installing VueFront

::: tip
Didn't find a `CMS Connect` App for your current website. No biggy. Simply [send us a request](/support.html) and we will be happy to create one for you. 
:::

## Step 2. Install VueFront

VueFront is a Single page application that needs to be hosted on a NodeJs server for Server-side rendering. It requires the follwoing:

- nodejs >= 8
- yarn (or nmp)


VueFront consists of the following modules:

1. [vuefront (Github)](https://github.com/vuefront/vuefront)
2. [vuefront-nuxt (Github)](https://github.com/vuefront/vuefront-nuxt)
3. [vuefront-cli (Github)](https://github.com/vuefront/vuefront-cli)

After you have installed the CMS extension, activated it and recieved the API Url, you can now install VueFront.

```bash
# Create VueFront app. replace <project-name> with vuefront
yarn create vuefront-app <project-name>
# OR npx create-vuefront-app <project-name>

yarn dev
```

`<project-name>` is the name of the folder in which VueFront will be installed. For simplicity replace it with `vuefront`

After you have launched the app in `dev mode`, you should see your site at [http://localhost:3000](http://localhost:3000)



### Create-vuefront-app
For a simpler installation process we have provided [create-vuefront-app](https://github.com/vuefront/create-vuefront-app), which helps you setup your vuefront with ease. 

It will ask you several questions to configure your vuefront app. 

### Recommendations
When installing VueFront, we recommend sticking to the following rules:
1. using always `yarn` as the default package manager
2. using `vue cli` as your vue framework for new users and `nuxt` for advanced users.


