"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

/**
 * A minimal error boundary, used to keep one failed subtree from taking the
 * page with it.
 *
 * This exists for the listing blocks in VenueContent: a block sits mid-article,
 * and a listing whose request throws should leave the surrounding prose intact.
 * Suspense already contains a throw during a server render — React does not run
 * error boundaries there — so this is what covers the client, where React
 * retries a failed boundary and a second failure would otherwise escape to the
 * route's error page.
 */
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
