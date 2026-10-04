import { Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { reviews } from "@/lib/clinicData";

function Stars({ value = 5 }: { value?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={
            index < value
              ? "h-4 w-4 fill-amber-400 text-amber-400"
              : "h-4 w-4 text-muted-foreground"
          }
        />
      ))}
    </div>
  );
}

export function ReviewGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {reviews.map((review) => (
        <Card key={review.name} className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold">{review.name}</p>
              <div className="mt-2">
                <Stars value={review.stars} />
              </div>
            </div>
            <Badge variant="secondary" className="bg-teal-600/10 text-teal-800">
              Google
            </Badge>
          </div>
          <Separator className="my-4" />
          <p className="text-sm leading-relaxed text-muted-foreground">"{review.text}"</p>
        </Card>
      ))}
    </div>
  );
}
