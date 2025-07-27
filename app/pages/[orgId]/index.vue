<script lang="ts" setup>
const z = useZeroProvider();
</script>

<template>
  <div>
    <h1>Zero provider component (child page): {{ z.userID }}</h1>
  </div>
</template>
