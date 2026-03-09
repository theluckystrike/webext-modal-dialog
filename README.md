[![CI](https://github.com/theluckystrike/webext-modal-dialog/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/webext-modal-dialog/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Last Commit](https://img.shields.io/github/last-commit/theluckystrike/webext-modal-dialog)](https://github.com/theluckystrike/webext-modal-dialog/commits/main)

# webext-modal-dialog

Beautiful modal dialogs for Chrome extension UIs. Lightweight, TypeScript-ready, and designed for Manifest V3 extensions.

## Description

`webext-modal-dialog` provides a simple yet powerful API to create modal dialogs, confirmation prompts, alerts, and loading overlays directly in your Chrome extension's popup, options page, or content scripts. No external dependencies—just import and use.

## Features

- 🎨 **Beautiful defaults** — Dark theme with rounded corners, smooth animations
- ⚡ **Lightweight** — Zero dependencies, ~2KB minified
- 🔧 **Fully customizable** — Custom titles, content, buttons, widths, and callbacks
- 📦 **TypeScript** — First-class TypeScript support with type definitions
- ✅ **Promise-based** — Clean async/await API for confirm dialogs

## Installation

```bash
npm install webext-modal-dialog
```

Or using pnpm:

```bash
pnpm add webext-modal-dialog
```

Or using yarn:

```bash
yarn add webext-modal-dialog
```

## Quick Start

```typescript
import { Modal } from 'webext-modal-dialog';

// Confirmation dialog (returns Promise<boolean>)
const confirmed = await Modal.confirm('Delete this item?', 'Confirm');
if (confirmed) {
    // User clicked "Yes"
}

// Alert dialog
await Modal.alert('Operation complete', 'Success');

// Loading overlay with spinner
const loader = Modal.loading('Processing...');
// Do async work...
loader.dismiss();
```

## Usage Examples

### Confirmation Prompt

```typescript
const userConfirmed = await Modal.confirm(
    'Are you sure you want to delete this item? This action cannot be undone.',
    'Confirm Deletion'
);

if (userConfirmed) {
    // Proceed with deletion
    await deleteItem();
}
```

### Custom Dialog with Callbacks

```typescript
Modal.show({
    title: 'Edit Profile',
    content: '<p>Update your profile information below:</p><input type="text" id="username" value="john" />',
    confirmText: 'Save',
    cancelText: 'Cancel',
    width: '450px',
    closable: true,
    onConfirm: () => {
        const username = document.getElementById('username')?.value;
        saveProfile(username);
    },
    onCancel: () => {
        console.log('User cancelled');
    }
});
```

### Loading Overlay

```typescript
const loader = Modal.loading('Uploading file...');

try {
    await uploadFile(fileData);
    await Modal.alert('File uploaded successfully!', 'Done');
} catch (error) {
    await Modal.alert('Upload failed. Please try again.', 'Error');
} finally {
    loader.dismiss();
}
```

### Custom Content Modal

```typescript
Modal.show({
    title: 'Custom Modal',
    content: `
        <div style="text-align: center">
            <img src="icon.png" alt="Icon" style="width: 64px; height: 64px; margin-bottom: 12px" />
            <p>This modal supports custom HTML content.</p>
            <button onclick="alert('clicked!')">Click Me</button>
        </div>
    `,
    confirmText: 'Got it!',
    width: '350px'
});
```

## API Reference

### `Modal.show(options: ModalOptions): HTMLElement`

Display a custom modal with full control over appearance and behavior.

```typescript
Modal.show({
    title: 'Delete Item',
    content: 'Are you sure you want to delete this item?',
    confirmText: 'Delete',
    cancelText: 'Cancel',
    width: '400px',
    closable: true,
    onConfirm: () => { /* handle confirm */ },
    onCancel: () => { /* handle cancel */ }
});
```

#### ModalOptions Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | `string` | - | Optional modal title |
| `content` | `string` | - | Modal body content (supports HTML) |
| `confirmText` | `string` | `'OK'` | Text for confirm button |
| `cancelText` | `string` | - | Text for cancel button (omits button if not provided) |
| `width` | `string` | `'400px'` | Modal width |
| `closable` | `boolean` | `true` | Allow closing by clicking overlay |
| `onConfirm` | `() => void` | - | Callback when confirm is clicked |
| `onCancel` | `() => void` | - | Callback when cancel is clicked or overlay is clicked |

**Returns:** `HTMLElement` — The overlay element for advanced manipulation.

---

### `Modal.confirm(message: string, title?: string): Promise<boolean>`

Display a Yes/No confirmation dialog. Resolves to `true` for Yes, `false` for No.

```typescript
const userConfirmed = await Modal.confirm('Are you sure?', 'Confirm');
if (userConfirmed) {
    // proceed with action
}
```

---

### `Modal.alert(message: string, title?: string): Promise<void>`

Display a simple alert dialog with a single OK button.

```typescript
await Modal.alert('File saved successfully', 'Done');
```

---

### `Modal.loading(message?: string): { dismiss: () => void }`

Display a loading overlay with spinner. Call the returned `dismiss()` function to remove it.

```typescript
const loader = Modal.loading('Uploading file...');

// Do async work...

loader.dismiss();
```

---

## Styling

The modal uses a dark theme with the following defaults:

| Element | Value |
|---------|-------|
| Background | `#1F2937` (dark gray) |
| Text | `#F9FAFB` (off-white) |
| Primary button | `#3B82F6` (blue) |
| Border radius | `12px` |
| Overlay | `rgba(0,0,0,0.5)` |

To customize, manipulate the returned element directly:

```typescript
const overlay = Modal.show({ content: 'Custom modal' });
const dialog = overlay.querySelector('div');
// Apply custom styles to dialog
```

## Project Structure

```
webext-modal-dialog/
├── src/
│   ├── index.ts          # Main exports (Modal class, ModalOptions)
│   ├── modal.ts          # Modal implementation
│   └── modal.test.ts     # Unit tests
├── package.json          # Package configuration
├── tsconfig.json         # TypeScript configuration
├── LICENSE               # MIT License
└── README.md             # This file
```

## Browser Support

Works in all modern browsers that support Chrome extensions. Requires Manifest V3.

## License

MIT License — see [LICENSE](LICENSE) for details.

---

Built at [zovo.one](https://zovo.one) by [theluckystrike](https://github.com/theluckystrike)
