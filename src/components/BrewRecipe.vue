<template>
  <div v-if="pageNum == 1">
      <img src="../assets\wlaberec@2x.png" class="maxwidth: 400px;" />
      <div class="m-5 p-5 flex flex-row"><h1 class="text-3xl m-2">1</h1><p class="m-2 text-xl"><strong>Planning out your coffee</strong></p></div>
      <span class="flex flex-col text-l text-left px-10 pb-20">
      <p class="p-4">To make good coffee you need good ingredients start with high quality beans with ther flavour you want.</p>
      <p class="p-4">We recommend 60g/l</p>
      <p class="p-4">The more you brew the coarser you need to grind the coffee</p>
      </span>
  </div>
  <div v-if="pageNum == 2">
      <img src="../assets\ncl4omsr@2x.png" class="maxwidth: 400px;" />
      <div class="m-5 p-5 flex flex-row"><h1 class="text-3xl m-2">2</h1><p class="m-2 text-xl"><strong>Measure and grind beans</strong></p></div>
      <span class="flex flex-col text-l text-left px-10 pb-20">
      <p class="p-4">Remember that the burrs on a grinder changed over time. You will need to test out some brews to find your perfect setting.</p>
      <p class="p-4">Normally if the coffee tastes bitter amd dry, grind coarser if weak and water, grind finer. There is usually no need to adjust the coffee amount, simply adjust tand test different grind settings.</p>
      </span>
  </div>
  <div v-if="pageNum == 3">
         <img src="../assets\d7xp64x6@2x.png" class="maxwidth: 400px;" />
      <div class="m-5 p-5 flex flex-row"><h1 class="text-3xl m-2">3</h1><p class="m-2 text-xl"><strong>Filter</strong></p></div>
      <span class="flex flex-col text-l text-left px-10 pb-20">
      <p class="p-4">Remember that filter stuff Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident similique quae nemo consectetur, reprehenderit eum cumque, eveniet pariatur id nisi? Hic omnis eveniet obcaecati aliquam optio magni quam debitis.</p>
      <p class="p-4">Normally if the coffee tastes bitter amd dry, grind coarser if weak and water, grind finer. There is usually no need to adjust the coffee amount, simply adjust tand test different grind settings.</p>
      </span>
  </div>
  <div v-if="pageNum == 4">
        <img src="../assets\538gm3mc@2x.png" class="maxwidth: 400px;" />
      <div class="m-5 p-5 flex flex-row"><h1 class="text-3xl m-2">4</h1><p class="m-2 text-xl"><strong>Planning out your coffee</strong></p></div>
      <span class="flex flex-col text-l text-left px-10 pb-20">
      <p class="p-4">Remember that filter stuff Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident similique quae nemo consectetur, reprehenderit eum cumque, eveniet pariatur id nisi? Hic omnis eveniet obcaecati aliquam optio magni quam debitis.</p>
      <p class="p-4">We recommend 60g/l</p>
      <p class="p-4">Normally if the coffee tastes bitter amd dry, grind coarser if weak and water, grind finer. There is usually no need to adjust the coffee amount, simply adjust tand test different grind settings.</p>
      </span>
  </div>
  <div v-if="pageNum == 5">
      <img src="../assets\538gm3mc@2x.png" class="maxwidth: 400px;" />
      <div class="m-5 p-5 flex flex-row"><h1 class="text-3xl m-2">5</h1><p class="m-2 text-xl"><strong>Enjoy</strong></p></div>
      <span class="flex flex-col text-l text-left px-10 pb-20">
      <p class="p-4">Let your coffeee cool down for 5 minutes for the most flavor.</p>
      <p class="p-4">if it gets to cold you can heat it back upå in a microwave.</p>
      </span>
  </div>

  <div class="bg-yellow-200 rounded-3xl h-20 flex py-5 justify-center mx-auto" style="maxwidth: 400px;">
    <a @click="decrease()">
      <svg
        id="arrowBack"
        style="width: 40px;"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        /></svg
    ></a>
    <div class="flex p-2">
    <span v-if="pageNum == 1"
      ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
</svg></span>
    <span v-else
      ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
</svg></span>
    <span v-if="pageNum == 2"
      ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
</svg></span>
    <span v-else
      ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
</svg></span>
    <span v-if="pageNum == 3"
      ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
</svg></span>
    <span v-else
      ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
</svg></span>
    <span v-if="pageNum == 4"
      ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
</svg></span>
    <span v-else
      ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
</svg></span>
    <span v-if="pageNum == 5"
      ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
</svg></span>
    <span v-else
      ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
</svg></span>
</div>
    <a @click="increase()"> <svg style="width: 40px;" id="arrowForward" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.414 16.828">
    <path id="Path_161" data-name="Path 161" d="M14,5l7,7m0,0-7,7m7-7H3" transform="translate(-2 -3.586)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </svg>
  </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNum: 1
    };
  },
  methods: {
    decrease() {
        if (this.pageNum > 1) {
            this.pageNum--;
        }
      return this.pageNum;
    },
    increase() {
        
        if (this.pageNum < 5) {
            this.pageNum++;
      } else {
        this.$router.push('/MainWindow'); 
      }
      return this.pageNum;
    },
  },
};
</script>