# webext-modal-dialog — Modal Dialogs for Extensions
> **Built by [Zovo](https://zovo.one)** | `npm i webext-modal-dialog`

Beautiful confirm/alert/custom modals with loading overlay and dark theme.

```typescript
import { Modal } from 'webext-modal-dialog';
const yes = await Modal.confirm('Delete this item?', 'Confirm');
const loader = Modal.loading('Processing...');
```
MIT License
