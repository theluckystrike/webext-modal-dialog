[![CI](https://github.com/theluckystrike/webext-modal-dialog/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/webext-modal-dialog/actions)
[![npm](https://img.shields.io/npm/v/webext-modal-dialog)](https://www.npmjs.com/package/webext-modal-dialog)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)

# WEBEXT-MODAL-DIALOG

Beautiful modal dialogs for Chrome extension UIs. Built by theluckystrike.

## INSTALLATION

```bash
npm i webext-modal-dialog
```

## QUICK START

```typescript
import { Modal } from 'webext-modal-dialog';

// Confirm dialog
const confirmed = await Modal.confirm('Delete this item?', 'Confirm');

// Alert dialog
await Modal.alert('Operation complete', 'Success');

// Loading overlay
const loader = Modal.loading('Processing...');
// Later: loader.dismiss();
```

## API REFERENCE

### Modal.show(options: ModalOptions)

Display a custom modal with full control over appearance and behavior.

```typescript
Modal.show({
    title: 'Delete Item',
    content: 'Are you sure you want to delete this item? This action cannot be undone.',
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
| title | string | - | Optional modal title |
| content | string | - | Modal body content (supports HTML) |
| confirmText | string | 'OK' | Text for confirm button |
| cancelText | string | - | Text for cancel button (omits button if not provided) |
| width | string | '400px' | Modal width |
| closable | boolean | true | Allow closing by clicking overlay |
| onConfirm | () => void | - | Callback when confirm is clicked |
| onCancel | () => void | - | Callback when cancel is clicked or overlay is clicked |

Returns: `HTMLElement` - The overlay element for advanced manipulation.

### Modal.confirm(message: string, title?: string): Promise<boolean>

Display a Yes/No confirmation dialog. Resolves to `true` for Yes, `false` for No.

```typescript
const userConfirmed = await Modal.confirm('Are you sure?', 'Confirm');
if (userConfirmed) {
    // proceed with action
}
```

### Modal.alert(message: string, title?: string): Promise<void>

Display a simple alert dialog with a single OK button.

```typescript
await Modal.alert('File saved successfully', 'Done');
```

### Modal.loading(message?: string): { dismiss: () => void }

Display a loading overlay with spinner. Call the returned `dismiss()` function to remove it.

```typescript
const loader = Modal.loading('Uploading file...');

// Do async work...

loader.dismiss();
```

## STYLING

The modal uses a dark theme with the following defaults:
- Background: #1F2937 (dark gray)
- Text: #F9FAFB (off-white)
- Primary button: #3B82F6 (blue)
- Border radius: 12px
- Overlay: rgba(0,0,0,0.5)

To customize, you can manipulate the returned element directly:

```typescript
const overlay = Modal.show({ content: 'Custom modal' });
const dialog = overlay.querySelector('div');
// Apply custom styles to dialog
```

## BROWSER SUPPORT

Works in all modern browsers that support Chrome extensions. Requires Manifest V3.

## ABOUT

This library is maintained by theluckystrike and is part of the zovo.one extension ecosystem.

## LICENSE

MIT License

## License

MIT

---

Built by [theluckystrike](https://github.com/theluckystrike) — [zovo.one](https://zovo.one)
