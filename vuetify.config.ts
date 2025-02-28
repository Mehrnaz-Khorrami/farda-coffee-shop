import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import { fa } from "vuetify/locale";

const lightCoffee = {
    dark: false,
    colors: {
        background: "#f5fafb",
        primary: "#00677c",
        textFieldColorBackground: "#dee3e5",
        iconColor: "#6f797a",
    }
}

const darkCoffee = {
    dark: true,
    colors: {
        background: "#0e1415",
        primary: "#86d1e9",
        textFieldColorBackground: "#303637",
        iconColor: "#899294",
    }

}

export default defineVuetifyConfiguration({
    // your Vuetify options here
    theme: {
        defaultTheme: 'lightCoffee',
        themes: {
            lightCoffee,
            darkCoffee
        }
    },
    locale: {
        locale: "fa",
        messages: { fa },
        rtl: {
            fa: true,
        }
    }
})
