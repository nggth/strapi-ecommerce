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
$ cd ecommerce-backend
$ npm i
$ npm run build
$ npm run develop
Create products at http://localhost:1337/admin/

Create Magic Link account to get the code into here http://localhost:1337/admin/plugins/magic

Create file .env to store const STRIPE_SK

Change both const STRIPE_PK and MAGIC_PUBLIC_KEY

```
Frontend
```
$ cd ecommerce-frontend
$ npm i
$ npm run dev
```

