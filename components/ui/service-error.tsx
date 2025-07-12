import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceErrorProps {
  language: "en" | "es";
  onRetry?: () => void;
}

export function ServiceError({ language, onRetry }: ServiceErrorProps) {
  return (
    <Card className="max-w-md mx-auto mt-8 border-destructive/20">
      <CardContent className="flex flex-col items-center text-center p-6">
        <div className="rounded-full bg-destructive/10 p-3 mb-4">
          <AlertCircle className="h-6 w-6 text-destructive" />
        </div>
        <h3 className="text-lg font-semibold mb-2">
          {language === "es" 
            ? "Servicio temporalmente no disponible" 
            : "Service temporarily unavailable"}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {language === "es"
            ? "No pudimos cargar la información en este momento. Por favor, intenta más tarde."
            : "We couldn't load the information at this time. Please try again later."}
        </p>
        {onRetry && (
          <Button onClick={onRetry} variant="outline" size="sm">
            {language === "es" ? "Reintentar" : "Try Again"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
