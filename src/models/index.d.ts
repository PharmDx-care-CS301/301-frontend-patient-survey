import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Survey {
  readonly id: string;
  readonly survey_data?: string;
  readonly follow_up_id?: string;
  readonly status?: string;
  readonly dob?: string;
  constructor(init: ModelInit<Survey>);
  static copyOf(source: Survey, mutator: (draft: MutableModel<Survey>) => MutableModel<Survey> | void): Survey;
}