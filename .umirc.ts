import { defineConfig } from 'umi';
export default defineConfig({
  npmClient: 'pnpm',
  plugins: ['@umijs/plugin-electron'],
  electron: {},
});
