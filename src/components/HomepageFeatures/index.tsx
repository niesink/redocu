import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Import the PNG images (recommended way)
import eaImage from '@site/static/img/ea.png';
import connectImage from '@site/static/img/connect.png';
import docsImage from '@site/static/img/docs.png';

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'EA',
    imgSrc: eaImage,
    description: (
      <>
        EA is jouw partner voor flexibel beroepsonderwijs. EA biedt vlekkeloze informatievoorziening voor student, docent, stagebedrijf, administratie en management.
      </>
    ),
  },
  {
    title: 'Connect',
    imgSrc: connectImage,
    description: (
      <>
        Met EA heb je je administratie op orde en wordt het management goed geïnformeerd met eenduidige en betrouwbare informatie. 
      </>
    ),
  },
  {
    title: 'Docs',
    imgSrc: docsImage,
    description: (
      <>
        Bij implementatietrajecten zetten onze consultants hun kennis en kunde graag voor je in. Ze geven toekomstbestendig advies over het gebruik en de inrichting van EA. 
      </>
    ),
  },
];

function Feature({title, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <img
          className={styles.featureSvg} // You can keep this class or rename to styles.featureImage
          src={imgSrc} // Use the imgSrc prop for the src attribute
          alt={title} // Add alt text for accessibility
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
