# Digital Wedding Invitation

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```


## Project Folder Structure
```
src/ 
│ ├── assets/ 
│ ├── components/ 
│ ├── ABASection.vue 
│ ├── ApoloSection.vue 
│ ├── GallerySection.vue 
│ ├── HeroSection.vue 
│ ├── InvitationSection.vue 
│ ├── LocationSection.vue 
│ ├── MenuComponent.vue 
│ ├── SaveTheDate.vue 
│ ├── ScheduleSection.vue 
│ ├── VidSection.vue 
│ └── WishesSection.vue 
│ ├── lib/ 
│ ├── appwrite.ts 
│ └── cloudinary.ts 
│ ├── router/ 
│ ├── index.ts 
│ └── routes.ts 
│ ├── views/ 
│ ├── Home.vue 
│ └── index.ts 
│ ├── App.vue 
└── main.ts
```

### Access Route
```

http://localhost:5173/123

```
- Id: **123** will route user to the test page 

### JSON Data
tTo add more user please refer to `/src/assets/json/data.json`
```
{
  "Guest": [
      { "id": 123, "name": "test" }
  ]       
}
```


---

### **Description of the Structure**
1. **assets/**: Likely contains static files like images, styles, etc.
2. **components/**: Holds reusable Vue components, organized into sections.
3. **lib/**: Contains utility files like `appwrite.ts` and `cloudinary.ts` for external integrations.
4. **router/**: Stores Vue Router configurations.
5. **views/**: Contains page-level components, like `Home.vue`.
6. **root files**: 
   - `App.vue`: Root Vue component.
   - `main.ts`: Main entry point to bootstrap the Vue app.

Let me know if you need further explanations or modifications! 🚀
