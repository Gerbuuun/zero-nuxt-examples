import { Zero } from "@rocicorp/zero";
import { schema, type Schema } from "~/zero/schema";

let client: Zero<Schema>;
let currentOrgId: string;

export const useZeroComposable = () => {
  const route = useRoute();
  const orgId = computed(() => route.params.orgId as string | undefined);

  if (!orgId.value) {
    throw new Error(`Can't use zero composable outside of a route with an orgId`);
  }
  
  const clientRef = shallowRef<Zero<Schema>>(client!);

  watch(orgId, () => {
    const newOrgId = orgId.value || 'anon';
    
    if (currentOrgId === newOrgId && client && !client.closed)
      return;

    if (client && !client.closed) {
      client.close();
    }

    const newClient = new Zero({
      userID: newOrgId,
      auth: () => newOrgId !== 'anon' ? newOrgId : undefined,
      server: import.meta.client ? 'http://localhost:4849' : undefined,
      schema,
      kvStore: 'mem',
    });

    client = newClient;
    clientRef.value = client;
    currentOrgId = newOrgId;
  }, { immediate: true });

  return clientRef;
};
