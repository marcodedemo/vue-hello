

  const { createApp } = Vue

  createApp({
    
    data() {

      return {
        titleText: "Testo del titolo!",
        imageSrc:"img/cake.png",
      }

    }

  }).mount('#app')