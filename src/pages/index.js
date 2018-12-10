import React from "react";
import Layout from "../components/layout";
import Showcase from "../components/Showcase";
import { graphql } from "gatsby";

const Index = ({ data }) => (
  <Layout>
    {data.github.viewer.pinnedRepositories.edges.map(data => (
      <Showcase
        name={data.node.name}
        repoUrl={data.node.url}
        url={data.node.homepageUrl}
        description={data.node.description}
        copy="This is a coding challenge I did for Asana. It was to create a puppy gallery page and useres can click on images to display a fuller image."
      />
    ))}
  </Layout>
);

export const query = graphql`
  query {
    github {
      viewer {
        pinnedRepositories(first: 2) {
          edges {
            node {
              name
              url
              homepageUrl
              description
            }
          }
        }
      }
    }
  }
`;

export default Index;
