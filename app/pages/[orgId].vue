<script setup lang="ts">
const composableZero = useZeroComposable();
const pluginZero = useZeroPlugin();

// Cannot use useZeroProvider here because [orgId].vue is not wrapped in ZeroProvider
// const providerZero = useZeroProvider();
</script>

<template>
  <div>
    <ZeroProvider>
      <template #default="{ zero }">
        <h1>Zero provider component: {{ zero.userID }}</h1>

        <!-- child pages will have access to the zero instance via the useZeroProvider composable -->
        <NuxtPage />
      </template>
    </ZeroProvider>
    <div>
      <h1>Zero composable only: {{ composableZero.userID }}</h1>
    </div>
    <div>
      <h1>Zero plugin: {{ pluginZero?.userID }}</h1>
    </div>

    <NuxtLink to="/">Go to home</NuxtLink>
    <br/>
    <NuxtLink to="/org1">Go to org 1</NuxtLink>
    <br/>
    <NuxtLink to="/org2">Go to org 2</NuxtLink>
    <br/>
    <NuxtLink to="/org3">Go to org 3</NuxtLink>
  </div>
</template>
