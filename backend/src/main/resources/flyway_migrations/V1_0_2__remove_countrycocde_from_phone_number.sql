ALTER TABLE public.phone_number DROP COLUMN country_code;
ALTER TABLE public.phone_number DROP COLUMN number;
ALTER TABLE public.phone_number ADD number VARCHAR(32);