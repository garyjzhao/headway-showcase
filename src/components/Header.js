import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";

const HeaderWrapper = styled.div`
  background-color: #59aad3;
  color: #fff;
  .flex-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 60px 20px;
    @media (min-width: 650px) {
      padding: 60px 100px 30px;
    }
    @media screen and (min-width: 500px) {
      display: flex;
      justify-content: space-between;
    }
  }
  .copy {
    max-width: 400px;
    margin: 0 15px;
    h1 {
      margin-top: 0;
    }
  }
`;
const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 15px;
  img {
    border-radius: 5px;
    width: 100%;
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query {
        github {
          user(login: "garyjzhao") {
            avatarUrl
            name
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <div class="flex-container">
          <ImageWrapper>
            <img src={data.github.user.avatarUrl} alt="My Github Avatar" />
          </ImageWrapper>
          <div className="copy">
            <h1>Hi, {data.github.user.name} here!</h1>
            <p>
              Thanks for this opportunity to showcase some of my latest works
              and a little bit of myself!
            </p>
          </div>
        </div>
      </HeaderWrapper>
    )}
  />
);
