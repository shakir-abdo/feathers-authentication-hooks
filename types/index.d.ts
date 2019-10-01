// TypeScript Version: 3.0
import { Hook } from '@feathersjs/feathers';

export interface HookOptions {
  from: string;
  as: string;
  allowUndefined?: boolean;
}

export const setField: ((options?: HookOptions) => Hook);
