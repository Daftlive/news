import type { EntityState } from "@datorama/akita";
import { EntityStore, StoreConfig } from "@datorama/akita";
import type { Options } from "./options.model";

export type OptionsState = EntityState<Options>;

/**
 * As this is a store that stores user preferences, it is recommended to always have some initial values.
 */
const initialState: Options = {
  country: "us",
  category: "general",
};

@StoreConfig({ name: "options" })
export class OptionsStore extends EntityStore<OptionsState, Options> {
  constructor() {
    super(initialState);
  }
}

export const optionsStore = new OptionsStore();

