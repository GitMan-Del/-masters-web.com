'use client';

import { createContext, useContext } from 'react';

type Dict = Record<string, unknown>;

type Ctx = {
  locale: string;
  t: (path: string, vars?: Record<string, string | number>) => string;
};

const I18nCtx = createContext<Ctx>({
  locale: 'fr',
  t: (p) => p,
});

function getByPath(obj: any, path: string): string {
  return path.split('.').reduce((acc, key) => (acc?.[key] ?? ''), obj) as string;
}

export function I18nProvider({
  locale,
  dictionary,
  children,
}: {
  locale: string;
  dictionary: Dict;
  children: React.ReactNode;
}) {
  const t = (path: string, vars?: Record<string, string | number>) => {
    let str = getByPath(dictionary, path) || '';
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replace(new RegExp(`{${k}}`, 'g'), String(v));
      }
    }
    return str;
  };

  return <I18nCtx.Provider value={{ locale, t }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);
