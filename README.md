<div align="center">

# webext-modal-dialog

Modal and dialog components for Chrome extensions. Confirm, alert, prompt, custom modals, form modals, and loading overlays for MV3.

[![npm version](https://img.shields.io/npm/v/webext-modal-dialog)](https://www.npmjs.com/package/webext-modal-dialog)
[![npm downloads](https://img.shields.io/npm/dm/webext-modal-dialog)](https://www.npmjs.com/package/webext-modal-dialog)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/webext-modal-dialog)

[Installation](#installation) · [Quick Start](#quick-start) · [API](#api) · [License](#license)

</div>

---

## Features

- **Built-in dialogs** -- alert, confirm, and prompt out of the box
- **Custom modals** -- render any HTML content in a modal overlay
- **Form modals** -- collect structured input with validation
- **Loading overlays** -- full-screen loading indicators
- **Keyboard support** -- Escape to close, Enter to confirm
- **Customizable** -- theming, animations, and positioning options

## Installation

```bash
npm install webext-modal-dialog
```

<details>
<summary>Other package managers</summary>

```bash
pnpm add webext-modal-dialog
# or
yarn add webext-modal-dialog
```

</details>

## Quick Start

```typescript
import { Modal } from "webext-modal-dialog";

await Modal.alert("Operation complete!");
const confirmed = await Modal.confirm("Delete this item?");
const name = await Modal.prompt("Enter your name:");

const modal = Modal.create({
  content: "<h1>Custom Content</h1>",
  closeable: true,
});
```

## API

| Method | Description |
|--------|-------------|
| `alert(message)` | Show an alert dialog |
| `confirm(message)` | Show a confirm dialog, returns boolean |
| `prompt(message, default?)` | Show a prompt dialog, returns string or null |
| `create(options)` | Create a custom modal |
| `loading(message?)` | Show a loading overlay |
| `close()` | Close the current modal |



## Part of @zovo/webext

This package is part of the [@zovo/webext](https://github.com/theluckystrike) family -- typed, modular utilities for Chrome extension development:

| Package | Description |
|---------|-------------|
| [webext-storage](https://github.com/theluckystrike/webext-storage) | Typed storage with schema validation |
| [webext-messaging](https://github.com/theluckystrike/webext-messaging) | Type-safe message passing |
| [webext-tabs](https://github.com/theluckystrike/webext-tabs) | Tab query helpers |
| [webext-cookies](https://github.com/theluckystrike/webext-cookies) | Promise-based cookies API |
| [webext-i18n](https://github.com/theluckystrike/webext-i18n) | Internationalization toolkit |

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License -- see [LICENSE](LICENSE) for details.

---

<div align="center">

Built by [theluckystrike](https://github.com/theluckystrike) · [zovo.one](https://zovo.one)

</div>
