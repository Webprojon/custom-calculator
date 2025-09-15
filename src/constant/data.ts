import { ButtonRow } from '../types';

export const buttonRows: ButtonRow[] = [
  {
    buttons: [
      {
        action: 'parentheses',
        value: '(',
        ariaLabel: 'Open parenthesis',
        className: 'btn btn-function',
      },
      {
        action: 'parentheses',
        value: ')',
        ariaLabel: 'Close parenthesis',
        className: 'btn btn-function',
      },
      {
        action: 'memory',
        value: 'mc',
        ariaLabel: 'Memory clear',
        className: 'btn btn-function',
      },
      {
        action: 'memory',
        value: 'm+',
        ariaLabel: 'Memory add',
        className: 'btn btn-function',
      },
      {
        action: 'memory',
        value: 'm-',
        ariaLabel: 'Memory subtract',
        className: 'btn btn-function',
      },
      {
        action: 'memory',
        value: 'mr',
        ariaLabel: 'Memory recall',
        className: 'btn btn-function',
      },
      {
        action: 'clear',
        value: 'AC',
        ariaLabel: 'All clear',
        className: 'btn btn-function',
      },
      {
        action: 'toggle-sign',
        value: '+/-',
        ariaLabel: 'Toggle positive negative',
        className: 'btn btn-function',
      },
      {
        action: 'percentage',
        value: '%',
        ariaLabel: 'Percentage',
        className: 'btn btn-function',
      },
      {
        action: 'operator',
        value: '÷',
        ariaLabel: 'Division',
        className: 'btn btn-operator',
      },
    ],
  },
  {
    buttons: [
      {
        action: 'second-function',
        value: '2nd',
        ariaLabel: 'Second function',
        className: 'btn btn-function',
      },
      {
        action: 'power',
        value: 'x²',
        ariaLabel: 'X squared',
        className: 'btn btn-function',
      },
      {
        action: 'power',
        value: 'x³',
        ariaLabel: 'X cubed',
        className: 'btn btn-function',
      },
      {
        action: 'power',
        value: 'xʸ',
        ariaLabel: 'X to the power of Y',
        className: 'btn btn-function',
      },
      {
        action: 'exponential',
        value: 'eˣ',
        ariaLabel: 'E to the power of X',
        className: 'btn btn-function',
      },
      {
        action: 'exponential',
        value: '10ˣ',
        ariaLabel: '10 to the power of X',
        className: 'btn btn-function',
      },
      {
        action: 'number',
        value: '7',
        ariaLabel: 'Number 7',
        className: 'btn btn-number',
      },
      {
        action: 'number',
        value: '8',
        ariaLabel: 'Number 8',
        className: 'btn btn-number',
      },
      {
        action: 'number',
        value: '9',
        ariaLabel: 'Number 9',
        className: 'btn btn-number',
      },
      {
        action: 'operator',
        value: '×',
        ariaLabel: 'Multiplication',
        className: 'btn btn-operator',
      },
    ],
  },
  {
    buttons: [
      {
        action: 'reciprocal',
        value: '1/x',
        ariaLabel: 'Reciprocal',
        className: 'btn btn-function',
      },
      {
        action: 'root',
        value: '²√x',
        ariaLabel: 'Square root',
        className: 'btn btn-function',
      },
      {
        action: 'root',
        value: '³√x',
        ariaLabel: 'Cube root',
        className: 'btn btn-function',
      },
      {
        action: 'root',
        value: 'ʸ√x',
        ariaLabel: 'Y-th root of X',
        className: 'btn btn-function',
      },
      {
        action: 'logarithm',
        value: 'ln',
        ariaLabel: 'Natural logarithm',
        className: 'btn btn-function',
      },
      {
        action: 'logarithm',
        value: 'log₁₀',
        ariaLabel: 'Logarithm base 10',
        className: 'btn btn-function',
      },
      {
        action: 'number',
        value: '4',
        ariaLabel: 'Number 4',
        className: 'btn btn-number',
      },
      {
        action: 'number',
        value: '5',
        ariaLabel: 'Number 5',
        className: 'btn btn-number',
      },
      {
        action: 'number',
        value: '6',
        ariaLabel: 'Number 6',
        className: 'btn btn-number',
      },
      {
        action: 'operator',
        value: '-',
        ariaLabel: 'Subtraction',
        className: 'btn btn-operator',
      },
    ],
  },
  {
    buttons: [
      {
        action: 'factorial',
        value: 'x!',
        ariaLabel: 'Factorial',
        className: 'btn btn-function',
      },
      {
        action: 'trigonometry',
        value: 'sin',
        ariaLabel: 'Sine',
        className: 'btn btn-function',
      },
      {
        action: 'trigonometry',
        value: 'cos',
        ariaLabel: 'Cosine',
        className: 'btn btn-function',
      },
      {
        action: 'trigonometry',
        value: 'tan',
        ariaLabel: 'Tangent',
        className: 'btn btn-function',
      },
      {
        action: 'constant',
        value: 'e',
        ariaLabel: "Euler's number",
        className: 'btn btn-function',
      },
      {
        action: 'exponent',
        value: 'EE',
        ariaLabel: 'Enter exponent',
        className: 'btn btn-function',
      },
      {
        action: 'number',
        value: '1',
        ariaLabel: 'Number 1',
        className: 'btn btn-number',
      },
      {
        action: 'number',
        value: '2',
        ariaLabel: 'Number 2',
        className: 'btn btn-number',
      },
      {
        action: 'number',
        value: '3',
        ariaLabel: 'Number 3',
        className: 'btn btn-number',
      },
      {
        action: 'operator',
        value: '+',
        ariaLabel: 'Addition',
        className: 'btn btn-operator',
      },
    ],
  },
  {
    buttons: [
      {
        action: 'mode',
        value: 'Rad',
        ariaLabel: 'Radians mode',
        className: 'btn btn-function',
      },
      {
        action: 'hyperbolic',
        value: 'sinh',
        ariaLabel: 'Hyperbolic sine',
        className: 'btn btn-function',
      },
      {
        action: 'hyperbolic',
        value: 'cosh',
        ariaLabel: 'Hyperbolic cosine',
        className: 'btn btn-function',
      },
      {
        action: 'hyperbolic',
        value: 'tanh',
        ariaLabel: 'Hyperbolic tangent',
        className: 'btn btn-function',
      },
      {
        action: 'constant',
        value: 'π',
        ariaLabel: 'Pi constant',
        className: 'btn btn-function',
      },
      {
        action: 'random',
        value: 'Rand',
        ariaLabel: 'Random number',
        className: 'btn btn-function',
      },
      {
        action: 'number',
        value: '0',
        ariaLabel: 'Number 0',
        className: 'btn btn-number btn-zero',
      },
      {
        action: 'decimal',
        value: '.',
        ariaLabel: 'Decimal point',
        className: 'btn btn-number',
      },
      {
        action: 'equals',
        value: '=',
        ariaLabel: 'Equals',
        className: 'btn btn-operator btn-equals',
      },
    ],
  },
];
