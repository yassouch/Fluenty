import { useId } from 'react';

interface FluentyMarkProps {
  variant?: 'color' | 'mono';
  className?: string;
}

export function FluentyMark({ variant = 'color', className = 'w-12 h-12' }: FluentyMarkProps) {
  const gradId = useId();

  if (variant === 'mono') {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <rect x="19" y="15" width="9" height="34" rx="4.5" fill="currentColor" />
        <rect x="19" y="15" width="27" height="9" rx="4.5" fill="currentColor" />
        <rect x="19" y="30" width="19" height="9" rx="4.5" fill="currentColor" />
        <circle cx="47" cy="45" r="5" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0A1F44" />
          <stop offset="1" stopColor="#1E6BFF" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${gradId})`} />
      <rect x="19" y="15" width="9" height="34" rx="4.5" fill="#FFFFFF" />
      <rect x="19" y="15" width="27" height="9" rx="4.5" fill="#FFFFFF" />
      <rect x="19" y="30" width="19" height="9" rx="4.5" fill="#FFFFFF" />
      <circle cx="47" cy="45" r="5" fill="#22D3EE" />
    </svg>
  );
}

interface FluentyLockupProps {
  surface?: 'light' | 'navy' | 'blue' | 'ice';
  size?: 'md' | 'lg';
}

export function FluentyLockup({ surface = 'light', size = 'md' }: FluentyLockupProps) {
  const isMonoMark = surface === 'blue';
  const markSize = size === 'lg' ? 'w-10 h-10 sm:w-14 sm:h-14' : 'w-9 h-9 sm:w-11 sm:h-11';
  const textSize = size === 'lg' ? 'text-xl sm:text-3xl md:text-4xl' : 'text-lg sm:text-2xl';

  const tldColor =
    surface === 'navy'
      ? 'text-[#5CC8FF]'
      : surface === 'blue'
      ? 'text-white/80'
      : 'text-[#1E6BFF]';

  const textColor = surface === 'navy' || surface === 'blue' ? 'text-white' : 'text-[#0A1F44]';

  return (
    <div className="inline-flex items-center gap-2.5 sm:gap-3.5">
      <FluentyMark
        variant={isMonoMark ? 'mono' : 'color'}
        className={`${markSize} shrink-0 ${isMonoMark ? 'text-white' : ''}`}
      />
      <span
        className={`font-display font-extrabold tracking-tight leading-none whitespace-nowrap ${textSize} ${textColor}`}
      >
        Fluenty<span className={`font-normal ${tldColor}`}>.services</span>
      </span>
    </div>
  );
}
