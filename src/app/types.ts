export type Item = {
  id: string,
  content: string,
  status: string,
  checked: boolean
}

export interface IModal {
  id: string;
  visible: boolean;
}
