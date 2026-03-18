import { useState } from "react";
import { Calendar, Loader2, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface BookingButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  children?: React.ReactNode;
}

const BOOKING_URL = "https://booking.uk.hsone.app/soe/new?pid=UIKIL01";

export function BookingButton({ 
  className, 
  size = "lg", 
  variant = "default", 
  children 
}: BookingButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBookingClick = () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Open the booking URL in a new tab
      const newWindow = window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
      
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        throw new Error('Popup blocked. Please allow popups for this site.');
      }
      
      // Check if the new window loaded successfully after a short delay
      setTimeout(() => {
        if (newWindow.closed) {
          setError('Booking page failed to load. Please try again or call the clinic.');
        }
      }, 2000);
      
    } catch {
      setError('Unable to open booking system. Please check your connection or call the clinic.');
    } finally {
      setIsLoading(false);
      
      // Clear error after 5 seconds
      setTimeout(() => setError(null), 5000);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={className}
            size={size}
            variant={variant}
            onClick={handleBookingClick}
            disabled={isLoading}
            aria-label="Book dental appointment"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Calendar className="mr-2 h-5 w-5" />
            )}
            {isLoading ? 'Loading...' : (children || 'Book Appointment')}
          </Button>
        </TooltipTrigger>
        {error && (
          <TooltipContent 
            side="bottom" 
            className="bg-destructive text-destructive-foreground border-destructive"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <span>{error}</span>
            </div>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}