import { CalculatorInvoker } from './invoker';

export class Calculator {
  private invoker: CalculatorInvoker;

  constructor() {
    this.invoker = new CalculatorInvoker();
    this.initializeEventListeners();
  }

  private initializeEventListeners(): void {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;

      if (target.tagName === 'BUTTON') {
        const action = target.getAttribute('data-action');
        const value = target.getAttribute('data-value');

        if (action && value) {
          this.handleButtonClick(action, value);
        }
      }
    });

    // Keyboard support
    document.addEventListener('keydown', (event) => {
      this.handleKeyPress(event);
    });
  }

  public handleButtonClick(action: string, value: string): void {
    this.invoker.executeCommand(action, value);
  }

  private handleKeyPress(event: KeyboardEvent): void {
    const key = event.key;

    // Number keys
    if (key >= '0' && key <= '9') {
      this.invoker.executeCommand('number', key);
      return;
    }

    // Decimal point
    if (key === '.' || key === ',') {
      this.invoker.executeCommand('decimal', '.');
      return;
    }

    // Undo/Redo
    if (event.ctrlKey || event.metaKey) {
      switch (key) {
        case 'z':
          if (event.shiftKey) {
            this.redo();
          } else {
            this.undo();
          }
          event.preventDefault();
          return;
        case 'y':
          this.redo();
          event.preventDefault();
          return;
      }
    }

    // Operators
    switch (key) {
      case '+':
        this.invoker.executeCommand('operator', '+');
        break;
      case '-':
        this.invoker.executeCommand('operator', '-');
        break;
      case '*':
        this.invoker.executeCommand('operator', '×');
        break;
      case '/':
        event.preventDefault();
        this.invoker.executeCommand('operator', '÷');
        break;
      case 'Enter':
      case '=':
        this.invoker.executeCommand('equals', '=');
        break;
      case 'Escape':
        this.invoker.executeCommand('clear', 'AC');
        break;
      case 'Backspace':
        this.handleBackspace();
        break;
    }
  }

  private handleBackspace(): void {
    const receiver = this.invoker.getReceiver();
    const currentDisplay = receiver.getDisplay();

    if (currentDisplay.length > 1) {
      const newDisplay = currentDisplay.slice(0, -1);
      receiver.setDisplay(newDisplay);
    } else {
      receiver.setDisplay('0');
      receiver.setIsNewNumber(true);
    }
  }

  public getInvoker(): CalculatorInvoker {
    return this.invoker;
  }

  /**
   * Handles undo operation
   */
  public undo(): void {
    this.invoker.undo();
  }

  /**
   * Handles redo operation
   */
  public redo(): void {
    this.invoker.redo();
  }

  /**
   * Checks if undo is available
   * @returns True if undo is possible
   */
  public canUndo(): boolean {
    return this.invoker.canUndo();
  }

  /**
   * Checks if redo is available
   * @returns True if redo is possible
   */
  public canRedo(): boolean {
    return this.invoker.canRedo();
  }
}
