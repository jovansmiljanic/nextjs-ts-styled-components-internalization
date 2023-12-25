"use client";

// Core types
import type { FC } from "react";

// Global component
import { Button, Heading } from "@components";

// Vendors
import styled, { css } from "styled-components";

// Translations
import { useTranslations } from "next-intl";

const Hero = styled.div``;

interface Hero {}

const index: FC<Hero> = () => {
  // Translations
  const t = useTranslations();

  return (
    <Hero>
      <Heading as="h1">{t("heroTitle")}</Heading>
      <Heading as="h3">{t("heroDescription")}</Heading>

      <Button $variant="primary">{t("heroCtaLabel")}</Button>
    </Hero>
  );
};

export { index as Hero };
