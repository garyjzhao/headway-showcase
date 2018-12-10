import React from "react";
import Layout from "../components/layout";
import Showcase from "../components/Showcase";
import { graphql } from "gatsby";

import asana from "../images/asana.jpg";

const Index = ({ data }) => (
  <Layout>
    <Showcase
      repoUrl={data.github.repository.url}
      url={data.github.repository.homepageUrl}
      description={data.github.repository.description}
      primaryLanguage={data.github.repository.primaryLanguage.name}
      copy="This is a coding challenge I did for Asana. It was to create a puppy gallery page and useres can click on images to display a fuller image."
      image={asana}
    />
  </Layout>
);

export const query = graphql`
  query {
    github {
      repository(owner: "garyjzhao", name: "asana-coding-challenge") {
        url
        homepageUrl
        description
      }

      user(login: "garyjzhao") {
        avatarUrl
        name
      }
    }
  }
`;

export default Index;
