<script setup>
import {ref} from "vue";

let classMenu = ref("-translate-x-full");
</script>
<template>
  <nav class="hidden md:block p-4 sticky">
    <ul class="flex w-full justify-evenly items-center">
      <li>
        <div class="flex gap-8 items-center justify-center">
          <a href="#">Accueil</a>
        </div>
      </li>
      <li>
        <div class="flex items-center justify-center gap-5">
          <a target="_blank" href="https://github.com/Dev-Crisis" title="Link to my Github">
            <vue-feather size="26" class="hover:-translate-y-1 transition-all hover:text-slate-400" type="github"></vue-feather>
          </a>
          <a title="Link to my Instagram" target="_blank" href="https://www.instagram.com/dev_crisis/?hl=fr">
            <vue-feather class="hover:-translate-y-1 transition-all hover:text-slate-400" size="26" type="instagram"></vue-feather>
          </a>
        </div>
      </li>
    </ul>
  </nav>


  <nav class="md:hidden flex justify-end items-center">
    <vue-feather type="menu"
                 class="fixed top-0 right-0 z-10 p-2 cursor-pointer rounded-bl-2xl border-b-2 border-l-2 dark:border-slate-300"
                 size="36" @click.passive="classMenu = '';"></vue-feather>
    <ul class="pl-32 top-0 fixed z-10 bg-slate-300 h-full flex flex-col justify-evenly items-start w-full transition-all duration-300"
        :class="classMenu">
      <vue-feather type="x"
                   class="fixed right-0 top-0 p-2 cursor-pointer rounded-bl-2xl border-b-2 border-l-2 dark:border-slate-300"
                   size="36"
                   @click.passive="classMenu = '-translate-x-full'"></vue-feather>
      <li>
        <div class="flex gap-16 flex-col justify-center items-start">

          <a href="#">Accueil
          </a>
        </div>
      </li>
      <li>
        <div class="flex items-center justify-center gap-5">
          <a title="Link to my Github" target="_blank" href="https://github.com/Dev-Crisis">
            <vue-feather type="github" class="hover:-translate-y-1 transition-all hover:text-slate-400" size="36"></vue-feather>
          </a>
          <a title="Link to my Instagram" target="_blank" href="https://www.instagram.com/dev_crisis/?hl=fr">
            <vue-feather type="instagram" class="hover:-translate-y-1 transition-all hover:text-slate-400" size="36"></vue-feather>
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>