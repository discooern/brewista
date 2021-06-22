<template>
  <div class="mx-auto max-w-4xl">
    <span class="flex justify-center">
    <h1 class="text-2xl text-left mx-5">
      It's a Great <strong>Day for Coffee</strong>
    </h1>
    <router-link to="/AddBrew" class="mx-14 rounded-full bg-black p-3 px-5 h-12 w-12 text-white"
      >+</router-link>
    </span>

  <nav class="mt-16 mx-8 max-w-4xl">
    <p class="text-left">Previous Brews</p>

    <div class="my-8" :key="brew.id" v-for="brew in brews">
      <img class="rounded-t-3xl" :src="'http://localhost:3080' + brew.method.image"/>
      <div class="bg-gray-100 rounded-b-3xl">
        <div class="flex px-6">
          <svg style="width: 40px;">
            <use xlink:href="#chemex" />
          </svg>
          <span class="flex flex-col mx-6 mt-12">
            <h2 class="text-left"><strong>{{ brew.method.name }}</strong></h2>
            <p class="text-gray-400 text-sm text-left">{{ brew.bean.title }} From {{ brew.bean.roaster }}</p>
          </span>
        </div>

        <div class="flex">
          <span class="flex m-4">
            <svg
              style="width: 12px"
              class="mr-2"
              id="bean"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37 48"
              fill="lightgray"
            >
              <defs />
              <g data-name="Group 43">
                <g data-name="Group 42">
                  <path
                    d="M18.303 45.094c-.571.989-1.6 3.185 2.975 2.854 7.455-.527 14.668-7.931 14.968-23.151 0-.145.009-.3 0-.429 0-.161.016-.3.027-.454C36.566 8.673 26.273.619 21.9.385c-3.297-.177-3.697 7.856-3.697 7.856a63.413 63.413 0 001.756 15.5 36.281 36.281 0 011.211 9.69 25.183 25.183 0 01-2.867 11.663z"
                    data-name="Path 59"
                  />
                  <path
                    d="M13.678 47.287c3.42-6.074 4.524-17.225 1.249-27.521-2.336-7.3-.32-14.477 1.838-19.29A2.1 2.1 0 0015.331 0C8.92-.128.331 7.7.024 22.924c-.007.171.018.3.013.468 0 .136-.029.28-.029.434-.289 14.684 7.375 22.78 13.67 23.461z"
                    data-name="Path 60"
                  />
                </g>
              </g>
            </svg>
            <p class="text-gray-400 text-xs">40g</p>
          </span>

          <span class="flex m-4">
            <svg
              style="width: 12px"
              class="mr-2"
              id="water"
              fill="lightgray"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 48"
            >
              <defs />
              <g data-name="Group 41">
                <path
                  d="M18.75.322a1.022 1.022 0 00-1.49 0C16.55 1.112 0 19.791 0 29.642a18.2 18.2 0 0018 18.34 18.192 18.192 0 0018-18.34c0-9.851-16.55-28.53-17.25-29.32zm2.45 40.642a.979.979 0 01-.2.02 1 1 0 01-.2-1.98c8.917-1.783 7.289-10.455 7.216-10.823a1 1 0 011.961-.393c.028.109 2.076 11.003-8.777 13.176z"
                  data-name="Path 58"
                />
              </g>
            </svg>
            <p class="text-gray-400 text-xs">500ml</p>
          </span>

          <span class="flex m-4">
            <svg
              style="width: 12px"
              class="mr-2"
              id="grind"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 10"
              fill="lightgray"
            >
              <defs />
              <g data-name="Group 68" transform="translate(-211 -538)">
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  data-name="Ellipse 26"
                  transform="translate(211 544)"
                />
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  data-name="Ellipse 27"
                  transform="translate(214 538)"
                />
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  data-name="Ellipse 28"
                  transform="translate(217 544)"
                />
              </g>
            </svg>
            <p class="text-gray-400 text-xs">Coarse</p>
          </span>

          <span class="flex m-4">
            <svg
              style="width: 12px"
              class="mr-2"
              id="time"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11 11"
            >
              <defs />
              <g data-name="Group 69">
                <g fill="lightgray" stroke-width="1.2" data-name="Ellipse 29">
                  <circle cx="5.5" cy="5.5" r="5.5" stroke="none" />
                  <circle cx="5.5" cy="5.5" r="4.9" fill="none" />
                </g>
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  d="M5.5 1.5v4"
                  data-name="Line 2"
                />
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  d="M8.5 5.5h-3"
                  data-name="Line 3"
                />
              </g>
            </svg>
            <p class="text-gray-400 text-xs">12timer</p>
          </span>
        </div>
      </div>
    </div>

    <div class="my-8">
      <img class="rounded-t-3xl" src="../assets/AearoPressBrew.jpg"/>
      <div class="bg-gray-100 rounded-b-3xl">
        <div class="flex px-6 py-5">
          <svg style="width: 40px;" id="aeropress" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 60" fill="black">
    <defs/>
    <g data-name="Group 65">
      <g data-name="Group 11">
        <path d="M6.906 45.488H20.6a.916.916 0 00.893-.893v-3.751a.916.916 0 00-.893-.893H6.906a.916.916 0 00-.893.893v3.751a.916.916 0 00.893.893z" data-name="Path 29"/>
        <path d="M26.555 47.036h-1.906V12.682a.916.916 0 00-.893-.893h-2.262V1.727h2.5a.916.916 0 00.893-.893.865.865 0 00-.893-.834H3.513a.893.893 0 100 1.786h2.5v10.062H3.691a.916.916 0 00-.893.893v34.295H.893a.893.893 0 100 1.786H2.8v2.739a.916.916 0 00.893.893h20.063a.916.916 0 00.893-.893v-2.739h1.905a.893.893 0 000-1.786zm-21.97 3.632v-1.846h18.338v1.846zm15.123-37.093v16.969H7.8V13.575zM19.529 36.2H7.978l.893-3.93h9.764zM6.907 32.33h.179l-1.072 4.585a.782.782 0 00.179.714 1.038 1.038 0 00.714.357H20.6a.93.93 0 00.714-.357.782.782 0 00.179-.714l-1.011-4.585h.179a.916.916 0 00.893-.893V13.575h1.429v33.461h-18.4V13.575h1.429v17.862a.916.916 0 00.895.893zM7.8 1.73h11.908v10.059H7.8z" data-name="Path 30"/>
      </g>
      <path d="M13.754 59.657a1.6 1.6 0 001.608-1.608c0-.893-1.608-3.394-1.608-3.394s-1.608 2.443-1.608 3.396a1.6 1.6 0 001.608 1.606z" data-name="Path 39"/>
      <path d="M19.112 59.657a1.6 1.6 0 001.608-1.608c0-.893-1.608-3.394-1.608-3.394s-1.605 2.443-1.605 3.396a1.565 1.565 0 001.605 1.606z" data-name="Path 40"/>
      <path d="M8.395 59.657a1.6 1.6 0 001.608-1.608c0-.893-1.608-3.394-1.608-3.394s-1.608 2.443-1.608 3.396a1.6 1.6 0 001.608 1.606z" data-name="Path 41"/>
    </g>
  </svg>
          <span class="flex flex-col mx-6 my-3">
            <h2 class="text-left"><strong>AEROPRESS</strong></h2>
            <p class="text-gray-400 text-sm">Kieni from Coffee Collective</p>
          </span>
        </div>

        <div class="flex">
          <span class="flex m-4">
            <svg
              style="width: 12px"
              class="mr-2"
              id="bean"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37 48"
              fill="lightgray"
            >
              <defs />
              <g data-name="Group 43">
                <g data-name="Group 42">
                  <path
                    d="M18.303 45.094c-.571.989-1.6 3.185 2.975 2.854 7.455-.527 14.668-7.931 14.968-23.151 0-.145.009-.3 0-.429 0-.161.016-.3.027-.454C36.566 8.673 26.273.619 21.9.385c-3.297-.177-3.697 7.856-3.697 7.856a63.413 63.413 0 001.756 15.5 36.281 36.281 0 011.211 9.69 25.183 25.183 0 01-2.867 11.663z"
                    data-name="Path 59"
                  />
                  <path
                    d="M13.678 47.287c3.42-6.074 4.524-17.225 1.249-27.521-2.336-7.3-.32-14.477 1.838-19.29A2.1 2.1 0 0015.331 0C8.92-.128.331 7.7.024 22.924c-.007.171.018.3.013.468 0 .136-.029.28-.029.434-.289 14.684 7.375 22.78 13.67 23.461z"
                    data-name="Path 60"
                  />
                </g>
              </g>
            </svg>
            <p class="text-gray-400 text-xs">16g</p>
          </span>

          <span class="flex m-4">
            <svg
              style="width: 12px"
              class="mr-2"
              id="water"
              fill="lightgray"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 48"
            >
              <defs />
              <g data-name="Group 41">
                <path
                  d="M18.75.322a1.022 1.022 0 00-1.49 0C16.55 1.112 0 19.791 0 29.642a18.2 18.2 0 0018 18.34 18.192 18.192 0 0018-18.34c0-9.851-16.55-28.53-17.25-29.32zm2.45 40.642a.979.979 0 01-.2.02 1 1 0 01-.2-1.98c8.917-1.783 7.289-10.455 7.216-10.823a1 1 0 011.961-.393c.028.109 2.076 11.003-8.777 13.176z"
                  data-name="Path 58"
                />
              </g>
            </svg>
            <p class="text-gray-400 text-xs">230ml</p>
          </span>

          <span class="flex m-4">
            <svg
              style="width: 12px"
              class="mr-2"
              id="grind"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 10"
              fill="lightgray"
            >
              <defs />
              <g data-name="Group 68" transform="translate(-211 -538)">
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  data-name="Ellipse 26"
                  transform="translate(211 544)"
                />
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  data-name="Ellipse 27"
                  transform="translate(214 538)"
                />
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  data-name="Ellipse 28"
                  transform="translate(217 544)"
                />
              </g>
            </svg>
            <p class="text-gray-400 text-xs">Medium</p>
          </span>

          <span class="flex m-4">
            <svg
              style="width: 12px"
              class="mr-2"
              id="time"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11 11"
            >
              <defs />
              <g data-name="Group 69">
                <g fill="lightgray" stroke-width="1.2" data-name="Ellipse 29">
                  <circle cx="5.5" cy="5.5" r="5.5" stroke="none" />
                  <circle cx="5.5" cy="5.5" r="4.9" fill="none" />
                </g>
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  d="M5.5 1.5v4"
                  data-name="Line 2"
                />
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  d="M8.5 5.5h-3"
                  data-name="Line 3"
                />
              </g>
            </svg>
            <p class="text-gray-400 text-xs">2min</p>
          </span>
        </div>
      </div>
    </div>
  </nav>
  </div>
  <nav class="">
    <svg></svg>
    <svg></svg>
  </nav>
</template>

<script>
export default {
    props: ['brews', 'createBrew'],
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.a {
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
}
</style>
