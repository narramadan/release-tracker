<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6 v-for="i in 2" :key="i">
        <v-card dark color="primary">
          <v-card-text class="px-0">{{ msg }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Products',
    data () {
      return {
        msg: 'Products'
      }
    }
  }
</script>
