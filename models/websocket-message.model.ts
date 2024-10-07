
export interface WebsocketMessageModel {
    type: string;
    timestamp: number; // Date strings are parsed as strings in JSON
    payload?: any;
  }