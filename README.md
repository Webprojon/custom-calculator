# 🧮 Custom Calculator

A powerful, feature-rich calculator built with pure JavaScript/TypeScript, implementing the Command pattern and Snapshot pattern for advanced functionality.

## ✨ Features

### 🔢 **Mathematical Operations**

- **Basic Operations**: Addition, Subtraction, Multiplication, Division
- **Advanced Math**: Power (x^y), Square, Cube, Square Root, Cube Root, Nth Root
- **Special Functions**: Factorial, Percentage, Reciprocal (1/x), Sign Toggle
- **Trigonometry**: Sin, Cos, Tan, Sinh, Cosh, Tanh
- **Logarithms**: Natural Log (ln), Base-10 Log (log10)
- **Random**: Generate random numbers

### 💾 **Memory Functions**

- **MC**: Memory Clear
- **M+**: Memory Add
- **M-**: Memory Subtract
- **MR**: Memory Recall

### ⏪ **Undo/Redo System**

- **Undo**: Ctrl+Z (restore previous state)
- **Redo**: Ctrl+Y or Ctrl+Shift+Z (restore next state)
- **History Management**: Automatic state saving before each operation

### 🎨 **Theme Management**

- **Light Theme**: Clean, modern interface
- **Dark Theme**: Easy on the eyes
- **Theme Switcher**: Toggle between themes

### ⌨️ **Keyboard Support**

- **Numbers**: 0-9
- **Operators**: +, -, \*, /, =
- **Functions**: Enter, Escape, Backspace
- **Memory**: M, C, R keys
- **Undo/Redo**: Ctrl+Z, Ctrl+Y, Ctrl+Shift+Z

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Webprojon/custom-calculator.git
   cd custom-calculator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

   The application will open in your browser at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   Output files will be generated in the `dist/` folder:
   - `index.html` - Main HTML file
   - `main.js` - Bundled JavaScript (includes CSS)

## 📁 Project Structure

```
custom-calculator/
├── src/
│   ├── commands/           # Command pattern implementations
│   │   ├── add.ts         # Addition command
│   │   ├── subtract.ts    # Subtraction command
│   │   ├── multiply.ts    # Multiplication command
│   │   ├── divide.ts      # Division command
│   │   ├── power.ts       # Power operations
│   │   ├── root.ts        # Root operations
│   │   ├── factorial.ts   # Factorial command
│   │   ├── trigonometry.ts # Trig functions
│   │   ├── logarithm.ts   # Logarithm functions
│   │   ├── memory.ts      # Memory operations
│   │   ├── utility.ts     # Utility functions
│   │   ├── number.ts      # Number input
│   │   ├── operator.ts    # Operator handling
│   │   └── undo.ts        # Undo/Redo commands
│   ├── core/              # Core application logic
│   │   ├── calculator.ts  # Main calculator class
│   │   ├── invoker.ts     # Command invoker
│   │   ├── receiver.ts    # Calculator state receiver
│   │   └── historyManager.ts # History management
│   ├── ui/                # User interface
│   │   ├── calculatorButtonsUI.ts # Button UI
│   │   └── themeSwitcherUI.ts     # Theme switcher
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   ├── constant/          # Constants and configuration
│   │   └── data.ts
│   ├── css/               # Stylesheets
│   │   ├── main.css       # Main styles
│   │   ├── base.css       # Base styles
│   │   └── components/    # Component styles
│   ├── tests/             # Unit tests
│   │   ├── add.test.ts
│   │   ├── subtract.test.ts
│   │   ├── multiply.test.ts
│   │   ├── divide.test.ts
│   │   ├── factorial.test.ts
│   │   ├── power.test.ts
│   │   ├── root.test.ts
│   │   ├── trigonometry.test.ts
│   │   ├── logarithm.test.ts
│   │   ├── memory.test.ts
│   │   ├── utility.test.ts
│   │   ├── number.test.ts
│   │   ├── operator.test.ts
│   │   ├── calculator.test.ts
│   │   ├── receiver.test.ts
│   │   ├── invoker.test.ts
│   │   ├── undo.test.ts
│   │   └── themeSwitcher.test.ts
│   ├── index.html         # Main HTML file
│   └── index.ts           # Application entry point
├── dist/                  # Build output
├── package.json           # Dependencies and scripts
├── webpack.config.cjs     # Webpack configuration
├── tsconfig.json          # TypeScript configuration
├── jest.config.js         # Jest test configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # This file
```

## 🧪 Testing

### Run All Tests

```bash
npm test
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Run Tests with Coverage

```bash
npm run test:coverage
```

### Test Categories

- **Mathematical Operations**: Addition, subtraction, multiplication, division, power, roots, factorial
- **Trigonometry**: Sin, cos, tan, sinh, cosh, tanh functions
- **Logarithms**: Natural log and base-10 log
- **Memory Operations**: MC, M+, M-, MR functionality
- **Utility Functions**: Percentage, reciprocal, sign toggle
- **Number Input**: Number entry and display
- **Operator Logic**: Operation chaining and equals
- **Core Components**: Calculator, invoker, receiver classes
- **Undo/Redo**: History management and state restoration
- **Theme Management**: Theme switching functionality

## 🛠️ Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

### Code Quality

- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting
- **TypeScript**: Type safety and better development experience

## 🎯 Key Features Explained

### Command Pattern

The calculator uses the Command pattern to handle all operations, making it easy to add new features and maintain the codebase.

### Snapshot Pattern

Undo/Redo functionality is implemented using the Snapshot pattern, allowing users to restore previous calculator states.

### Custom Math Implementation

All mathematical operations are implemented from scratch without using the built-in `Math` object or external libraries, ensuring full control and custom error handling.

### Error Handling

Comprehensive error handling for edge cases like division by zero, overflow, and invalid inputs.