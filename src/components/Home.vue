<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-carousel>
            <v-carousel-item
              v-for="(ad,i) in promoAds"
              :key="i"
              :title="ad.tile"
              :description="ad.description"
              :promo="ad.promo"
              :src="ad.imageSrc"
              :id="ad.id"
              cycle
              show-arrows-on-hover
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
            <div class="car-link">
              <v-btn color="error" :to="`/ad/` + ad.id">{{ad.title}}</v-btn>
            </div>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row
      >
        <v-col
        class="pa-2 mb-2"
        v-for="(ad,i) in ads"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        xs="12"
        >
          <v-card id="card" class="mx-auto">
            <v-img
              class="white--text"
              height="200px"
              :src="ad.imageSrc"
            >
              <v-card-title class="align-end fill-height">{{ad.tilte}}</v-card-title>
            </v-img>

            <v-card-text>
              <span>Number 10</span>
              <br />
              <span class="text--primary">
                <span>{{ad.description}}</span>
              </span>
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn text :to="`/ad/` + ad.id" >Open</v-btn>
              <v-btn text class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    }
  }
}
</script>
<style lang="scss" scoped>
v-wrap{
  flex-wrap: wrap;
  flex-direction: row;
}
.car-link{
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgba(0,0,0,.5);
  transform: translate(-50%,0);
  padding: 5px 15px;
  border-radius: 5px 5px 0 0;
}

</style>
