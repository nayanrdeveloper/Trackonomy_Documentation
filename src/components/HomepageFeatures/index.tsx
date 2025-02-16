import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Effortlessly Manage Your Expenses and Income',
    imgSrc: require('@site/static/img/save_money.png').default,
    description: (
      <>
       Gain full control over your finances by categorizing your expenses and tracking your income seamlessly. Stay informed and organized with ease.
      </>
    ),
  },
  {
    title: 'Save Money and Achieve Your Financial Goals',
    imgSrc: require('@site/static/img/goal.png').default,
    description: (
      <>
        Set savings goals, track your progress, and build financial discipline. Achieve your dreams with smarter money management.
      </>
    ),
  },
  {
    title: 'Leverage AI to Manage Your Expenses',
    imgSrc: require('@site/static/img/money_ai.png').default,
    description: (
      <>
        Utilize advanced AI insights to analyze spending patterns, provide personalized recommendations, and help you make informed financial decisions.
      </>
    ),
  },
  {
    title: 'Stay Informed with Real-Time Updates',
    imgSrc: require('@site/static/img/reat_time_update.png').default,
    description: (
      <>
        Monitor your transactions and budgets in real-time. Stay updated on where your money is going, anytime, anywhere.
      </>
    ),
  },
  {
    title: 'Make Smarter Decisions with Analytics',
    imgSrc: require('@site/static/img/money_anayltics.png').default,
    description: (
      <>
        Analyze your spending habits with easy-to-understand graphs and charts. Make data-driven decisions to improve your financial health.
      </>
    ),
  },
];

function Feature({title, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <img src={imgSrc} className={styles.featureImg} alt={title} />
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
