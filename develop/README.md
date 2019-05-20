---
title: Technology Stack 
lang: en-US
sidebarDepth: 2
meta:
  - name: description
    content: VueFront Documentation. Learn how to setup, extend and develop your fully functional SPA and PWA frontend.
  - name: keywords
    content: vuefront, vuejs, nuxt, agnostic framework, documentation
---

# Technology Stack
Client-side
- Vue
- Vuex
- Apollo
- Nuxt (or Vue Cli)
- Rollup
- PostCSS

Server-side
- GraphQL
- NodeJs (optional for Server-Side Rendering)

## Component Structure
VueFront consists of __Components__ (Vue) and the __Store__ (Data, fetched from your current CMS). When designing a new theme or adding modifications to an existing one, you will edit only the components folder. 

The components folder includes 3 subfolders: elements, modules, templates. Every subfolder also includes three folders: blog, store, common. 

- __Blog__: includes all components connected to the blog like post and categories (blog)
- __Store__: includes all components connected to the store like product and categories (store)
- __Common__: includes all components that can be used for blog and store like reviews or breadcrumbs.

### Elements
In esence VueFront consists of Component elements, which then are used by Component templates to compose a page. In most cases you will be extending these vue files to modify the look and feel of your VueFront theme.
```
components
└── elements
    ├── blog
    │   ├── category.vue
    │   ├── post.vue
    │   ├── postThumb.vue
    │   └── postsGrid.vue
    ├── common
    │   ├── account
    │   │   ├── address.vue
    │   │   ├── createAddress.vue
    │   │   ├── edit.vue
    │   │   ├── editAddress.vue
    │   │   ├── login.vue
    │   │   ├── new.vue
    │   │   ├── password.vue
    │   │   └── register.vue
    │   ├── apollo.vue
    │   ├── breadcrumbs.vue
    │   ├── contact
    │   │   ├── contact.vue
    │   │   ├── form.vue
    │   │   ├── location.vue
    │   │   └── locationGrid.vue
    │   ├── empty.vue
    │   ├── footer.vue
    │   ├── header
    │   │   ├── center.vue
    │   │   ├── menu.vue
    │   │   ├── search.vue
    │   │   └── top.vue
    │   ├── header.vue
    │   ├── icon.vue
    │   ├── language.vue
    │   ├── loader.vue
    │   ├── notification
    │   │   ├── snackBar.vue
    │   │   └── toast.vue
    │   ├── page.vue
    │   ├── pagination.vue
    │   ├── position.vue
    │   ├── rating.vue
    │   ├── reviews.vue
    │   └── search.vue
    └── store
        ├── cart.vue
        ├── category.vue
        ├── compare.vue
        ├── currency.vue
        ├── option
        │   ├── checkbox.vue
        │   ├── date.vue
        │   ├── datetime.vue
        │   ├── file.vue
        │   ├── radio.vue
        │   ├── select.vue
        │   ├── text.vue
        │   ├── textarea.vue
        │   └── time.vue
        ├── product.vue
        ├── productAttribute.vue
        ├── productImage.vue
        ├── productOption.vue
        ├── productSort.vue
        ├── productThumb.vue
        ├── productsGrid.vue
        └── wishlist.vue
```
### Modules
Modules are very similar to elements, yet they are added to the page via the vuefront.config.js file and can by placed in `positions`. Modules are also the place for extending VueFront with new functionality like a filter. 

```
components
└── modules
    ├── blog
    │   ├── category.vue
    │   ├── latestPost.vue
    │   └── searchPost.vue
    ├── common
    │   ├── account.vue
    │   ├── accountLinks.vue
    │   ├── extraLinks.vue
    │   ├── pages.vue
    │   └── slideshow.vue
    └── store
        ├── category.vue
        ├── featuredProduct.vue
        ├── latestProduct.vue
        ├── relatedProduct.vue
        ├── searchProduct.vue
        └── specialProduct.vue
```
### Templates
Templates are used to compose the final page. You most often won't need to modify this as it is a simple combination of Component elements. You may use this folder to add new custom pages.
```
components
└── templates
    ├── blog
    │   ├── category.vue
    │   └── post.vue
    ├── common
    │   ├── account
    │   │   ├── account.vue
    │   │   ├── address.vue
    │   │   ├── createAddress.vue
    │   │   ├── edit.vue
    │   │   ├── editAddress.vue
    │   │   ├── login.vue
    │   │   ├── password.vue
    │   │   └── register.vue
    │   ├── contact.vue
    │   ├── error.vue
    │   ├── footer.vue
    │   ├── header.vue
    │   ├── home.vue
    │   ├── layout.vue
    │   ├── menu.vue
    │   ├── page.vue
    │   └── search.vue
    └── store
        ├── cart.vue
        ├── category.vue
        ├── compare.vue
        ├── product.vue
        ├── special.vue
        └── wishlist.vue
```
## How to extend a component
Now, that you know the structure of VueFront, here is how you can modify a component. 

Lets modify the header component element.

```
.
└── components
    └── elements
        └── common
            └── header.vue
```
1. In your components folder create a new file with the path of the file you plan to extend. For example: `components/common/header.vue` and add the following code:

```html
<template>
  <div>
    <vf-header-top/>
    <vf-header-center :logo="logo"/>
    <vf-template-menu/>
    <vf-notification/>
  </div>
</template>
```

2. In the same file after the closing `</template>` tag add the following script. It is required to import the mixin of the core Element. 
```html
<script>
import Header from "vuefront/lib/elements/common/header";
export default {
  mixins: [Header]
};
</script>
```

3. in your `vuefront.config.js` file add this code:

```js
components: {
    Header: '~/components/elements/common/header'
},
```