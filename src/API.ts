/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSurveyInput = {
  id?: string | null,
  survey_data?: string | null,
  follow_up_id?: string | null,
  status?: string | null,
  dob?: string | null,
  _version?: number | null,
};

export type ModelSurveyConditionInput = {
  survey_data?: ModelStringInput | null,
  follow_up_id?: ModelIDInput | null,
  status?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  and?: Array< ModelSurveyConditionInput | null > | null,
  or?: Array< ModelSurveyConditionInput | null > | null,
  not?: ModelSurveyConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Survey = {
  __typename: "Survey",
  id?: string,
  survey_data?: string | null,
  follow_up_id?: string | null,
  status?: string | null,
  dob?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateSurveyInput = {
  id: string,
  survey_data?: string | null,
  follow_up_id?: string | null,
  status?: string | null,
  dob?: string | null,
  _version?: number | null,
};

export type DeleteSurveyInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelSurveyFilterInput = {
  id?: ModelIDInput | null,
  survey_data?: ModelStringInput | null,
  follow_up_id?: ModelIDInput | null,
  status?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  and?: Array< ModelSurveyFilterInput | null > | null,
  or?: Array< ModelSurveyFilterInput | null > | null,
  not?: ModelSurveyFilterInput | null,
};

export type ModelSurveyConnection = {
  __typename: "ModelSurveyConnection",
  items?:  Array<Survey | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateSurveyMutationVariables = {
  input?: CreateSurveyInput,
  condition?: ModelSurveyConditionInput | null,
};

export type CreateSurveyMutation = {
  createSurvey?:  {
    __typename: "Survey",
    id: string,
    survey_data?: string | null,
    follow_up_id?: string | null,
    status?: string | null,
    dob?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSurveyMutationVariables = {
  input?: UpdateSurveyInput,
  condition?: ModelSurveyConditionInput | null,
};

export type UpdateSurveyMutation = {
  updateSurvey?:  {
    __typename: "Survey",
    id: string,
    survey_data?: string | null,
    follow_up_id?: string | null,
    status?: string | null,
    dob?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSurveyMutationVariables = {
  input?: DeleteSurveyInput,
  condition?: ModelSurveyConditionInput | null,
};

export type DeleteSurveyMutation = {
  deleteSurvey?:  {
    __typename: "Survey",
    id: string,
    survey_data?: string | null,
    follow_up_id?: string | null,
    status?: string | null,
    dob?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSurveyQueryVariables = {
  id?: string,
};

export type GetSurveyQuery = {
  getSurvey?:  {
    __typename: "Survey",
    id: string,
    survey_data?: string | null,
    follow_up_id?: string | null,
    status?: string | null,
    dob?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSurveysQueryVariables = {
  filter?: ModelSurveyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSurveysQuery = {
  listSurveys?:  {
    __typename: "ModelSurveyConnection",
    items?:  Array< {
      __typename: "Survey",
      id: string,
      survey_data?: string | null,
      follow_up_id?: string | null,
      status?: string | null,
      dob?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSurveysQueryVariables = {
  filter?: ModelSurveyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSurveysQuery = {
  syncSurveys?:  {
    __typename: "ModelSurveyConnection",
    items?:  Array< {
      __typename: "Survey",
      id: string,
      survey_data?: string | null,
      follow_up_id?: string | null,
      status?: string | null,
      dob?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateSurveySubscription = {
  onCreateSurvey?:  {
    __typename: "Survey",
    id: string,
    survey_data?: string | null,
    follow_up_id?: string | null,
    status?: string | null,
    dob?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSurveySubscription = {
  onUpdateSurvey?:  {
    __typename: "Survey",
    id: string,
    survey_data?: string | null,
    follow_up_id?: string | null,
    status?: string | null,
    dob?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSurveySubscription = {
  onDeleteSurvey?:  {
    __typename: "Survey",
    id: string,
    survey_data?: string | null,
    follow_up_id?: string | null,
    status?: string | null,
    dob?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
