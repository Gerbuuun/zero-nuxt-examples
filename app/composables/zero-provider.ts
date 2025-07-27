import { Zero } from '@rocicorp/zero';
import type { ShallowRef } from 'vue';
import type { Schema } from '~/zero/schema';

export const useZeroProvider = () => inject<ShallowRef<Zero<Schema>>>('zero')!;
