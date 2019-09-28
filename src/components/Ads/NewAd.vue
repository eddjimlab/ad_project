<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12"  md="6" sm="8" offset="sm-3">
        <h1 class="text--secondary my-3">Create new Ad</h1>
        <v-card-text>
          <v-form v-model="valid" ref="form" :lazy-validation="true">
            <v-text-field
              required
              label="Ad title*"
              name="title"
              type="title"
              v-model="title"
              :rules="[v=> !!v || 'Title is required']"
            ></v-text-field>

            <v-textarea
              id="desctiption"
              label="Ad description"
              name="description"
              type="text"
              v-model="description"
              :rules="[v=> !!v || 'Description is required']"
            ></v-textarea>
          </v-form>
          <v-row>
            <v-col cols="12" xs="12">
              <v-btn color="warning" class="ma-2 white--text">
                Upload
                <v-icon right dark>mdi-cloud-upload</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <img
            src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
            height="100"
            alt="new ads"
          />
          <v-row>
            <v-col  xs="12">
               <v-switch
          label="Add to promo"
          v-model="promo"
          color="primary"
          ></v-switch>
          <div class="flex-grow-1"></div>
               <v-btn color="success"
               :loading="loading"
                @click="createAd"
                :disabled="!valid || loading"
                >Create ad</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      imageSrc: '',
      promo: false,
      valid: false
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          ownerId: this.ownerId,
          imageSrc: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          promo: this.promo
        }
        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    }
  }
}
</script>
