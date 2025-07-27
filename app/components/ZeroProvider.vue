<script setup lang="ts">
import { Zero } from '@rocicorp/zero';
import { schema } from '~/zero/schema';

const route = useRoute();
const orgId = computed(() => route.params.orgId as string);

const z = shallowRef<Zero<typeof schema>>(null!);

watch(orgId, () => {
  if (z.value && !z.value.closed) {
    z.value.close();
  }
  z.value = new Zero({
    userID: orgId.value || 'anon',
    auth: () => orgId.value || undefined,
    server: import.meta.client ? 'http://localhost:4849' : undefined,
    schema,
    kvStore: 'mem',
  });
}, { immediate: true });

provide('zero', z);
</script>

<template>
  <slot :zero="z" />
</template>
