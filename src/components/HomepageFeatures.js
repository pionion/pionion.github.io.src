import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ION is a distributed real-time communication system, the goal is to chat anydevice, anytime, anywhere!
      </>
    ),
  },
  {
    title: 'Powered by',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        ION is base on PION/Flutter-WebRTC, powerful webrtc golang/flutter stack.
      </>
    ),
  },
  {
    title: 'Sponsor to go faster',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        You can sponsor ION;
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
