import React from "react";
import {
  AboutSection,
  ArticlesSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Daniel J Breen" />
      <Page>
        <HeroSection sectionId="hero" />
        <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={["medium"]}
        />
        <AboutSection sectionId="about" heading="About Me" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <InterestsSection sectionId="details" heading="Details" />
      </Page>
    </>
  );
}

