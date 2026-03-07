import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { Modal } from './index';

describe('Modal', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should show a basic modal', () => {
    const overlay = Modal.show({ title: 'Test Title', content: 'Test Content' });
    expect(document.body.contains(overlay)).toBe(true);
    expect(overlay.innerHTML).toContain('Test Title');
    expect(overlay.innerHTML).toContain('Test Content');
  });

  it('should handle confirm button click', () => {
    const onConfirm = vi.fn();
    const overlay = Modal.show({ content: 'Test', onConfirm });
    const btn = overlay.querySelector('.modal-confirm') as HTMLButtonElement;
    btn.click();
    expect(onConfirm).toHaveBeenCalled();
    expect(document.body.contains(overlay)).toBe(false);
  });

  it('should handle cancel button click', () => {
    const onCancel = vi.fn();
    const overlay = Modal.show({ content: 'Test', cancelText: 'Cancel', onCancel });
    const btn = overlay.querySelector('.modal-cancel') as HTMLButtonElement;
    btn.click();
    expect(onCancel).toHaveBeenCalled();
    expect(document.body.contains(overlay)).toBe(false);
  });

  it('should handle overlay click for closable modal', () => {
    const onCancel = vi.fn();
    const overlay = Modal.show({ content: 'Test', closable: true, onCancel });
    overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(onCancel).toHaveBeenCalled();
    expect(document.body.contains(overlay)).toBe(false);
  });

  it('should NOT handle overlay click for non-closable modal', () => {
    const onCancel = vi.fn();
    const overlay = Modal.show({ content: 'Test', closable: false, onCancel });
    overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(onCancel).not.toHaveBeenCalled();
    expect(document.body.contains(overlay)).toBe(true);
  });

  it('should resolve confirm promise with true on confirm', async () => {
    const promise = Modal.confirm('Are you sure?');
    const overlay = document.body.lastElementChild as HTMLElement;
    const btn = overlay.querySelector('.modal-confirm') as HTMLButtonElement;
    btn.click();
    const result = await promise;
    expect(result).toBe(true);
  });

  it('should resolve confirm promise with false on cancel', async () => {
    const promise = Modal.confirm('Are you sure?');
    const overlay = document.body.lastElementChild as HTMLElement;
    const btn = overlay.querySelector('.modal-cancel') as HTMLButtonElement;
    btn.click();
    const result = await promise;
    expect(result).toBe(false);
  });

  it('should resolve alert promise on confirm', async () => {
    const promise = Modal.alert('Alert message');
    const overlay = document.body.lastElementChild as HTMLElement;
    const btn = overlay.querySelector('.modal-confirm') as HTMLButtonElement;
    btn.click();
    await expect(promise).resolves.toBeUndefined();
  });

  it('should show loading and dismiss it', () => {
    const loader = Modal.loading('Loading...');
    const overlay = document.body.lastElementChild as HTMLElement;
    expect(overlay.innerHTML).toContain('Loading...');
    loader.dismiss();
    expect(document.body.contains(overlay)).toBe(false);
  });

  it('should apply custom width', () => {
    const overlay = Modal.show({ content: 'Test', width: '500px' });
    const dialog = overlay.firstElementChild as HTMLElement;
    expect(dialog.style.maxWidth).toBe('500px');
  });

  it('should handle modal without title', () => {
    const overlay = Modal.show({ content: 'Only content' });
    expect(overlay.querySelector('h3')).toBeNull();
  });
});
