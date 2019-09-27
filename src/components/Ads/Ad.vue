<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12">
        <v-card>
          <v-img
          :src="ad.imageSrc"
          height="300"
          ></v-img>
          <v-card-text>
            <h1 class="text--primary" >{{ad.title}} </h1>
            <p>{{ad.description}} </p>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn class="warning px-5" depressed="">Edit</v-btn>
            <v-btn class="success px-5">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
 props:['id'],
 computed:{
   ad (){
     const id = this.id
     return this.$store.getters.adById(id)
   }
 }
}
</script>
