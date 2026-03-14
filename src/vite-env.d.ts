/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSUBMIT_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
