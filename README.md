# Template Front Vue3

### This template provides:

1. A basic login for authorization based in JWT and a logout functionality.

2. A function for requests based in axios with the basic configuration ```./src/common/utils/useSendRequest.ts```.

3. A tool for storage management of token ```./src/common/utils/token-handler.ts```.

4. Composable for events handlement in the project ```./src/common/utils/useEvents.ts```.

5. Abstract generic class to manage the crud requests ```./src/common/classes/Controller.ts```.

## Steps to start project
1. Fork the repository 
<br>
https://github.com/Acce117/template-front-vue.

2. Install dependencies
```sh
npm install
```

3. Compile and Hot-Reload for Development

```sh
npm run dev
```
### Now just start developing your project

## Stack
1. Vue3
2. TypeScript
3. I18n for internacionalization
3. Vue-router
4. Pinia for stores
5. Axios