import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function useNetworkListener ()  {
    const navigate = useNavigate();

    useEffect(() => {
      const handleOffline = () => {
        if (!navigator.onLine) {
          navigate('/notfound'); // Redirect to /notfound when offline
        }
      };

      // Add event listener for offline status
      window.addEventListener('offline', handleOffline);

      return () => {
        // Clean up event listener
        window.removeEventListener('offline', handleOffline);
      };
    }, [navigate]);
  };