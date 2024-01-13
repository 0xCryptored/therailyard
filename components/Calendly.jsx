'use client'
import React, { useEffect } from 'react';

const Calendly = () => {
  
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    
    // Add script to the body
    document.body.appendChild(script);

    // Clean up: remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/therailyardwi/per-hour?hide_event_type_details=1&hide_gdpr_banner=1" style={{ minWidth: '320px', height: '700px' }}>
      {/* Fallback content or alternative display when script is not loaded */}
    </div>
  );
};

export default Calendly;
