export interface ButtonConfig {
  action: string;
  value: string;
  ariaLabel: string;
  className: string;
}

export interface ButtonRow {
  buttons: ButtonConfig[];
}
