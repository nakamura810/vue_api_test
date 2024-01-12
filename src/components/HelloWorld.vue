<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">
      </v-col>
      <v-col
        class="mb-5"
        cols="12">
        <v-row justify="center">
        </v-row>
      </v-col>
      <v-col
        class="mb-5"
        cols="12">
        <v-row justify="center">
        </v-row>
      </v-col>
      <v-col
        class="mb-5"
        cols="12">
        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld'
  }
</script>
