import React from 'react';

export function Survey() {
  return (
    <iframe 
      src="https://velocityx.notion.site/ebd/1ca1c529222f80bd84a4e2c3fa0da327" 
      width="100%" 
      height="600px" // Added 'px' for clarity, though browsers usually infer it
      frameBorder="0" 
      allowFullScreen
      title="Survey Form" // Added title for accessibility
      style={{ border: 'none', minHeight: '600px' }} // Added style for better embedding
    />
  );
} 