<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="6" offset="sm-3">
        <h1 class="text--secondary my-3">Orders</h1>
      <v-list-item-group
        multiple
        v-for="(order,i) in orders"
        :key="i"
      >

        <v-list-item>
          <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
              <v-checkbox
                color="success"
                :input-value="order.done"
                @click="markDone(order)"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{order.name}} </v-list-item-title>
              <v-list-item-subtitle>{{order.phone}} </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn class="primary"
              :to="`/ad/` + order.adId"
              >open</v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: 'fd3',
          name: 'Stanislav',
          phone: '8-921-122-12-12',
          adId: '123',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>
