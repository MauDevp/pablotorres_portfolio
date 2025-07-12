"use client";

import { useEffect } from 'react';
import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB } from 'web-vitals';

// Define types for metrics
type MetricType = 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB';

interface WebVitalsMetric {
  name: MetricType;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  id: string;
}

// Function to send analytics
function sendToAnalytics(metric: WebVitalsMetric) {
  // In production, replace this with your analytics service
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', {
      name: metric.name,
      value: metric.value.toFixed(2),
      rating: metric.rating,
    });
  }

  // Example: Send to Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_rating: metric.rating,
    });
  }
}

// Thresholds for metrics
const thresholds = {
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  FID: { good: 100, poor: 300 },
  INP: { good: 200, poor: 500 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
};

function getRating(name: MetricType, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = thresholds[name];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

export function WebVitals() {
  useEffect(() => {
    // Measure Core Web Vitals
    onCLS((metric) => {
      sendToAnalytics({
        name: 'CLS',
        value: metric.value,
        rating: getRating('CLS', metric.value),
        id: metric.id,
      });
    });

    onFCP((metric) => {
      sendToAnalytics({
        name: 'FCP',
        value: metric.value,
        rating: getRating('FCP', metric.value),
        id: metric.id,
      });
    });

    onFID((metric) => {
      sendToAnalytics({
        name: 'FID',
        value: metric.value,
        rating: getRating('FID', metric.value),
        id: metric.id,
      });
    });

    onINP((metric) => {
      sendToAnalytics({
        name: 'INP',
        value: metric.value,
        rating: getRating('INP', metric.value),
        id: metric.id,
      });
    });

    onLCP((metric) => {
      sendToAnalytics({
        name: 'LCP',
        value: metric.value,
        rating: getRating('LCP', metric.value),
        id: metric.id,
      });
    });

    onTTFB((metric) => {
      sendToAnalytics({
        name: 'TTFB',
        value: metric.value,
        rating: getRating('TTFB', metric.value),
        id: metric.id,
      });
    });
  }, []);

  return null;
}

// Export a function to manually report metrics
export function reportWebVitals(metric: any) {
  console.log(metric);
}
