import { Zero } from '@rocicorp/zero';
import { schema } from '~/zero/schema';

export default defineNuxtPlugin(() => {

  const route = useRoute();
  const orgId = computed(() => route.params.orgId as string | undefined);
  const z = shallowRef<Zero<typeof schema> | null>(null);

  watch(orgId, () => {
    if (z.value && !z.value.closed) {
      z.value.close();
    }

    if (!orgId.value) {
      z.value = null;
      return;
    }

    z.value = new Zero({
      userID: orgId.value || 'anon',
      auth: () => orgId.value || undefined,
      server: import.meta.client ? 'http://localhost:4849' : undefined,
      schema,
      kvStore: 'mem',
    });
  }, { immediate: true });

  return {
    provide: {
      z,
    },
  }
});
