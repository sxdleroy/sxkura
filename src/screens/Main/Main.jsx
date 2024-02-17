import React from "react";
import { Component } from "../../components/Component";
import { Info } from "../../components/Info";
import { Property1Default } from "../../icons/Property1Default";
import { SakuraLogo1 } from "../../icons/SakuraLogo1";
import "./style.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="div-2">
        <div className="overlap">
          <div className="overlap-group">
            <div className="heading">
              <div className="overlap-group-2">
                <p className="SXKURA-STORE">
                  <span className="span">
                    SXKURA
                    <br />
                    ST
                  </span>
                  <span className="text-wrapper-2">O</span>
                  <span className="span">RE</span>
                </p>
                <SakuraLogo1 className="sakura-logo" />
              </div>
            </div>
            <img className="sleeping-cute" alt="Sleeping cute" src="/img/sleeping-cute-1.gif" />
            <Info className="info-instance" property1="default" />
            <Component className="component-1" property1="default" />
          </div>
          <div className="text-wrapper-3">ABOUT US</div>
          <img className="line" alt="Line" src="/img/line-2.svg" />
          <div className="picture">
            <div className="overlap-2">
              <div className="shape">
                <div className="overlap-group-3">
                  <div className="rectangle" />
                  <div className="text-wrapper-4">桜</div>
                </div>
              </div>
              <img className="blossom" alt="Blossom" src="/img/blossom.svg" />
            </div>
          </div>
          <div className="group">
            <p className="we-are-fijian-based">
              We are Fijian-based online sanctuary blooming with the essence of Japan. Inspired by the delicate beauty
              of the sakura blossom, we curate a collection of clothing, accessories, and anime that embodies the spirit
              of Japanese culture. We&#39;re more than just a store; we&#39;re a community of passionate individuals who
              share a love for all things Japanese, from the vibrant fashion trends to the captivating world of anime.{" "}
              <br />
              <br />
              At Sxkura Store, we believe in embracing individuality and self-expression, and we strive to provide you
              with the tools to cultivate your unique style, inspired by the magic of Japan. Join us on this journey of
              cultural exploration, and let your inner sakura blossom!
            </p>
          </div>
          <div className="meet-the-team">
            <img className="giphy" alt="Giphy" src="/img/giphy-1.gif" />
            <img className="img" alt="Giphy" src="/img/giphy-1-1.gif" />
          </div>
          <p className="rxkuu-xiao-main">
            : rxkuu
            <br />
            Xiao Main | Yasuo Main | Chamber Main
            <br />
            Website Developer &amp; UI/UX Designer
          </p>
          <p className="natsumi-nahida-main">
            : natsumi
            <br />
            Nahida Main | Ahri Main | Viper Main
            <br />
            Marketing &amp; Sales
          </p>
          <Property1Default className="icon-arrow-up" />
        </div>
        <div className="text-wrapper-5">DESIGNED BY RXKUU</div>
      </div>
    </div>
  );
};
