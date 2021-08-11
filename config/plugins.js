module.exports = ({ env }) => ({
  upload: {
    provider: "imagekit",
    providerOptions: {
      publicKey: "public_Cm7STzTuDoTp/FKDmlhsoV2vWGE=",
      privateKey: env('privateKey'),
      urlEndpoint: "https://ik.imagekit.io/dibotak",
      // Optional
      params: {
        // Defaults to "/" if value is not supplied
        folder: "/hahahihi"
      }
    }
  }
});