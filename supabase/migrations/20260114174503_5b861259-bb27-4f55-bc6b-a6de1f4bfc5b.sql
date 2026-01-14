-- Create leads table for contact form and waitlist submissions
CREATE TABLE public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    name TEXT,
    email TEXT NOT NULL,
    company TEXT,
    role TEXT,
    team_size TEXT,
    message TEXT,
    source TEXT NOT NULL CHECK (source IN ('contact_form', 'waitlist'))
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting leads (anyone can submit)
CREATE POLICY "Anyone can insert leads"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create policy for reading leads (only authenticated users - for admin purposes later)
CREATE POLICY "Authenticated users can read leads"
ON public.leads
FOR SELECT
TO authenticated
USING (true);