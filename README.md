**Welcome to Our Digital Wedding Invitation**

A unique and personalized invitation. To view user invitation, simply add user unique guest ID as a suffix to the website URL. For example, if your guest ID is **168**, enter the following into your browser: 

```
https://sela-ouktey.netlify.app/168
```

If you visit our site without a guest ID or with an invalid one, you'll see our custom 404 page. All guest names and details are stored in a JSON data file to ensure your invitation is personalized just for you.

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

Made with ❤️ by Seavleu Heang
