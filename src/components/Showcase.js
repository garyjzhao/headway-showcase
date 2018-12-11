import React from "react";
import styled from "styled-components";

import asana from "../images/asana.jpg";
import personal from "../images/personal.jpg";

const ShowcaseWrapper = styled.div`
  max-width: 1340px;
  margin: 0 auto;
  padding: 30px 40px;
  @media (min-width: 650px) {
    padding: 30px 100px;
  }
  @media screen and (min-width: 500px) {
    display: flex;
    align-items: center;
  }
  .copy {
    flex: 1 1 0;
    ${props => (props.index === 0 ? "order: 1;" : "order: 2;")}
  }
`;
const Button = styled.a`
  background: #59aad3;
  font-size: 18px;
  letter-spacing: 1px;
  display: inline-block;
  margin-bottom: 10px;
  border-radius: 7px;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
  margin-right: 10px;
`;

const ImageWrapper = styled.div`
  flex: 1 1 0;
  max-width: 500px;

  @media screen and (min-width: 500px) {
    ${props =>
      props.index === 0
        ? "order: 2;margin-left:25px"
        : "order: 1;margin-right:25px"}
  }
  img {
    width: 100%;
    box-shadow: 0 0 20px #ccc;
  }
`;

class Showcase extends React.Component {
  render() {
    let imagesrc, copy;
    if (this.props.name === "garyjzhao.github.io") {
      imagesrc = `${personal}`;
      copy =
        "This is my personal portfolio website I made back in 2017. I need to update it, but wanted to include it since I am ultilizing the GitHub API.";
    } else {
      imagesrc = `${asana}`;
      copy =
        "This is a coding challenge I did for Asana. It was to create a puppy gallery page and useres can click on images to display a fuller image.";
    }
    return (
      <ShowcaseWrapper index={this.props.index}>
        <ImageWrapper index={this.props.index}>
          <img src={imagesrc} alt="Screenshot of my work" />
        </ImageWrapper>
        <div className="copy">
          <h2>{this.props.description}</h2>
          <p>{copy}</p>
          <Button
            href={this.props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site
          </Button>
          <Button
            href={this.props.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repo
          </Button>
        </div>
      </ShowcaseWrapper>
    );
  }
}

export default Showcase;
