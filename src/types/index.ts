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

export type IconProps = {
  iconProvider: 'fontawesome' | 'antdesign' | 'ionic' | 'entypo';
  name: string;
  size?: number;
  color?: string;
  style?: any;
};
