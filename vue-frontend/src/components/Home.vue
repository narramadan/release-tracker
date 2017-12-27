<template>
  <v-app>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
      width="200"
    >
      <v-list class="pt-0">
        <v-list-group v-for="item in items" value="item.active" v-bind:key="item.title">
          <v-list-tile router v-bind:to="item.route" slot="item">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="ma-3">
        <v-badge overlap color="red">
          <span slot="badge">3</span>
          <v-avatar class="purple">
            <v-icon dark>notifications</v-icon>
          </v-avatar>
        </v-badge>
      </v-btn>
      <v-menu top offset-y>
        <v-btn icon slot="activator">
          <v-avatar>
            <img src="https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/12715567_10153336287806969_7534192969957997083_n.jpg?oh=8dffd988ac12e8e7d0296d0c94f29036&oe=5ABAECF8">
          </v-avatar>
        </v-btn>
        <v-list>
          <v-list-tile v-for="item in profile" :key="item.title" @click="onProfileOptionsClick(item.name)">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>         
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer :fixed="true" app>
      <span>&copy; 2017 - Release Tracker</span>
    </v-footer>
  </v-app>
</template>

<script>

  import router from '@/router'

  export default {
    name: "Home",
    data () {
      return {
        clipped: true,
        drawer: true,
        items: [{
          icon: 'dashboard',
          title: 'Dashboard',
          route: '/dashboard'
        }, {
          icon: 'wc',
          title: 'Customers',
          route: '/customers'
        }, {
          icon: 'store',
          title: 'Products',
          route: '/products'
        }, {
          icon: 'supervisor_account',
          title: 'Users',
          route: '/users'
        }],
        profile: [{
          name: 'about',
          title: 'About'
        }, {
          name: 'logout',
          title: 'Logout'
        }],
        miniVariant: false,
        title: 'Release Tracker'
      }
    },
    methods: {
        onProfileOptionsClick(option) {
            switch (option) {
                case 'about':
                    alert('About clicked')
                    break
                case 'logout':
                    router.push({path: '/login'})
                    break
            }
        }
    }
  }
</script>
