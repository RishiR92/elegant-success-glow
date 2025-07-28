import { CheckCircle, Calendar, Mail, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import successCheck from "@/assets/success-check.png";
import dataFlow from "@/assets/data-flow.png";

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-background font-inter relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-dark opacity-80" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{
             backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }} 
      />

      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen">
        
        {/* Main Success Card */}
        <Card className="max-w-2xl w-full p-8 md:p-12 bg-card border-border shadow-card animate-fade-in">
          
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src={successCheck} 
                alt="Success" 
                className="w-24 h-24 animate-scale-in"
              />
              <div className="absolute inset-0 bg-success rounded-full blur-xl opacity-30 animate-glow-pulse" />
            </div>
          </div>

          {/* Brand */}
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
              nsmi
            </h1>
            <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Success Message */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-success mb-4">
              Integration Complete!
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your Calendar, Gmail, and Contacts are now seamlessly linked to ASMI. 
              Your AI Chief of Staff is ready to help you get things done.
            </p>
          </div>

          {/* Connected Services */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="flex flex-col items-center p-4 bg-secondary rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
              <Calendar className="w-8 h-8 text-success mb-2" />
              <span className="text-sm font-medium text-foreground">Calendar</span>
              <span className="text-xs text-muted-foreground">Synced</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-secondary rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
              <Mail className="w-8 h-8 text-success mb-2" />
              <span className="text-sm font-medium text-foreground">Gmail</span>
              <span className="text-xs text-muted-foreground">Connected</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-secondary rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
              <Users className="w-8 h-8 text-success mb-2" />
              <span className="text-sm font-medium text-foreground">Contacts</span>
              <span className="text-xs text-muted-foreground">Linked</span>
            </div>
          </div>

          {/* Data Flow Visualization */}
          <div className="mb-8 relative">
            <img 
              src={dataFlow} 
              alt="Data Flow" 
              className="w-full h-32 object-cover rounded-lg opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-card rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-2 text-success font-mono text-sm">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>We're brewing wonderful insights about you in the background...</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-3 font-semibold"
              onClick={() => window.close()}
            >
              🎉 Return to Asmi
            </Button>
            <p className="text-xs text-muted-foreground mt-3 font-mono">
              You may now close this window and return to Asmi
            </p>
          </div>

        </Card>

        {/* Footer Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border/30">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">
              prod.asmiai.com
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SuccessPage;