import { Zero } from "@rocicorp/zero";
import { schema, type Schema } from "~/zero/schema";

const composable = () => {
  const route = useRoute();
  const orgId = computed(() => route.params.orgId as string);

  const z = shallowRef<Zero<Schema>>(null!);

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

  return z;
}

export const useZeroComposable = createSharedComposable(composable);
