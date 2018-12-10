import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";

const Wrapper = styled.div`
  max-width: 1340px;
  margin: 0 auto;
  padding: 60px 40px;
  @media (min-width: 650px) {
    padding: 60px 100px;
  }
  display: flex;
  flex-wrap: wrap;
  h2 {
    flex: 1 1 100%;
    text-align: center;
  }
  .image-wrapper {
    overflow: hidden;
    background-color: #000;
    display: flex;
    align-items: center;
    flex: 1 1 50%;
    @media screen and (min-width: 500px) {
      flex: 1 1 33%;
    }
    @media screen and (min-width: 768px) {
      flex: 1 1 25%;
    }
    img {
      width: 100%;
    }
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allInstagramContent(limit: 12) {
          edges {
            node {
              link
              images {
                standard_resolution {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <h2>
          Snapshot of My Life Away From the Screen{" "}
          <span role="img" aria-label="wave">
            🌊
          </span>
          <span role="img" aria-label="hiking">
            🥾
          </span>
          <span role="img" aria-label="shrimp">
            🍤
          </span>
        </h2>
        {data.allInstagramContent.edges.map((data, i) => (
          <a
            href={data.node.link}
            target="_blank"
            className="image-wrapper"
            rel="noopener noreferrer"
          >
            <img src={data.node.images.standard_resolution.url} alt="" />
          </a>
        ))}
      </Wrapper>
    )}
  />
);
