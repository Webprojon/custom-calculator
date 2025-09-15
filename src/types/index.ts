export interface ButtonConfig {
  action: string;
  value: string;
  ariaLabel: string;
  className: string;
}

export interface ButtonRow {
  buttons: ButtonConfig[];
}

// Command pattern interfaces
export interface Command {
  execute(): number;
  undo?(): void;
}

export interface CalculatorState {
  display: string;
  leftOperand: number | null;
  rightOperand: number | null;
  operator: string | null;
  memory: number;
  isNewNumber: boolean;
  isRadians: boolean;
  secondFunction: boolean;
}

export interface CalculatorError {
  message: string;
  type:
    | 'DIVISION_BY_ZERO'
    | 'INVALID_INPUT'
    | 'OVERFLOW'
    | 'UNDERFLOW'
    | 'INVALID_OPERATION';
}
