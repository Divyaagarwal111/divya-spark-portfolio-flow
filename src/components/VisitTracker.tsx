
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

// This component tracks visits to the portfolio
const VisitTracker = () => {
  const [isTracked, setIsTracked] = useState(false);

  useEffect(() => {
    // We only want to track the visit once per session
    if (isTracked) return;

    const trackVisit = async () => {
      try {
        // Get timestamp in a user-friendly format
        const timestamp = new Date().toLocaleString();
        
        // Insert record into the database
        const { error } = await supabase
          .from('portfolio_visits')
          .insert([{ 
            visitor_ip: 'Not collected for privacy', // privacy-friendly approach
            user_agent: navigator.userAgent,
          }]);
        
        if (error) {
          console.error('Error recording visit:', error);
          return;
        }

        // Send email notification via edge function
        const response = await fetch('https://ljcgevwbfyvbbzpdsnri.supabase.co/functions/v1/send-visit-notification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            timestamp,
            userAgent: navigator.userAgent,
          }),
        });

        if (!response.ok) {
          console.error('Failed to send notification');
        }

        setIsTracked(true);
      } catch (error) {
        console.error('Error in visit tracking:', error);
      }
    };

    trackVisit();

    // We use the session storage to avoid sending multiple notifications
    // if the user refreshes the page during the same session
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      trackVisit();
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, [isTracked]);

  return null; // This is a utility component that doesn't render anything visible
};

export default VisitTracker;
