export interface IMessage {
  text: string;
  links: string[];
}

export interface ILocalMessage extends IMessage {
  isRequest: boolean;
}
