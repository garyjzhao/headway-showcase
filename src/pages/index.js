import React from "react";
import Layout from "../components/layout";
import Showcase from "../components/Showcase";
import { graphql } from "gatsby";
import Instagram from "../components/Instagram";

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
    {/* <h2>Instagram Feed</h2>
    {data.allInstagramContent.edges.map((data, i) => (
      <img src={data.node.images.standard_resolution.url} alt="" />
    ))} */}
    <Instagram />
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
    allInstagramContent {
      edges {
        node {
          user {
            username
          }
          images {
            thumbnail {
              url
            }
            standard_resolution {
              url
            }
          }
        }
      }
    }
  }
`;

export default Index;
