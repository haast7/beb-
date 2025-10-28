'use client';

import { useState } from 'react';

export function useLeadForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState('');
  const [initialMessage, setInitialMessage] = useState('');

  const openForm = (formSource: string, message?: string) => {
    setSource(formSource);
    setInitialMessage(message || '');
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
    setSource('');
    setInitialMessage('');
  };

  return {
    isOpen,
    source,
    initialMessage,
    openForm,
    closeForm
  };
}
