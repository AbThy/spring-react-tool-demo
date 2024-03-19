--
-- PostgreSQL database dump
--

-- Dumped from database version 14.0
-- Dumped by pg_dump version 14.0

-- Started on 2024-03-19 23:31:18

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 207768)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA IF NOT EXISTS public;


ALTER SCHEMA public OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 207827)
-- Name: address; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.address (
    id bigint NOT NULL,
    city character varying(255),
    customer_id bigint,
    house_number integer NOT NULL,
    other character varying(255),
    postal_code integer NOT NULL,
    street character varying(255)
);


ALTER TABLE public.address OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 207834)
-- Name: customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer (
    id bigint NOT NULL,
    date_of_birth timestamp without time zone,
    name character varying(255),
    place_of_birth character varying(255),
    taj character varying(255),
    tax_id character varying(255)
);


ALTER TABLE public.customer OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 207788)
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hibernate_sequence OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 207841)
-- Name: phone_number; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.phone_number (
    id bigint NOT NULL,
    country_code integer NOT NULL,
    customer_id bigint,
    number integer NOT NULL
);


ALTER TABLE public.phone_number OWNER TO postgres;

--
-- TOC entry 3318 (class 0 OID 207827)
-- Dependencies: 210
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3319 (class 0 OID 207834)
-- Dependencies: 211
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3320 (class 0 OID 207841)
-- Dependencies: 212
-- Data for Name: phone_number; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3326 (class 0 OID 0)
-- Dependencies: 209
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hibernate_sequence', 23, true);


--
-- TOC entry 3173 (class 2606 OID 207833)
-- Name: address address_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY (id);


--
-- TOC entry 3175 (class 2606 OID 207840)
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (id);


--
-- TOC entry 3177 (class 2606 OID 207845)
-- Name: phone_number phone_number_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.phone_number
    ADD CONSTRAINT phone_number_pkey PRIMARY KEY (id);


-- Completed on 2024-03-19 23:31:18

--
-- PostgreSQL database dump complete
--

