import React from 'react';
import {Composition} from 'remotion';
import {AutomationDemo} from './videos/AutomationDemo';
import {ContentEngineDemo} from './videos/ContentEngineDemo';
import {WebsiteDemo} from './videos/WebsiteDemo';

const videoConfig = {width: 1080, height: 1920, fps: 30, durationInFrames: 540};

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="WebsiteDemo" component={WebsiteDemo} {...videoConfig} />
    <Composition id="AutomationDemo" component={AutomationDemo} {...videoConfig} />
    <Composition id="ContentEngineDemo" component={ContentEngineDemo} {...videoConfig} />
  </>
);
