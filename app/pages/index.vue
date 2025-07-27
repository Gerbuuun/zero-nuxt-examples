<script setup lang="ts">
const z = useZeroPlugin();
</script>

<template>
  <div>
    <h1>Zero plugin: {{ z === null ? 'null' : z.userID }}</h1>
    <NuxtLink to="/org1">Go to org 1</NuxtLink>
    <br/>
    <NuxtLink to="/org2">Go to org 2</NuxtLink>
    <br/>
    <NuxtLink to="/org3">Go to org 3</NuxtLink>
  </div>
</template>
