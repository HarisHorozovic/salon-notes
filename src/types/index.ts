export type NoteItemStep = {
  key: string;
  value: string;
};

export type NoteItem = {
  title: string;
  images?: Array<string>;
  steps?: Array<NoteItemStep>;
  description?: string;
};
