'use client';

import { useEffect, useState } from 'react';

type VisitorCounterResponse = {
  count?: number;
};

type VisitorStatsState = {
  totalVisitors: number | null;
  visitorFrom: string;
  visitedAt: string;
};

const counterNamespace = 'pradeep-ramola';

const timezonePlaces: Record<string, string> = {
  'America/New_York': 'New York, United States',
  'America/Chicago': 'Chicago, United States',
  'America/Denver': 'Denver, United States',
  'America/Los_Angeles': 'Los Angeles, United States',
  'America/Toronto': 'Toronto, Canada',
  'Europe/London': 'London, United Kingdom',
  'Europe/Paris': 'Paris, France',
  'Europe/Berlin': 'Berlin, Germany',
  'Asia/Kolkata': 'India',
  'Asia/Tokyo': 'Tokyo, Japan',
  'Asia/Dubai': 'Dubai, United Arab Emirates',
  'Australia/Sydney': 'Sydney, Australia',
};

type VisitorStatsProps = {
  className?: string;
};

function formatTime(value?: string) {
  if (!value) {
    return 'updating';
  }

  return new Intl.DateTimeFormat(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(value));
}

function getVisitorPlace(timezone: string) {
  if (timezonePlaces[timezone]) {
    return timezonePlaces[timezone];
  }

  const [region, place] = timezone.split('/');

  if (region && place) {
    return `${place.replace(/_/g, ' ')}, ${region}`;
  }

  return 'Place, Country';
}

export default function VisitorStats({ className = '' }: VisitorStatsProps) {
  const [stats, setStats] = useState<VisitorStatsState | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function recordVisit() {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const visitedAt = new Date().toISOString();
      const visitorFrom = getVisitorPlace(timezone);

      setStats({
        totalVisitors: null,
        visitorFrom,
        visitedAt,
      });

      const response = await fetch(`https://api.counterapi.dev/v1/${counterNamespace}/portfolio/up`, {
        method: 'GET',
        signal: controller.signal,
      });

      if (!response.ok) {
        return;
      }

      const data = (await response.json()) as VisitorCounterResponse;

      setStats({
        totalVisitors: typeof data.count === 'number' ? data.count : null,
        visitorFrom,
        visitedAt,
      });
    }

    recordVisit().catch(() => {});

    return () => controller.abort();
  }, []);

  const visitorCount =
    typeof stats?.totalVisitors === 'number' ? new Intl.NumberFormat().format(stats.totalVisitors) : '--';
  const visitorFrom = stats?.visitorFrom ?? 'checking';
  const visitedAt = formatTime(stats?.visitedAt);

  return (
    <div className={`visitor-stats ${className}`.trim()} aria-label="Site visitor stats">
      <div className="visitor-stat">
        <span>Visitors</span>
        <strong>{visitorCount}</strong>
      </div>
      <div className="visitor-stat visitor-stat-wide">
        <span>Visitor from</span>
        <strong>{visitorFrom}</strong>
        <small>{visitedAt}</small>
      </div>
    </div>
  );
}
