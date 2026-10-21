<script setup>
import SelectButton from "primevue/selectbutton";
import { ref } from "vue";
import { getIconUrl } from "../utils/AssetsUtils";
import { loadLanguage } from "../i18n";

let selectedLang = ref(
  localStorage.getItem("lang") === "en"
    ? { img: getIconUrl("us-flag"), value: "en" }
    : { img: getIconUrl("br-flag"), value: "pt" }
);
let oldOpt = selectedLang.value;
const options = ref([
  { img: getIconUrl("br-flag"), value: "pt" },
  { img: getIconUrl("us-flag"), value: "en" },
]);

verifyLang();

function verifyLang(event) {
  if (selectedLang.value && selectedLang?.value?.value === "pt") {
    document.getElementById("page-structure").lang = "pt-BR";
    localStorage.setItem("lang", "pt");
  } else if (!selectedLang.value) {
    selectedLang.value = oldOpt;
    return;
  } else {
    document.getElementById("page-structure").lang = "en";
    localStorage.setItem("lang", selectedLang.value.value);
  }
  oldOpt = selectedLang.value;
  if (event) {
    loadLanguage(selectedLang.value.value);
  }
}
</script>

<template>
  <header
    class="p-6 rounded-full w-max gap-6 flex items-center h-12 shadow-lg bg-slate-300 shadow-teal-200
    dark:bg-slate-950 dark:shadow-teal-800"
  >
    <h1 class="text-2xl drop-shadow-md w-max h-max">Luan Masson</h1>
    <SelectButton
      v-model="selectedLang"
      :options="options"
      aria-labelledby="basic"
      optionLabel="value"
      dataKey="value"
      v-on:change="verifyLang($event)"
      class="select-button"
    >
      <template #option="slotProps">
        <img class="w-6" :src="slotProps.option.img" alt="" />
      </template>
    </SelectButton>
  </header>
</template>

<style scoped>
@media (min-width: 768px) {
  header {
    z-index: 100;
    position: fixed;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (max-width: 768px) {
  header {
    z-index: 100;
    position: fixed;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
