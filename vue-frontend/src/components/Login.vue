<template>
    <v-container fill-height class="ma-0 pa-0">
        <v-layout class="ma-0 pa-0" row wrap>
            <v-flex md10 class="ma-0 pa-0">
                <div class="h-100" style='background-image: url("/static/images/bg.jpg");'></div>
            </v-flex>
            <v-flex md2 class="h-100">
                <v-container fill-height>
                    <v-layout row wrap align-center>
                        <v-flex class="text-xs-center">
                            <v-card>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0">Login</h3>                        
                                    </div>
                                    <v-container grid-list-md>
                                        <v-layout wrap>
                                            <v-flex xs12 sm12 md12>
                                                <v-text-field label="Username" required></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm12 md12>
                                                <v-text-field label="Password" type="password" required></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn round color="primary" to="/">Login</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>                
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: "Login",
  data () {
      return {
      }
    }
}
</script>

<style>
.h-100  { height: 100%; }
</style>