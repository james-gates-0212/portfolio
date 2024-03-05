'use client';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

export default function ReactTooltip() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <Tooltip anchorSelect=".title-tooltip" place="bottom" />;
}
