<template>
  <!-- Main -->
  <main class="bg-blue w-full">
    <!-- Hero Banner -->
    <div class="flex flex-wrap items-center justify-center bg-black p-5 gap-5 uppercase text-center md:justify-around">
      <div class="flex justify-center items-center gap-5 flex-col">
        <h2 class="text-2xl text-white underline font-normal md:text-3xl xl:text-5xl">Ton garage dans ta poche</h2>
        <h1 class="font-oswald text-5xl text-white md:text-6xl xl:text-8xl">Pocket Garage</h1>
      </div>
      <img class="rounded shadow-xl" src="https://placehold.co/280x520/ededef/141414" alt="Example">
    </div>
    <!-- Your Account -->
    <div class="flex flex-wrap items-center justify-center p-5 gap-5 uppercase text-center md:justify-around">
      <img class="rounded shadow-xl" src="https://placehold.co/280x520/ededef/141414" alt="Example">
      <div class="flex justify-center items-center gap-5 flex-col text-black">
        <h3 class="font-oswald text-3xl md:text-5xl xl:text-7xl">Accède à ton compte</h3>
        <h4 class="text-xl font-normal md:text-2xl xl:text-4xl">Connecte-toi à tout moment !</h4>
      </div>
    </div>
    <!-- Rating -->
    <div class="flex flex-col bg-black items-center justify-center text-white p-5 gap-5">
      <div class="flex justify-center items-center gap-5 flex-col uppercase">
        <h4 class="text-xl md:text-2xl xl:text-4xl underline text-center">Découvre les avis nous concernant</h4>
        <h3 class="font-oswald text-4xl font-normal md:text-5xl xl:text-7xl">Nos avis</h3>
      </div>
      <!-- List -->
      <div class="flex flex-wrap justify-between items-center gap-5 w-full">
        <!-- Card -->
        <div class="flex text-white gap-3 flex-col w-56 md:flex-row md:w-96">
          <img src="https://placehold.co/172x172/ededef/141414" width="128" alt="">
          <div class="flex flex-col text-sm">
            <p>Nom, Prénom</p>
            <p>Métier</p>
            <p>Age</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque accusantium, quis temporibus explicabo.
            </p>
          </div>
        </div>
        <div class="flex text-white gap-3 flex-col w-56 md:flex-row md:w-96">
          <img src="https://placehold.co/172x172/ededef/141414" width="128" alt="">
          <div class="flex flex-col text-sm">
            <p>Nom, Prénom</p>
            <p>Métier</p>
            <p>Age</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque accusantium, quis temporibus explicabo.
            </p>
          </div>
        </div>
        <div class="flex text-white gap-3 flex-col w-56 md:flex-row md:w-96">
          <img src="https://placehold.co/172x172/ededef/141414" width="128" alt="">
          <div class="flex flex-col text-sm">
            <p>Nom, Prénom</p>
            <p>Métier</p>
            <p>Age</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque accusantium, quis temporibus explicabo.
            </p>
          </div>
        </div>
        <div class="flex text-white gap-3 flex-col w-56 md:flex-row md:w-96">
          <img src="https://placehold.co/172x172/ededef/141414" width="128" alt="">
          <div class="flex flex-col text-sm">
            <p>Nom, Prénom</p>
            <p>Métier</p>
            <p>Age</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque accusantium, quis temporibus explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="p-5 flex justify-center flex-col items-center gap-5 uppercase w-full">
      <h3 class="font-oswald text-6xl font-normal md:text-8xl xl:text-8xl">FAQ</h3>
      <h4 class="text-xl md:text-2xl xl:text-4xl text-center">Tu as des questions, Il y éxiste peut-être déjà une
        réponse ?</h4>
      <div class="flex flex-col justify-center gap-3 items-center w-full md:max-w-[1100px]">
        <details class="w-full">
          <summary c class="bg-white p-5 rounded-t">L’application est-elle gratuite ?</summary>
          <p class="bg-white p-5 rounded-b w-full">Oui bien-sûr</p>
        </details>
        <details class="w-full">
          <summary class="bg-white p-5 rounded-t">Pour combien de temps sont conservées mes données personnelles ?
          </summary>
          <p class="bg-white p-5 rounded-b w-full">La durée de conservation des Données Personnelles varie en fonction
            de leur nature et de la finalité
            poursuivie par le traitement concerné. Lorsqu’une Donnée Personnelle est collectée pour plusieurs finalités,
            elle est conservée jusqu’à l’épuisement du délai de conservation le plus long. Pocket Garage s’engage à ne pas
            conserver vos Données Personnelles au-delà de la durée nécessaire à la fourniture de ces produits ou
            services.
          </p>
        </details>
        <details class="w-full">
          <summary class="bg-white p-5 rounded-t">Faut-il avoir un garage professionnel ?</summary>
          <p class="bg-white p-5 rounded-b w-full">Non !
          </p>
        </details>
      </div>
    </div>
    <!-- About -->
    <div class="p-5 bg-black flex justify-center flex-col items-center gap-5 uppercase text-white">
      <h4 class="text-xl md:text-2xl xl:text-4xl text-center underline">La naissance de pocket garage</h4>
      <h3 class="font-oswald text-4xl font-normal md:text-5xl xl:text-7xl">A propos de nous</h3>
      <p class="max-w-[1100px] text-center">Le projet <strong class="text-blue">pocket garage</strong> est née d’une
        intention d’<strong class="text-blue">amelioration</strong> du <strong class="text-blue">confort</strong> des
        personnes voulant effectuer leurs
        petites réparations eux-mêmes dans un cadre plus strict sans avoir de soucis avec la gestion des stocks ou
        encore des récapitulatifs des derniers entretiens .</p>
    </div>
    <!-- Download -->
    <div class="p-5 flex justify-center flex-col items-center gap-5 uppercase">
      <h3 class="font-oswald text-4xl font-normal md:text-5xl xl:text-7xl">Essaie la dès maintenant !</h3>
      <div class="flex justify-center gap-5 w-full items-center">

        <img src="https://placehold.co/159x50/141414/FFFFFF" alt="App Store">
        <img src="https://placehold.co/159x50/141414/FFFFFF" alt="Play Store">
      </div>
      <h4 class="text-xl md:text-2xl xl:text-4xl text-center">N'hésite pas à laisser un avis</h4>
    </div>
  </main>
</template>
<script setup>
</script>