import Head from 'next/head';
import { useRef } from 'react';
import useScrollToIntersectedItem from '../hoc/useScrollToIntersectedItem';

import PageHeader from '../components/PageHeader';
import Navbar from '../components/Navbar';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Publications from '../components/Publications';
import BlogPosts from '../components/BlogPosts';
import Certifications from '../components/Certifications';
import Footer from '../components/Footer';

const researchRoles = [
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
  },
  {
    company: 'Zummit Africa',
    title: 'Deep Learning Intern',
    period: 'Nov 2021 - Mar 2022',
    highlights: [
      'Led an emotion detection project from predictive modeling through deployment.',
      'Supported team members who were new to deep learning workflows.'
    ]
  }
];

const researchAchievements = [
  'Won the 2022 MathWorks MiniDrone Competition virtual round in the EMEA region, finishing ahead of 330+ teams.',
  'Published peer-reviewed research spanning malaria detection, explainable AI in healthcare, and smart surveillance systems.',
  'Designed systems across diagnostics, OCR, object detection, segmentation, and depth estimation.'
];

const researchSkillGroups = [
  {
    title: 'Deep Learning & Vision',
    track: 'computer-vision',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'OpenCV', 'MATLAB/Simulink']
  },
  {
    title: 'NLP & Language',
    track: 'computer-vision',
    items: ['spaCy', 'NLTK', 'Gensim']
  },
  {
    title: 'Programming & Data',
    track: 'computer-vision',
    items: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Plotly', 'Scikit-learn']
  },
  {
    title: 'Deployment & Infrastructure',
    track: 'computer-vision',
    items: ['Docker', 'FastAPI', 'Git', 'Google Cloud Platform', 'MLflow', 'Poetry']
  }
];

const researchProjects = [
  {
    name: 'Aerial Semantic Segmentation',
    url: 'https://github.com/jideilori/aerial_semantic_segmentation',
    image: 'images/projects/aerial.png',
    track: 'computer-vision',
    description: 'Built a semantic segmentation workflow for aerial imagery, combining custom OpenCV augmentation with a MobileNetV3-small U-Net architecture for low-data training.'
  },
  {
    name: 'Malaria Parasite Detector',
    url: 'https://github.com/jideilori/malaria_diag/',
    image: 'images/projects/malaria_demo_screenshot.png',
    track: 'computer-vision',
    description: 'Trained an object detection system to count malaria parasites and white blood cells, then packaged prediction behind a custom FastAPI service deployed with Docker on Google Cloud.'
  },
  {
    name: 'License Plate Reader and Custom OCR',
    url: 'https://github.com/jideilori/ocr-ml',
    image: 'images/projects/ocr_ml.webp',
    track: 'computer-vision',
    description: 'Built the full ANPR pipeline for Nigerian plates, from data preparation and annotation tooling to object detection, custom OCR, and threshold adjustment with a regression model.'
  },
  {
    name: 'Face Recognition and Tracking',
    url: 'https://github.com/jideilori/face-recognition',
    image: 'images/projects/result.gif',
    track: 'computer-vision',
    description: 'Developed a real-time face recognition workflow with multi-object tracking for continuous identity matching in video streams.'
  },
  {
    name: 'Monocular Depth Estimation',
    url: 'https://github.com/jideilori/resnet_depthnet',
    image: 'images/projects/office_result.png',
    track: 'computer-vision',
    description: 'Implemented a custom ResNet18 encoder-decoder with skip connections for monocular depth estimation and trained it on the NYU-v2 dataset.'
  }
];

const researchCertifications = [
  {
    title: 'Deep Learning With PyTorch',
    issuer: 'OpenCV.org',
    period: 'Jan 2024',
    description: 'Practical deep learning training using PyTorch for model development and experimentation.'
  },
  {
    title: 'Convolutional Neural Networks in TensorFlow',
    issuer: 'DeepLearning.AI',
    period: 'Oct 2021',
    description: 'Applied CNN concepts, image workflows, and TensorFlow-based deep learning implementation.'
  },
  {
    title: 'Computer Vision for Faces',
    issuer: 'Big Vision LLC / LearnOpenCV',
    period: 'Oct 2018',
    description: 'Covered image processing, OpenCV, Dlib, machine learning, and face recognition system development.'
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
  { text: 'Publications', href: 'publications', scrollable: true },
  { text: 'Projects', href: 'projects', scrollable: true },
  { text: 'Experience', href: 'experience', scrollable: true },
  { text: 'Skills', href: 'skills', scrollable: true },
  { text: 'Blog', href: 'blog-posts', scrollable: true },
  { text: 'Certifications', href: 'certifications', scrollable: true },
  { text: 'CV', href: '/cv/OLUWASEUN_ILORI_RESUME_26.pdf', scrollable: false },
];

const ResearchPage = () => {
  const pageSectionParentRef = useRef(null);
  useScrollToIntersectedItem({
    targetRef: pageSectionParentRef,
    offset: 20
  });

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title>Oluwaseun Ilori — Computer Vision Researcher</title>
        <meta name="description" content="Oluwaseun Ilori — Computer Vision Researcher. Published research in malaria detection, explainable AI, and intelligent vision systems." />
      </Head>

      <main>
        <PageHeader
          variant="research"
          title="Computer Vision Researcher"
          subtitle="MSc Computer Science (AI) · Babcock University"
          bio="My research focuses on computer vision and Edge AI for real-world applications. I work on object detection, semantic segmentation, OCR systems, and depth estimation — with published work spanning malaria diagnostics, explainability in medical AI, and embedded surveillance systems."
          focusAreas={['Object Detection', 'Semantic Segmentation', 'OCR', 'Explainable AI', 'Edge AI']}
          cvLink="/cv/OLUWASEUN_ILORI_RESUME_26.pdf"
        />
        <Navbar links={navLinks} />
        <div ref={pageSectionParentRef} className="w-full max-w-7xl px-4 lg:px-10 xl:px-16 md:pb-12 overflow-hidden">
          <Publications />
          <Portfolio
            projects={researchProjects}
            heading="Research projects in computer vision and applied machine learning."
            subheading="Systems I have built for detection, segmentation, recognition, depth estimation, and OCR."
          />
          <Experience
            roles={researchRoles}
            achievements={researchAchievements}
            heading="Roles in computer vision engineering, teaching, and research."
            subheading="My experience spans model development, deployment, and academic instruction."
          />
          <Skills
            skillGroups={researchSkillGroups}
            heading="Research tools and technologies."
            subheading="Frameworks, libraries, and infrastructure I use for vision research and experimentation."
          />
          <BlogPosts />
          <Certifications
            certifications={researchCertifications}
            heading="Training in deep learning, computer vision, and research methods."
          />
          <span className="hidden border-gray-400 -bottom-full bottom-0"></span>
        </div>
      </main>
      <Footer crossLink={{ prefix: 'I also work as a data scientist.', href: '/data-science', text: 'View data science portfolio' }} />
    </div>
  )
}

export default ResearchPage;
