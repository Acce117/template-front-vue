# Template Front Vue3
# Still in development

### This template provides:

1. A basic login for authorization based in JWT and a logout functionality.

2. A function for requests based on axios with the basic configuration ```./src/common/utils/useSendRequest.ts```.

3. A tool for storage management of token ```./src/common/utils/token-handler.ts```.

4. Class for global events handle in the project ```./src/common/utils/GlobalEventManager.ts```.

5. Abstract generic class to manage the crud requests ```./src/common/classes/Controller.ts```.

## Steps to start project
1. Create a repo based on the template. To know how to create a new repo based on a template in github go to the next link.
https://docs.github.com/es/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template

2. Install dependencies
```sh,
npm install
```
```sh,
pnpm install
```
3. Compile and Hot-Reload for Development

```sh
npm run dev
```
4. Start developing your project

## Stack
1. TypeScript - https://www.typescriptlang.org/
2. Vue3 - https://vuejs.org
3. PrimeVue - https://primevue.org/
4. vue-I18n - https://vue-i18n.intlify.dev/
5. Vue-router - https://router.vuejs.org/
6. Pinia - https://pinia.vuejs.org/
7. Axios - https://axios-http.com/
8. Yup - https://yup-docs.vercel.app/
9. Vee-validate - https://vee-validate.logaretm.com/v4/