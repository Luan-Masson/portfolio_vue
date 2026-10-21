<script setup>
import Card from "primevue/card";
import Chip from "primevue/chip";
import { useDark } from "@vueuse/core";
import { getFromApi } from "../utils/AssetsUtils";

const isDark = useDark({
  selector: "body",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});
</script>
<template>
  <section class="flex flex-wrap w-full h-full justify-center gap-6">
    <!-- Usar quando finalizar os i18n <h1 v-for="skills in $tm('skills')">{{ skills }}</h1> -->
    <Card
      v-for="(skillQ, key) in $tm('skills')"
      :key="key"
      class="w-11/12 md:w-96 h-max overflow-hidden"
      v-animateonscroll="{ enterClass: 'fade-in-up' }"
    >
      <template #header>
        <div class="flex justify-center items-center w-full h-40">
          <img
            class="w-36 p-2"
            alt="user header"
            :src="getFromApi(`images${!isDark ? skillQ.image : skillQ.imageDark}`)"
          />
        </div>
      </template>
      <template #title>
        <span class="w-full flex items-center justify-center">{{
          skillQ.title
        }}</span></template
      >
      <template #content>
        <div class="flex flex-col gap-2 h-44">
          <div class="flex w-full gap-2 flex-wrap">
            <Chip
              v-for="skill in skillQ.skills"
              :key="skill"
              class="shadow w-max h-max"
              :label="skill"
            />
          </div>
        </div>
      </template>
    </Card>
  </section>
</template>
<style scoped></style>
