<template>
<nav>



  <v-app-bar  color="deep-purple accent-4" dark fixed>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Page title</v-toolbar-title>

    <div class="flex-grow-1"></div>

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

    <v-navigation-drawer absolute temporary :mini-variant.sync="mini" v-model="drawer">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                router :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data () {
        return {
          drawer: false,
          mini: false,
          items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/' },
          { title: 'Photos', icon: 'mdi-image', route: '/phpto' },
          { title: 'About', icon: 'mdi-help-box', route: '/about' },
        ],
        right: null,
        }
  }
};
</script>
