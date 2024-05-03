export interface IProfile {
  id?: number;
  name?: string;
  description?: string;
}

export interface IExperience {
  id?: number;
  profile?: number;
  since?: string;
  until?: string;
  position?: string;
  company?: string;
  link?: string;
  linkedin?: string;
  description?: string;
  explanation?: string;
}

export interface IUser {
  id?: number;
  key?: string;
  value?: string;
}
