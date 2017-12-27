<template>
  <v-container grid-list-md text-xs-center>
    <v-toolbar color="white" flat>
      <v-toolbar-title>Add User</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn round color="grey lighten-1" to="/users">Back</v-btn>
      <v-btn round color="primary">Save</v-btn>
    </v-toolbar>

    <v-card class="mt-3">
        <v-card-text class="text-xs-left">
            <small class="red--text">*indicates required field</small>
            <v-container grid-list-md>
                <v-layout wrap>
                    <v-flex xs12 sm6 md6>
                        <v-text-field label="First name" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                        <v-text-field label="Last name" required></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                        <v-text-field label="Username" required  hint="Username should be Alpha Numeric"></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                        <v-text-field label="Password" type="password" required hint="Password should be Alpha Numeric"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md12>
                        <v-text-field label="Email" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-select
                            label="Role"
                            required
                            :items="['Administrator', 'User']"
                        ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-select
                            label="Status"
                            required
                            :items="['Active', 'Inactive']"
                        ></v-select>
                    </v-flex>                    
                </v-layout>
            </v-container>            
        </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'UsersAddEdit',
    data () {
      return {
      }
    }
  }
</script>
