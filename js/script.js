const { createApp, ref } = Vue;

createApp({
  data() {
    return {
      // apiUrl
      apiUrl: "http://localhost/php-dischi-json/api/server.php",
      // array vuoto che andremo a popolare con i file del .json tramite api
      discs: [],
    };
  },
  // metodo per chiamare l'api tramite get per ricevere la lista dei dischi
  methods: {
    getDiscs(url) {
      axios
        .get(url)
        // arrow function
        .then((response) => {
          console.log(response.data);
          // aggiungo gli elementi presi da response.data dentro l'array che ho creato in precedenza discs[]
          this.discs = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getDiscs(this.apiUrl);
  },
}).mount("#app");
