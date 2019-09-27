<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" sm="10" md="10"  lg="6">
        <h1 class="text--secondary my-3">My ads</h1>
        <v-card class="elvation-10 mb-5" v-for="(ad,i) in myAds" :key="i">
          <v-list-item three-line>
            <v-list-item-avatar
                size="160"
                tile
            >
          <v-img :src="ad.imageSrc" class="align-self-start"></v-img>
          </v-list-item-avatar>
           <v-list-item-content>
          <v-card-title>{{ad.title}}</v-card-title>
              <v-card-text>{{ad.description}}</v-card-text>
              </v-list-item-content>
               <div class="flex-grow-1"></div>
              <v-list-item-content class="align-end justify-end">
              <v-card-actions>
                <v-btn class="ml-12" color="info" :to="`/ad/` + ad.id">Open</v-btn>
                </v-card-actions>
                </v-list-item-content>
                </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed:{
    myAds(state){
      return this.$store.getters.myAds
    }
  }
}
</script>
