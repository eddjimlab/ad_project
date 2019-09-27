<template>
  <!-- App.vue -->

  <v-app>
    <v-navigation-drawer app temporary
    v-model="drawer"
    >
    <v-list>
      <v-list-item
      v-for="link of links"
      :key="link.title"
        :to="link.url"
      >
        <v-list-item-icon>
          <v-icon color="accent">{{link.icon}}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="link.title"></v-list-item-title>
        </v-list-item-content>

      </v-list-item>
      <v-list-item
      v-if="isUserLoggedIn"
      @click="onLogout"
      >
        <v-list-item-icon>
          <v-icon color="accent">mdi-logout</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="'Logout'"></v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>
    </v-navigation-drawer>

    <template>
  <div>
    <v-app-bar
      color="primary"
      dark
    >
      <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="hidden-md-and-up"
      ></v-app-bar-nav-icon>

      <v-toolbar-title

      ><router-link to="/" tag="span" class="pointer">Add spproject</router-link></v-toolbar-title>

      <div class="flex-grow-1"></div>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
        text
        v-for="link in links"
        :key="link.title"
        :to="link.url"
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
          </v-btn>
        <v-btn
        text
        @click="onLogout"
        v-if="isUserLoggedIn"
        >
          <v-icon left>mdi-logout</v-icon>
          Logout
          </v-btn>
        
      </v-toolbar-items>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-content>
    <template v-if="error">
      <v-snackbar
    color="error"
    :multi-line="true"
    :timeout="5000"
    @input="closeError"
    >
    {{error}}
    <v-btn
    dark
    text
    @click="closeError"
    >
    Close
    </v-btn>
    </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed:{
    error(){
      return this.$store.getters.error
    },
    isUserLoggedIn(){
      return this.$store.getters.isUserLoggedIn
    },
    links(){
      if(this.isUserLoggedIn){
        return [
          { title: 'Orders', icon: 'mdi-cart', url: '/orders' },
          { title: 'New ad', icon: 'mdi-cart-arrow-down', url: '/new' },
          { title: 'My ads', icon: 'mdi-format-list-bulleted', url: '/list' }
        ]
      }
      return [
        { title: 'login', icon: 'mdi-lock', url: '/login' },
        { title: 'Registration', icon: 'mdi-face', url: '/registration' }
      ]
    }
  },
  methods:{
    closeError(){
      this.$store.error.dispatch('clearError')
    },
    onLogout(){
    this.$store.dispatch('logoutUser')
    this.$store.user.push('/')
    }
  },
}
</script>

<style lang="scss" scoped>
  .pointer{
    cursor: pointer;
  }
</style>
