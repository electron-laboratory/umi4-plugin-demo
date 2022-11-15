import 'umi/typings';
import { BrowserWindow } from 'electron';

declare global {
  export function getBrowserWindowRuntime(): BrowserWindow;
  const $api: any;
}
