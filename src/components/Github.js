import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Showcase from "../components/Showcase";
import styled from "styled-components";

const Heading = styled.h2`
  margin: 50px 0 0;
  text-align: center;
`;

export default () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <>
        <Heading>Just a short list of GitHub Repos</Heading>
        {data.github.viewer.pinnedRepositories.edges.map((data, i) => (
          <Showcase
            index={i}
            name={data.node.name}
            repoUrl={data.node.url}
            url={data.node.homepageUrl}
            description={data.node.description}
          />
        ))}
      </>
    )}
  />
);
