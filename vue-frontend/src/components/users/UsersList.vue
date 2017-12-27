<template>
  <v-container grid-list-md text-xs-center>
    
    <v-toolbar color="white" flat>
      <v-toolbar-title>Users</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn round color="primary" to="/users/manage">Add User</v-btn>
    </v-toolbar>

    <v-data-table
      v-bind:headers="headers"
      v-bind:items="items"
      v-bind:pagination.sync="pagination"
      item-key="username"
      class="elevation-1 mt-3"
    >
        <template slot="headers" slot-scope="props">
            <tr>
                <th
                    class="text-xs-left"
                    v-for="header in props.headers"
                    :key="header.text"
                    :class="[
                        'column sortable', 
                        pagination.descending ? 'desc' : 'asc', 
                        header.value === pagination.sortBy ? 'active' : ''
                    ]"
                    @click="changeSort(header.value)"
                >
                    {{ header.text }}
                    <v-icon>arrow_upward</v-icon>
                </th>
            </tr>
        </template>
        <template slot="items" slot-scope="props">
            <tr :active="props.selected" @click="rowClick(props)" style="cursor: pointer">
                <td class="text-xs-left">{{ props.item.username }}</td>
                <td class="text-xs-left">{{ props.item.fname }}</td>
                <td class="text-xs-left">{{ props.item.lname }}</td>
                <td class="text-xs-left">{{ props.item.email }}</td>
                <td class="text-xs-left">{{ props.item.role }}</td>
                <td class="text-xs-left">{{ props.item.status }}</td>
            </tr>
        </template>
    </v-data-table>
  </v-container>
</template>

<script>
  import router from '@/router'

  export default {
    name: 'UsersList',
    data () {
      return {
        pagination: {
          sortBy: 'fname'
        },
        headers: [
          { text: 'Username', value: 'username' },
          { text: 'First Name', value: 'fname' },
          { text: 'Last Name', value: 'lname' },
          { text: 'Email', value: 'email' },
          { text: 'Role', value: 'role' },
          { text: 'Status', value: 'status' }
        ],
        items: [
          {
            username: 'narramadan',
            fname: 'Madan',
            lname: 'Narra',
            email: 'madan@avaya.com',
            role: 'Administrator',
            status: 'Active'
          },
          {
            username: 'tharun',
            fname: 'Tharun',
            lname: 'Vallabhaneni',
            email: 'tharun@avaya.com',
            role: 'User',
            status: 'Active'
          }
        ]
      }
    },
    methods: {
      rowClick (props) {
          props.selected = !props.selected

          router.push({path: '/users/manage'})
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      }
    }
  }
</script>
