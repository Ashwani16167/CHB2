'use client';

import { useState, useEffect } from 'react';

type LoadingState = 'idle' | 'loading' | 'error' | 'success';

interface UseNetworkStateResult {
  state: LoadingState;
  isOnline: boolean;
  retryCount: number;
  maxRetries: number;
  setState: (state: LoadingState) => void;
  retry: () => void;
}

export function useNetworkState(maxRetries: number = 3): UseNetworkStateResult {
  const [state, setState] = useState<LoadingState>('idle');
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [retryCount, setRetryCount] = useState<number>(0);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Set initial online status
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const retry = () => {
    if (retryCount < maxRetries) {
      setRetryCount(c => c + 1);
      setState('loading');
    }
  };

  return {
    state,
    isOnline,
    retryCount,
    maxRetries,
    setState,
    retry,
  };
}