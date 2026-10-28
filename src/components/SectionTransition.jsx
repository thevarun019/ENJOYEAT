import React from 'react';

/**
 * SectionTransition:
 * Container wrapper with non-locking scroll-snap proximity.
 * Enables continuous, unified flow from Hero to Our Story.
 */
export default function SectionTransition({ children }) {
  return (
    <div
      style={{
        scrollSnapType: 'y proximity',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      {children}
    </div>
  );
}

