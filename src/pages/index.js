import React from "react";
import Layout from "../components/layout";
import Showcase from "../components/Showcase";
import { graphql } from "gatsby";

const Index = ({ data }) => (
  <Layout>
    {data.github.viewer.pinnedRepositories.edges.map((data, i) => (
      <Showcase
        index={i}
        name={data.node.name}
        repoUrl={data.node.url}
        url={data.node.homepageUrl}
        description={data.node.description}
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
