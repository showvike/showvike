"use client";

import React, { useEffect } from 'react';
import { useActionState } from 'react'; // Changed from 'react-dom'
import { useFormStatus } from 'react-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Loader2, Send } from 'lucide-react';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { SectionContainer } from '@/components/ui/section-container';
import { useToast } from '@/hooks/use-toast'; 
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


const initialState: ContactFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full md:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </>
      )}
    </Button>
  );
}

export function ContactFormSection() {
  const [state, formAction] = useActionState(submitContactForm, initialState); // Changed to useActionState
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
          variant: "default",
        });
        formRef.current?.reset(); // Reset form on success
      } else if (state.errors) {
         // No automatic toast for field errors, they are displayed inline
      } else {
        // General error not related to fields
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);


  return (
    <SectionContainer title="Get in Touch" id="contact">
      <Card className="max-w-2xl mx-auto hover:border-primary transition-colors duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-primary">Contact Me</CardTitle>
          <CardDescription>
            Have a question or want to work together? Fill out the form below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} className="space-y-6">
            <div>
              <Label htmlFor="name" className="font-medium">Name</Label>
              <Input id="name" name="name" placeholder="Your Name" required className="mt-1" />
              {state.errors?.name && (
                <p className="text-sm text-destructive mt-1">{state.errors.name.join(", ")}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email" className="font-medium">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="mt-1" />
              {state.errors?.email && (
                <p className="text-sm text-destructive mt-1">{state.errors.email.join(", ")}</p>
              )}
            </div>
            <div>
              <Label htmlFor="message" className="font-medium">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message..." required rows={5} className="mt-1 resize-none" />
              {state.errors?.message && (
                <p className="text-sm text-destructive mt-1">{state.errors.message.join(", ")}</p>
              )}
            </div>
            
            {!state.success && state.message && !state.errors && (
                 <Alert variant="destructive">
                    <AlertTitle>Submission Error</AlertTitle>
                    <AlertDescription>{state.message}</AlertDescription>
                </Alert>
            )}

            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </SectionContainer>
  );
}
