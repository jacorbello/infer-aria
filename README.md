# infer-aria

Intelligent ARIA attribute inference with build-time optimization and real-time development suggestions for web applications.

## Project Structure

The project is split into two main packages:

```
infer-aria/
├── packages/
│   ├── core/               # Shared core logic
│   │   ├── src/
│   │   │   ├── rules/     # ARIA inference rules
│   │   │   ├── analyzer/  # DOM analysis logic
│   │   │   └── utils/     # Shared utilities
│   │   └── package.json   
│   │
│   ├── build/             # Build plugin package
│   │   ├── src/
│   │   │   ├── plugins/   # Framework-specific plugins
│   │   │   └── transforms/# AST transformations
│   │   └── package.json
│   │
│   └── devtools/          # Development tools package
│       ├── src/
│       │   ├── extension/ # Browser extension
│       │   ├── cli/       # Command-line interface
│       │   └── ide/       # IDE integration
│       └── package.json
```

## Installation

```bash
# For build-time integration
npm install @infer-aria/build

# For development tools
npm install -D @infer-aria/devtools
```

## Usage

### Build Plugin Integration

```js
// next.config.js
const { withInferAria } = require('@infer-aria/build/next')

module.exports = withInferAria({
  inferAria: {
    // Automatically fix missing ARIA attributes
    autofix: true,
    
    // Throw errors for invalid ARIA usage
    strict: false,
    
    // Custom rules configuration
    rules: {
      'button-role': 'error',
      'nav-label': 'warn',
      'custom-rule': false
    },
    
    // Ignore patterns
    ignore: ['**/vendor/**'],
    
    // Custom ARIA inference rules
    customRules: {
      '.my-button': {
        role: 'button',
        required: ['aria-label']
      }
    }
  }
})
```

### Development Tools

```bash
# CLI usage
npx infer-aria check ./src
npx infer-aria watch ./src

# IDE Extension
# Install from VS Code marketplace or other IDE marketplaces
```

Browser Extension:
1. Install from Chrome Web Store/Firefox Add-ons
2. Open DevTools
3. Navigate to "Infer ARIA" panel
4. See real-time suggestions and explanations

## Features

### Build Plugin
- Static analysis and automatic fixing of ARIA attributes
- Framework-specific optimizations (React, Vue, Svelte)
- Custom rule configuration
- Integration with popular build tools (webpack, Vite, Next.js)

### Development Tools
- Real-time ARIA suggestions in browser DevTools
- Detailed explanations and best practices
- IDE integration for instant feedback
- CLI for CI/CD integration
- Visual overlay for accessibility issues

## Configuration

### Custom Rules

```js
// infer-aria.config.js
module.exports = {
  rules: {
    // Define custom element rules
    elements: {
      '.custom-dropdown': {
        role: 'combobox',
        required: ['aria-expanded', 'aria-controls'],
        children: {
          '.dropdown-list': {
            role: 'listbox'
          }
        }
      }
    },
    
    // Override default rules
    overrides: {
      'button': {
        role: false  // Disable automatic role inference
      }
    }
  }
}
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup and guidelines.

## License

MIT
