import Head from 'next/head';
import { useRef } from 'react';
import useScrollToIntersectedItem from '../hoc/useScrollToIntersectedItem';

import PageHeader from '../components/PageHeader';
import Navbar from '../components/Navbar';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Certifications from '../components/Certifications';
import Footer from '../components/Footer';

const dsRoles = [
  {
    company: 'MyLane.AI',
    title: 'Data Scientist',
    period: 'Jul 2024 - Present',
    highlights: [
      'Analyze U.S. labor market trends using job postings data, BLS, and Census sources.',
      'Build forecasting models for workforce growth across healthcare specialties.',
      'Support compensation parsing systems for wage extraction and normalization.'
    ]
  },
  {
    company: 'TalaNanu',
    title: 'Computer Vision Engineer',
    period: 'May 2023 - Jun 2024',
    highlights: [
      'Trained and deployed a fine-grained image classifier that reached 98% accuracy.',
      'Reduced OCR inference latency from over one minute to under 20 seconds.',
      'Delivered model training and deployment workflows with Docker, FastAPI, and GCP.'
    ]
  },
  {
    company: 'Babcock University',
    title: 'Teaching Assistant and E-Tutor',
    period: 'Oct 2025 - Present',
    highlights: [
      'Teach machine learning, Linux system administration, C programming, and data management.',
      'Lead practical SQL sessions for Database Systems Design, Implementation and Management.'
    ]
  }
];

const dsAchievements = [
  'Won the 2022 MathWorks MiniDrone Competition virtual round in the EMEA region, finishing ahead of 330+ teams.',
  'Designed end-to-end systems spanning data collection, forecasting, OCR, and cloud deployment.'
];

const dsSkillGroups = [
  {
    title: 'Programming & Data',
    items: ['Python', 'PostgreSQL', 'Pandas', 'NumPy', 'Statsmodels', 'Prophet', 'Parquet', 'Web Scraping', 'Scrapy']
  },
  {
    title: 'Machine Learning',
    items: ['Scikit-learn', 'PyTorch', 'TensorFlow', 'spaCy', 'NLTK', 'Gensim']
  },
  {
    title: 'Data Infrastructure & Cloud',
    items: ['BigQuery', 'Airflow', 'dbt', 'Google Cloud Storage', 'Google Cloud Platform', 'Looker Studio']
  },
  {
    title: 'MLOps & Deployment',
    items: ['Docker', 'FastAPI', 'Git', 'MLflow', 'Poetry', 'Azure ML Studio']
  },
  {
    title: 'Analytics & Visualization',
    items: ['EDA', 'Forecasting', 'Compensation Parsing', 'Matplotlib', 'Plotly']
  }
];

const dsProjects = [
  {
    name: 'Supermart NG Price Tracker',
    url: 'https://github.com/jideilori/supermart_ng_price_tracker',
    image: 'images/projects/supermart_dashboard.png',
    imageFit: 'contain',
    track: 'data-science',
    description: 'Built a retail price tracking pipeline that scrapes Supermart product pages, cleans and validates product records, prepares analytics-ready datasets, and supports reporting with Google Cloud Storage, BigQuery, dbt, and Airflow.'
  }
];

const dsCertifications = [
  {
    title: 'Machine Learning with Python',
    issuer: 'CognitiveClass.ai',
    period: 'Jul 2020',
    description: 'Introductory machine learning coursework covering core concepts and Python-based workflows.'
  },
  {
    title: 'Introduction to AI, ML and DL',
    issuer: 'DeepLearning.AI',
    period: 'Sep 2021',
    description: 'Foundational overview of artificial intelligence, machine learning, and deep learning systems.'
  },
  {
    title: 'Grant Writing Class',
    issuer: 'Research, Innovation and International Cooperation, Babcock University',
    period: 'Jun 2025',
    description: 'Training focused on proposal development, research communication, and funding readiness.'
  }
];

const navLinks = [
  { text: 'Home', href: '/', scrollable: false },
  { text: 'Experience', href: 'experience', scrollable: true },
  { text: 'Skills', href: 'skills', scrollable: true },
  { text: 'Projects', href: 'projects', scrollable: true },
  { text: 'Certifications', href: 'certifications', scrollable: true },
  { text: 'CV', href: '/cv/OLUWASEUN_ILORI_RESUME_26.pdf', scrollable: false },
];

const DataSciencePage = () => {
  const pageSectionParentRef = useRef(null);
  useScrollToIntersectedItem({
    targetRef: pageSectionParentRef,
    offset: 20
  });

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title>Oluwaseun Ilori — Data Scientist</title>
        <meta name="description" content="Oluwaseun Ilori — Data Scientist. Analytics, forecasting, data pipelines, and production ML systems." />
      </Head>

      <main>
        <PageHeader
          variant="default"
          title="Data Scientist"
          subtitle="MSc Computer Science (AI) · Currently at MyLane.AI"
          bio="I build analytics workflows and data pipelines that turn raw data into decisions. My work spans labor market analysis, forecasting, compensation parsing, and end-to-end data systems using Python, SQL, BigQuery, Airflow, and cloud infrastructure."
          focusAreas={['Analytics & Forecasting', 'Data Pipelines', 'NLP', 'MLOps', 'Cloud Infrastructure']}
          cvLink="/cv/OLUWASEUN_ILORI_RESUME_26.pdf"
        />
        <Navbar links={navLinks} />
        <div ref={pageSectionParentRef} className="w-full max-w-7xl px-4 lg:px-10 xl:px-16 md:pb-12 overflow-hidden">
          <Experience
            roles={dsRoles}
            achievements={dsAchievements}
            heading="Industry roles across data science, ML engineering, and teaching."
            subheading="My background combines data analysis, production delivery, and technical communication."
          />
          <Skills
            skillGroups={dsSkillGroups}
            heading="Tools and technologies for data science and production ML."
            subheading="From data wrangling and analytics to cloud deployment and reporting."
          />
          <Portfolio
            projects={dsProjects}
            heading="Data science projects demonstrating pipeline and analytics capability."
            subheading="End-to-end work from data collection through transformation, storage, and reporting."
          />
          <Certifications
            certifications={dsCertifications}
            heading="Relevant training and certifications."
          />
          <span className="hidden border-gray-400 -bottom-full bottom-0"></span>
        </div>
      </main>
      <Footer crossLink={{ prefix: 'I also do computer vision research.', href: '/research', text: 'View research portfolio' }} />
    </div>
  )
}

export default DataSciencePage;
