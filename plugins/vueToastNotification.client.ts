import { createApp } from "vue";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp

    const app = createApp(nuxtApp);

    // const options: PluginOptions = {
    //     // You can set your default options here
    // };

    app.use(Toast);
})