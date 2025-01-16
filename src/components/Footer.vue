<template>
    <v-footer color="blue">
        <v-container fluid class="pa-md-8 pa-4">
            <v-row>
                <v-col cols="12" lg="4" md="12" sm="12" class="">
                    <!-- <img src="../assets/BimmerTech logo.svg" alt="" class="mt-8 mt-md-0"> -->
                    <v-form method="POST" action="https://formspree.io/f/mdoqneye" v-model="valid"
                        @submit.prevent="submitForm" class="pa-5" style="border: 1px solid white; border-radius: 20px;">
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="8">
                                    <v-text-field v-model="formData.name" :counter="10" name="Name" :rules="nameRules"
                                        label="Name" hide-details required></v-text-field>
                                </v-col>
                                <v-col cols="12" md="8">
                                    <v-text-field v-model="formData.email" :rules="emailRules" name="Email"
                                        label="E-mail" hide-details required></v-text-field>
                                </v-col>
                                <v-col cols="12" md="8" class="text-center">
                                    <v-btn type="submit" :disabled="!valid" color="primary">Submit</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                    <v-dialog color="blue" v-model="thanksDialog" max-width="400">
                        <v-card>
                            <v-card-title class="headline">Thanks</v-card-title>
                            <v-card-text>
                                Form submitted successfully!.
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="primary" text @click="thanksDialog = false">OK</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog color="blue" v-model="errorDialog" max-width="400">
                        <v-card>
                            <v-card-title class="headline">Alert</v-card-title>
                            <v-card-text>
                                Form submission failed. Please try again later..
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="primary" text @click="errorDialog = false">OK</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <div :class="{ 'mt-0': !$vuetify.breakpoint.mdAndUp, 'social-links': $vuetify.breakpoint.mdAndUp }"
                        style="display: flex;gap: 10px;">
                        <svg v-if="this.$vuetify.theme.dark" width="44" height="44" viewBox="0 0 44 44" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="white" />
                            <path
                                d="M25.8086 23.375H23.1719V31.25H19.6562V23.375H16.7734V20.1406H19.6562V17.6445C19.6562 14.832 21.3438 13.25 23.9102 13.25C25.1406 13.25 26.4414 13.4961 26.4414 13.4961V16.2734H25C23.5938 16.2734 23.1719 17.1172 23.1719 18.0312V20.1406H26.3008L25.8086 23.375Z"
                                fill="white" />
                        </svg>
                        <svg v-else width="44" height="44" viewBox="0 0 44 44" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="black" />
                            <path
                                d="M25.8086 23.375H23.1719V31.25H19.6562V23.375H16.7734V20.1406H19.6562V17.6445C19.6562 14.832 21.3438 13.25 23.9102 13.25C25.1406 13.25 26.4414 13.4961 26.4414 13.4961V16.2734H25C23.5938 16.2734 23.1719 17.1172 23.1719 18.0312V20.1406H26.3008L25.8086 23.375Z"
                                fill="black" />
                        </svg>
                        <svg v-if="this.$vuetify.theme.dark" width="44" height="44" viewBox="0 0 44 44" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="white" />
                            <path
                                d="M21.875 18.207C24.0898 18.207 25.918 20.0352 25.918 22.25C25.918 24.5 24.0898 26.293 21.875 26.293C19.625 26.293 17.832 24.5 17.832 22.25C17.832 20.0352 19.625 18.207 21.875 18.207ZM21.875 24.8867C23.3164 24.8867 24.4766 23.7266 24.4766 22.25C24.4766 20.8086 23.3164 19.6484 21.875 19.6484C20.3984 19.6484 19.2383 20.8086 19.2383 22.25C19.2383 23.7266 20.4336 24.8867 21.875 24.8867ZM27.0078 18.0664C27.0078 17.5391 26.5859 17.1172 26.0586 17.1172C25.5312 17.1172 25.1094 17.5391 25.1094 18.0664C25.1094 18.5938 25.5312 19.0156 26.0586 19.0156C26.5859 19.0156 27.0078 18.5938 27.0078 18.0664ZM29.6797 19.0156C29.75 20.3164 29.75 24.2188 29.6797 25.5195C29.6094 26.7852 29.3281 27.875 28.4141 28.8242C27.5 29.7383 26.375 30.0195 25.1094 30.0898C23.8086 30.1602 19.9062 30.1602 18.6055 30.0898C17.3398 30.0195 16.25 29.7383 15.3008 28.8242C14.3867 27.875 14.1055 26.7852 14.0352 25.5195C13.9648 24.2188 13.9648 20.3164 14.0352 19.0156C14.1055 17.75 14.3867 16.625 15.3008 15.7109C16.25 14.7969 17.3398 14.5156 18.6055 14.4453C19.9062 14.375 23.8086 14.375 25.1094 14.4453C26.375 14.5156 27.5 14.7969 28.4141 15.7109C29.3281 16.625 29.6094 17.75 29.6797 19.0156ZM27.9922 26.8906C28.4141 25.8711 28.3086 23.4102 28.3086 22.25C28.3086 21.125 28.4141 18.6641 27.9922 17.6094C27.7109 16.9414 27.1836 16.3789 26.5156 16.1328C25.4609 15.7109 23 15.8164 21.875 15.8164C20.7148 15.8164 18.2539 15.7109 17.2344 16.1328C16.5312 16.4141 16.0039 16.9414 15.7227 17.6094C15.3008 18.6641 15.4062 21.125 15.4062 22.25C15.4062 23.4102 15.3008 25.8711 15.7227 26.8906C16.0039 27.5938 16.5312 28.1211 17.2344 28.4023C18.2539 28.8242 20.7148 28.7188 21.875 28.7188C23 28.7188 25.4609 28.8242 26.5156 28.4023C27.1836 28.1211 27.7461 27.5938 27.9922 26.8906Z"
                                fill="white" />
                        </svg>
                        <svg v-else width="44" height="44" viewBox="0 0 44 44" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="black" />
                            <path
                                d="M21.875 18.207C24.0898 18.207 25.918 20.0352 25.918 22.25C25.918 24.5 24.0898 26.293 21.875 26.293C19.625 26.293 17.832 24.5 17.832 22.25C17.832 20.0352 19.625 18.207 21.875 18.207ZM21.875 24.8867C23.3164 24.8867 24.4766 23.7266 24.4766 22.25C24.4766 20.8086 23.3164 19.6484 21.875 19.6484C20.3984 19.6484 19.2383 20.8086 19.2383 22.25C19.2383 23.7266 20.4336 24.8867 21.875 24.8867ZM27.0078 18.0664C27.0078 17.5391 26.5859 17.1172 26.0586 17.1172C25.5312 17.1172 25.1094 17.5391 25.1094 18.0664C25.1094 18.5938 25.5312 19.0156 26.0586 19.0156C26.5859 19.0156 27.0078 18.5938 27.0078 18.0664ZM29.6797 19.0156C29.75 20.3164 29.75 24.2188 29.6797 25.5195C29.6094 26.7852 29.3281 27.875 28.4141 28.8242C27.5 29.7383 26.375 30.0195 25.1094 30.0898C23.8086 30.1602 19.9062 30.1602 18.6055 30.0898C17.3398 30.0195 16.25 29.7383 15.3008 28.8242C14.3867 27.875 14.1055 26.7852 14.0352 25.5195C13.9648 24.2188 13.9648 20.3164 14.0352 19.0156C14.1055 17.75 14.3867 16.625 15.3008 15.7109C16.25 14.7969 17.3398 14.5156 18.6055 14.4453C19.9062 14.375 23.8086 14.375 25.1094 14.4453C26.375 14.5156 27.5 14.7969 28.4141 15.7109C29.3281 16.625 29.6094 17.75 29.6797 19.0156ZM27.9922 26.8906C28.4141 25.8711 28.3086 23.4102 28.3086 22.25C28.3086 21.125 28.4141 18.6641 27.9922 17.6094C27.7109 16.9414 27.1836 16.3789 26.5156 16.1328C25.4609 15.7109 23 15.8164 21.875 15.8164C20.7148 15.8164 18.2539 15.7109 17.2344 16.1328C16.5312 16.4141 16.0039 16.9414 15.7227 17.6094C15.3008 18.6641 15.4062 21.125 15.4062 22.25C15.4062 23.4102 15.3008 25.8711 15.7227 26.8906C16.0039 27.5938 16.5312 28.1211 17.2344 28.4023C18.2539 28.8242 20.7148 28.7188 21.875 28.7188C23 28.7188 25.4609 28.8242 26.5156 28.4023C27.1836 28.1211 27.7461 27.5938 27.9922 26.8906Z"
                                fill="black" />
                        </svg>
                        <svg v-if="this.$vuetify.theme.dark" width="44" height="44" viewBox="0 0 44 44" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="white" />
                            <path
                                d="M17.5156 29H14.2461V18.4883H17.5156V29ZM15.8633 17.082C14.8438 17.082 14 16.2031 14 15.1484C14 13.707 15.5469 12.793 16.8125 13.5312C17.4102 13.8477 17.7617 14.4805 17.7617 15.1484C17.7617 16.2031 16.918 17.082 15.8633 17.082ZM29.7148 29H26.4805V23.9023C26.4805 22.6719 26.4453 21.125 24.7578 21.125C23.0703 21.125 22.8242 22.4258 22.8242 23.7969V29H19.5547V18.4883H22.6836V19.9297H22.7188C23.1758 19.1211 24.2305 18.2422 25.8125 18.2422C29.1172 18.2422 29.75 20.4219 29.75 23.2344V29H29.7148Z"
                                fill="white" />
                        </svg>
                        <svg v-else width="44" height="44" viewBox="0 0 44 44" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="black" />
                            <path
                                d="M17.5156 29H14.2461V18.4883H17.5156V29ZM15.8633 17.082C14.8438 17.082 14 16.2031 14 15.1484C14 13.707 15.5469 12.793 16.8125 13.5312C17.4102 13.8477 17.7617 14.4805 17.7617 15.1484C17.7617 16.2031 16.918 17.082 15.8633 17.082ZM29.7148 29H26.4805V23.9023C26.4805 22.6719 26.4453 21.125 24.7578 21.125C23.0703 21.125 22.8242 22.4258 22.8242 23.7969V29H19.5547V18.4883H22.6836V19.9297H22.7188C23.1758 19.1211 24.2305 18.2422 25.8125 18.2422C29.1172 18.2422 29.75 20.4219 29.75 23.2344V29H29.7148Z"
                                fill="black" />
                        </svg>
                        <svg v-if="this.$vuetify.theme.dark" width="44" height="44" viewBox="0 0 44 44" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="white" />
                            <path
                                d="M30.8008 17.6445C31.2227 19.1211 31.2227 22.2852 31.2227 22.2852C31.2227 22.2852 31.2227 25.4141 30.8008 26.9258C30.5898 27.7695 29.9219 28.4023 29.1133 28.6133C27.6016 29 21.625 29 21.625 29C21.625 29 15.6133 29 14.1016 28.6133C13.293 28.4023 12.625 27.7695 12.4141 26.9258C11.9922 25.4141 11.9922 22.2852 11.9922 22.2852C11.9922 22.2852 11.9922 19.1211 12.4141 17.6445C12.625 16.8008 13.293 16.1328 14.1016 15.9219C15.6133 15.5 21.625 15.5 21.625 15.5C21.625 15.5 27.6016 15.5 29.1133 15.9219C29.9219 16.1328 30.5898 16.8008 30.8008 17.6445ZM19.6562 25.1328L24.6484 22.2852L19.6562 19.4375V25.1328Z"
                                fill="white" />
                        </svg>
                        <svg v-else width="44" height="44" viewBox="0 0 44 44" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="black" />
                            <path
                                d="M30.8008 17.6445C31.2227 19.1211 31.2227 22.2852 31.2227 22.2852C31.2227 22.2852 31.2227 25.4141 30.8008 26.9258C30.5898 27.7695 29.9219 28.4023 29.1133 28.6133C27.6016 29 21.625 29 21.625 29C21.625 29 15.6133 29 14.1016 28.6133C13.293 28.4023 12.625 27.7695 12.4141 26.9258C11.9922 25.4141 11.9922 22.2852 11.9922 22.2852C11.9922 22.2852 11.9922 19.1211 12.4141 17.6445C12.625 16.8008 13.293 16.1328 14.1016 15.9219C15.6133 15.5 21.625 15.5 21.625 15.5C21.625 15.5 27.6016 15.5 29.1133 15.9219C29.9219 16.1328 30.5898 16.8008 30.8008 17.6445ZM19.6562 25.1328L24.6484 22.2852L19.6562 19.4375V25.1328Z"
                                fill="black" />
                        </svg>

                    </div>
                    <p class="text-caption btnText--text white--text mt-4">© Muhammad Waqar 2022-2024</p>
                </v-col>
                <v-col cols="12" lg="8" md="12" sm="12">
                    <v-row>
                        <v-col cols="12" lg="4" md="3" sm="6" class="pb-0"
                            :class="{ '': !$vuetify.breakpoint.smAndDown, 'custom': $vuetify.breakpoint.smAndDown }">
                            <h4 class="white--text FF_montserrat btnText--text">Our Company</h4>
                            <v-list color="transparent" dense>
                                <v-list-item link v-for="(item, index) in company" :key="index" :to="item.link"
                                    class="white--text btnText--text  text-body-2 FF_montserrat-regular pl-0 pr-0">
                                    {{ item.title }}
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-col cols="12" lg="4" md="3" sm="6" class="pb-0" order-lg="2"
                            :class="{ '': !$vuetify.breakpoint.smAndDown, 'custom': $vuetify.breakpoint.smAndDown }">
                            <h4 class="white--text FF_montserrat btnText--text">Have Questions</h4>
                            <v-list color="transparent" dense>
                                <v-list-item two-line class="grey--text text--lighten-5 text-body-2 pl-0 pr-0">

                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <a href="tel:+923458112216" class="FF_montserrat-regular btnText--text">+92
                                                3458112216
                                            </a>
                                        </v-list-item-title>
                                        <v-list-item-subtitle class="btnText--text">
                                            (9:00am - 5:00pm PKT)
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item two-line class="btnText--text  text-body-2 pl-0">
                                    <v-list-item-icon class=" mr-4 mt-3">
                                        <a href="https://wa.me/3458112216">
                                        <img src="../assets/whatsapp.svg" alt="">
                                    </a>
                                    </v-list-item-icon>
                                    <v-list-item-content class="pt-0">
                                        <a href="https://wa.me/3458112216">
                                        <v-list-item-title>
                                            <a href="https://wa.me/3458112216"
                                                class="FF_montserrat-regular btnText--text"> Whatsapp
                                            </a>
                                        </v-list-item-title>
                                        <v-list-item-subtitle class="btnText--text">
                                            Worldwide chat with us
                                        </v-list-item-subtitle>
                                    </a>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item two-line class="btnText--text  text-body-2 pl-0">
                                    <v-list-item-content class="pt-0">
                                        <v-list-item-title>
                                            <a href="mailto:waqar.shamstanoli@gmail.com"
                                                class="FF_montserrat-regular btnText--text">
                                                waqar.shamstanoli@gmail.com
                                            </a>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-col cols="12" lg="4" md="3" sm="6" class="pb-0" order-lg="1"
                            :class="{ '': !$vuetify.breakpoint.smAndDown, 'custom': $vuetify.breakpoint.smAndDown }">
                            <h4 class="white--text FF_montserrat btnText--text">Policies</h4>
                            <v-list color="transparent" dense>
                                <v-list-item link v-for="(item, index) in policies" :key="index" :to="item.link"
                                    class="btnText--text text-body-2 FF_montserrat-regular pl-0 pr-0">
                                    {{ item.title }}
                                </v-list-item>
                            </v-list>
                        </v-col>

                    </v-row>
                    <v-row class="mt-0">
                        <v-col cols="12" lg="9" md="12" sm="12" class="pt-0">
                            <v-card width="100%" color="transparent" elevation="0" class="pr-md-16">
                                <p class="grey2--text text-caption btnText--text">
                                    Hello there! I'm Waqar, a passionate
                                    Full Stack
                                    Developer with a knack for turning ideas into immersive digital experiences. With a
                                    rich toolbox boasting Vue.js, Nuxt.js, React.js, Next.js, along with HTML, CSS,
                                    Bootstrap, and WordPress, I orchestrate web magic that captivates and engages.
                                    🚀 Whether it's crafting pixel-perfect user interfaces, architecting seamless user
                                    experiences, or breathing life into creative concepts, I thrive on the cutting edge
                                    of web development. From sleek and responsive single-page applications to dynamic,
                                    data-driven websites, I wield the power of modern frameworks and technologies to
                                    bring visions to life.</p>
                            </v-card>
                        </v-col>
                    </v-row>

                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>
<script>

export default {
    data() {
        return {
            thanksDialog: false,
            errorDialog: false,
            valid: false,
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 20) || 'Name must be less than 20 characters',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            formData: {
                name: '',
                email: '',
            },

            darkTheme: this.$vuetify.theme.dark,
            company: [
                {
                    title: "About Us",
                    // link: "/page-about-us"

                },
                {
                    title: "Contact Us",
                    // link: "/page-contact"
                },
            ],
            information: [
                {
                    title: "Help",
                    // link: "/page-help"

                },
                {
                    title: "Payment & Delivery",
                    // link: "/page-payment-and-delivery"

                },
                {
                    title: "Find your Installer",
                    // link: "/page-installers"
                },
                {
                    title: "For Dealers",
                    // link: "/page-for-dealers"
                },
            ],
            policies: [
                {
                    title: "Temrs & Conditions",
                    // link: "termsandconditions"
                },
                {
                    title: "Privacy and cookies policy",
                    // link: "cookiespolicy"
                },
            ],
            questions: [
                {
                    title: "Help",
                },
                {
                    title: "Payment & Delivery",
                },
                {
                    title: "Find your Installer",
                },
                {
                    title: "For Dealers",
                },
            ],
        }
    },
    methods: {
        reloadPage() {
            window.location.reload();
        },
        async submitForm() {
            try {
                const response = await fetch('https://formspree.io/f/mdoqneye', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.formData)
                });

                if (response.ok) {
                    // Reset form after successful submission
                    this.valid = false;
                    this.formData = {};
                    // Display success message to user
                    // You can handle this as per your UI design
                    //   alert('Form submitted successfully!');
                    this.thanksDialog = true;
                    this.emailRules = false,
                        this.nameRules = false
                } else {
                    // Handle error response from Formspree
                    const errorData = await response.json();
                    console.error('Form submission error:', errorData);
                    alert('Form submission failed. Please try again later.');
                    this.errorDialog = true;
                }
            } catch (error) {
                // Handle network errors
                console.error('Form submission error:', error);
                alert('An unexpected error occurred. Please try again later.');
            }
        },
        mounted() {
            // Use the Toasted plugin
            this.$toasted.register('success', message => message);
            this.$toasted.register('error', message => message);
        },
    },
}
</script>
<style scoped>
.v-list-item__subtitle {
    font-size: 10px !important;
    font-weight: 500;
    line-height: 1rem;
}

a {
    text-decoration: none;
    color: #FAFAFA !important;

}

.social-links {
    margin-top: 25px;
}

/* @font-face {
src: url('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf') format('truetype');
}
@font-face {
font-family: 'Montserrat-regular'; 
src: url('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf') format('truetype'); 
} */
.FF_montserrat {
    font-family: 'Montserrat' !important;
}

.FF_montserrat-regular {
    font-family: 'Montserrat-regular' !important;
}

.custom.col-12 {
    flex: 0 0 100%;
    max-width: 50%;
}
</style>