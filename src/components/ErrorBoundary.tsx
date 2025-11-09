'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex items-center justify-center p-4">
          <div className="text-center p-8 bg-red-50 dark:bg-red-900/20 rounded-xl max-w-lg">
            <h2 className="text-2xl font-hindi text-red-600 dark:text-red-400 mb-4">
              कुछ गलत हो गया
            </h2>
            <p className="font-hindi text-gray-800 dark:text-gray-200 mb-6">
              माफ़ कीजिये, एक तकनीकी समस्या आई है। कृपया पेज को रिफ्रेश करें।
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              पुनः प्रयास करें
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}