import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

const { enviromentVariablesSupport } = ({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
};
export default defineConfig({
  plugins: [react()],
  enviromentVariablesSupport,
});
