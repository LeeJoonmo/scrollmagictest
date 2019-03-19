import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { relative } from 'path';

const TweenStyled = styled.div`
  .section {
    height: 40vh;
  }
  
  .about-main-title {
	  width: 800px;
    margin: 0 !important;
    position: relative;
    font-size: 120px;
    text-align:center;
    left: calc(50% - 400px);
    background-color:beige;
  }
  .about-interest-title {
	  width: 800px;
    opacity:0;
    margin: 0 !important;
    position: relative;
    font-size: 50px;
    text-align:center;
    left: calc(50% - 400px);
    background-color:tomato;
  }
  
  .stagger {
    width: 50px;
    height: 50px;
    left: 700px;
    background-color: green;
    position: relative;
  }
`;

const TweenComponent = () => (
  <TweenStyled>
    <div className="section" />
    <Controller>


      <Scene
        triggerElement="#trigger"
        duration={300}
        indicators
      >
        {(progress) => (
          <Tween            
            to={{
              opacity:0,
              top: '-50px',
            }}       
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <div className="about-main-title ">test<br/>test2</div>
          </Tween>    
        )}
      </Scene>
      <div id="trigger" style = {{backgroundColor:"black", height:1, widht:"100%"}}>trigger</div>
      <Scene duration={1000} pin={true} indicators ={true} triggerHook = "onLeave">
      {(progress) => (
        <div>
        <Tween
          to={{
            css: {
              opacity:1,
            },
            ease: 'Strong.easeOut',
          }}
          totalProgress={progress}
          paused
        >
          <div className="about-interest-title">interest</div>
        </Tween>
        <Tween
          to={{
           opacity:1,
           left:0,
           top:0
          }}       
          ease="Strong.easeOut"
          totalProgress={progress}
          paused
        >
          <div style = {{height: 300, backgroundColor:"beige", width:300, margin:"auto",top:500, position:"relative"}}>two</div>
        </Tween>

        </div>
      )} 
      </Scene>



    </Controller>

    <div className="section" />
    <div className="section" />
    <div className="section" />
    <div className="section" />
    <div className="section" />
  </TweenStyled>

);

export default TweenComponent;