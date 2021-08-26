# strapi-ecommerce

### Technologies
[NextJS 11.1.0](https://nextjs.org/)

[Strapi 3.6.7](https://strapi.io/)

[Magic](https://magic.link/)

[Stripe](https://stripe.com/)


### How to create this website
Create folder strapi-ecommerce

Backend
```
$ npx create-strapi-app ecommerce-backend --quickstart
$ cd ecommerce-backend/
$ npm i strapi-plugin-magic
$ npm i stripe
$ npm run build
$ npm run develop
```

Frontend
```
$ npx create-next-app
$ cd ecommerce-frontend/
$ npm i magic-sdk
$ npm i @stripe/stripe-js
$ npm run dev

```
### Setup if cloning from [Github](https://github.com/nggth/strapi-ecommerce)
```
git clone https://github.com/nggth/strapi-ecommerce
```
Backend
```
$ cd strapi-ecommerce/ecommerce-backend
$ npm i
$ npm run build
$ npm run develop
```
Frontend
```
$ cd strapi-ecommerce/ecommerce-frontend
$ npm i
$ npm run dev
```
