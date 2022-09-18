import { QueryEntity } from "@datorama/akita";
import type { OptionsState } from "./options.store";
import { OptionsStore, optionsStore } from "./options.store";

export class OptionsQuery extends QueryEntity<OptionsState> {
  constructor(protected optionsStore: OptionsStore) {
    super(optionsStore);
  }
}

export const optionsQuery = new OptionsQuery(optionsStore);

