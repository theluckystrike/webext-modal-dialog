/**
 * Modal — Beautiful modal dialogs for extension UIs
 */
export interface ModalOptions { title?: string; content: string; confirmText?: string; cancelText?: string; width?: string; closable?: boolean; onConfirm?: () => void; onCancel?: () => void; }

export class Modal {
    /** Show a custom modal */
    static show(options: ModalOptions): HTMLElement {
        const { title, content, confirmText = 'OK', cancelText, width = '400px', closable = true, onConfirm, onCancel } = options;
        const overlay = document.createElement('div');
        Object.assign(overlay.style, { position: 'fixed', inset: '0', background: 'rgba(0,0,0,0.5)', zIndex: '999999', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeIn 0.2s ease' });
        const dialog = document.createElement('div');
        Object.assign(dialog.style, { background: '#1F2937', color: '#F9FAFB', borderRadius: '12px', padding: '24px', maxWidth: width, width: '90%', boxShadow: '0 8px 32px rgba(0,0,0,0.4)', fontFamily: '-apple-system,sans-serif' });
        const btns = cancelText ? `<button class="modal-cancel" style="padding:8px 16px;border:1px solid #4B5563;background:transparent;color:#D1D5DB;border-radius:6px;cursor:pointer">${cancelText}</button>` : '';
        dialog.innerHTML = `${title ? `<h3 style="margin:0 0 12px;font-size:18px">${title}</h3>` : ''}<div style="margin-bottom:20px;color:#D1D5DB;font-size:14px;line-height:1.5">${content}</div><div style="display:flex;gap:8px;justify-content:flex-end">${btns}<button class="modal-confirm" style="padding:8px 16px;background:#3B82F6;color:white;border:none;border-radius:6px;cursor:pointer;font-weight:500">${confirmText}</button></div>`;
        overlay.appendChild(dialog);
        dialog.querySelector('.modal-confirm')?.addEventListener('click', () => { overlay.remove(); onConfirm?.(); });
        dialog.querySelector('.modal-cancel')?.addEventListener('click', () => { overlay.remove(); onCancel?.(); });
        if (closable) overlay.addEventListener('click', (e) => { if (e.target === overlay) { overlay.remove(); onCancel?.(); } });
        document.body.appendChild(overlay);
        return overlay;
    }

    /** Confirm dialog (returns promise) */
    static confirm(message: string, title?: string): Promise<boolean> {
        return new Promise((resolve) => { this.show({ title, content: message, confirmText: 'Yes', cancelText: 'No', onConfirm: () => resolve(true), onCancel: () => resolve(false) }); });
    }

    /** Alert dialog */
    static alert(message: string, title?: string): Promise<void> {
        return new Promise((resolve) => { this.show({ title, content: message, onConfirm: () => resolve() }); });
    }

    /** Loading overlay */
    static loading(message: string = 'Loading...'): { dismiss: () => void } {
        const overlay = this.show({ content: `<div style="text-align:center"><div style="border:3px solid #374151;border-top-color:#3B82F6;border-radius:50%;width:32px;height:32px;animation:spin 0.8s linear infinite;margin:0 auto 12px"></div>${message}</div>`, closable: false, confirmText: '' });
        const style = document.createElement('style');
        style.textContent = '@keyframes spin{to{transform:rotate(360deg)}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}';
        overlay.appendChild(style);
        return { dismiss: () => overlay.remove() };
    }
}
