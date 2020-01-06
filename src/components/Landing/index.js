import React, { Component } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import Face from './Face';

class Landing extends Component {
  render() {
    return (
      <div className='Landing__Wrapper'>
        <div className='Landing__Header'>
          <h1>Tommy Nguyen</h1>
          <h3>
            <a
              href='https://www.github.com/tomalama/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>{' '}
            |{' '}
            <a
              href='https://www.linkedin.com/in/tommynguyen7/'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>{' '}
            |{' '}
            <a
              href='https://resume.creddle.io/resume/fst3u4d7hrs'
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume
            </a>{' '}
            | <a href='mailto:tommynguyen233@gmail.com'>Contact</a>
          </h3>
        </div>
        <div className='Landing__Section'>
          <div className='Landing__News'>
            <h2>What's New?</h2>
            <ul>
              <li>
                Dec/19: Graduated from{' '}
                <a
                  href='https://www.uottawa.ca/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  uOttawa
                </a>
              </li>
              <li>
                Nov/19: Received my shiny{' '}
                <a
                  href='https://en.wikipedia.org/wiki/Iron_Ring'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  iron ring
                </a>
                !
              </li>
              <li>
                May/19: Joined{' '}
                <a
                  href='https://www.ibm.com/ca-en'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  IBM
                </a>{' '}
                as a CO-OP
              </li>
              <li>
                May/18: Joined{' '}
                <a
                  href='https://ribboncommunications.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Ribbon
                </a>{' '}
                as a CO-OP
              </li>
              <li>
                Sep/15: Started at{' '}
                <a
                  href='https://www.uottawa.ca/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  uOttawa
                </a>
              </li>
            </ul>
          </div>
        </div>
        <BrowserView>
          <Face />
        </BrowserView>
        <MobileView>
          <div className='Landing__Section'>
            For the full experience, view on desktop.
          </div>
        </MobileView>
      </div>
    );
  }
}

export default Landing;
