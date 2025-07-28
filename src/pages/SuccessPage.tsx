import { Calendar, Mail, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import successCheck from "@/assets/success-check.png";

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-background font-inter relative overflow-hidden">
      {/* Animated floating orbs background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-success/20 rounded-full blur-2xl animate-float-fast" />
      </div>
      
      {/* Subtle moving grid */}
      <div className="absolute inset-0 opacity-[0.03] animate-drift" 
           style={{
             backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
             backgroundSize: '50px 50px'
           }} 
      />

      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen max-w-md">
        
        {/* ASMI Logo - Subtle placement */}
        <div className="mb-6 opacity-60">
          <img 
            src="/lovable-uploads/7529d674-8203-4c7b-872b-99d72f59c412.png" 
            alt="ASMI" 
            className="h-8 w-auto"
          />
        </div>

        {/* Main Success Card */}
        <Card className="w-full p-6 bg-card/50 backdrop-blur-md border-border/30 shadow-card animate-fade-in">
          
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img 
                src={successCheck} 
                alt="Success" 
                className="w-16 h-16 animate-scale-in"
              />
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-glow-pulse" />
            </div>
          </div>

          {/* Success Message - Minimal */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              All Set!
            </h2>
            <p className="text-sm text-muted-foreground">
              Your AI Chief of Staff is ready
            </p>
          </div>

          {/* Connected Services - Compact */}
          <div className="flex justify-center gap-3 mb-6">
            <div className="flex flex-col items-center p-3 bg-secondary/50 rounded-lg border border-border/30">
              <Calendar className="w-5 h-5 text-primary mb-1" />
              <span className="text-xs text-muted-foreground">Calendar</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-secondary/50 rounded-lg border border-border/30">
              <Mail className="w-5 h-5 text-primary mb-1" />
              <span className="text-xs text-muted-foreground">Gmail</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-secondary/50 rounded-lg border border-border/30">
              <Users className="w-5 h-5 text-primary mb-1" />
              <span className="text-xs text-muted-foreground">Contacts</span>
            </div>
          </div>

          {/* Processing indicator */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs">
              <Sparkles className="w-3 h-3 animate-pulse text-primary" />
              <span>Processing your data...</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3"
              onClick={() => window.close()}
            >
              Return to ASMI
            </Button>
          </div>

        </Card>

        {/* Footer */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/30 rounded-full border border-border/20">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-xs text-muted-foreground font-mono">
              asmiai.com
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SuccessPage;