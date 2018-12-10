import React from "react";
import styled from "styled-components";

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

class Showcase extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.description}</h2>
        <p>{this.props.copy}</p>
        <Button href={this.props.url} target="_blank">
          Visit Site
        </Button>
        <Button href={this.props.repoUrl} target="_blank">
          View Repo
        </Button>
      </div>
    );
  }
}

export default Showcase;
