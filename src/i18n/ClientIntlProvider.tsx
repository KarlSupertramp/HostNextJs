'use client';

import {NextIntlClientProvider} from 'next-intl';
import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {defaultLocale, locales, type AppLocale} from './config';

type IntlContextValue = {
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
};

const IntlContext = createContext<IntlContextValue | null>(null);

async function loadMessages(locale: AppLocale) {
  return (await import(`../locales/${locale}.json`)).default;
}

export function useAppLocale() {
  const ctx = useContext(IntlContext);
  if (!ctx) throw new Error('useAppLocale must be used inside ClientIntlProvider');
  return ctx;
}

export default function ClientIntlProvider({
  children,
  initialMessages
}: {
  children: React.ReactNode;
  initialMessages: any;
}) {
  const [locale, setLocaleState] = useState<AppLocale>(defaultLocale);
  const [messages, setMessages] = useState<any>(initialMessages);

  // initialize from localStorage once
  useEffect(() => {
    const stored = localStorage.getItem('locale') as AppLocale | null;
    if (stored && (locales as readonly string[]).includes(stored)) {
      setLocaleState(stored);
      loadMessages(stored).then(setMessages).catch(() => {});
    }
  }, []);

  const setLocale = async (next: AppLocale) => {
    if (!(locales as readonly string[]).includes(next)) return;

    localStorage.setItem('locale', next);
    setLocaleState(next);

    try {
      const nextMessages = await loadMessages(next);
      setMessages(nextMessages);
      document.documentElement.lang = next;
    } catch {
      // keep old messages if loading fails
    }
  };

  const ctxValue = useMemo(() => ({locale, setLocale}), [locale]);

  return (
    <IntlContext.Provider value={ctxValue}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </IntlContext.Provider>
  );
}