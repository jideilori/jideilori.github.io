const portfolioData = {
  portfolio: {
    stacks: []
    //   {
    //     id: 'data_scientist',
    //     name: 'Data Scientist',
    //     languages: [
    //       {
    //         id: 'python',
    //         name: 'Python',
    //         imageSrc: 'images/projects/ability-design.png',
    //         imageAlt: 'Featured Python image',
    //         items: [
    //           {
    //             name: 'scikit-learn',
                
    //           },
    //           {
    //             name: 'scikit-learn',
                
    //           },
    //         ]
    //       },
          // {
          //   id: 'matlab',
          //   name: 'Matlab',
          //   imageSrc: 'images/projects/housezzy.png',
          //   imageAlt: 'Featured Matlab image',
          //   // items: [
          //   //   {
          //   //     name: 'Matlab sub tool one',
          //   //     href: '#',
          //   //     color: ''
          //   //   },
          //   //   {
          //   //     name: 'Matlab sub tool two',
          //   //     href: '#',
          //   //     color: ''
          //   //   }
          //   // ]
          // }    
        // ]
      // },
      // {
      //   id: 'computer_vision',
      //   name: 'Computer Vision',
      //   languages: [
      //     {
      //       id: 'pytorch',
      //       name: 'Pytorch',
      //       items: [
      //         {
      //           name: 'Tensorflow',
      //           href: '#',
      //           color: '',
      //           items: [
      //             {
      //               name: 'Tensorflow sub tool one',
      //               href: '#',
      //               color: ''
      //             },
      //             {
      //               name: 'Tensorflow sub tool two',
      //               href: '#',
      //               color: ''
      //             },
      //             {
      //               name: 'Tensorflow sub tool three',
      //               href: '#',
      //               color: ''
      //             }    
      //           ]
      //         }
      //       ]
      //     },
      //   ]
      // }
    // ]
  },
  projects: [
    {
      id: 'featured-projects',
      title: 'Featured projects',
      items: [
        {
          id: 'aerial-segmentation',
          name: 'Aerial Semantic Segmentation',
          url: 'https://github.com/jideilori/aerial_semantic_segmentation',
          image: 'images/projects/aerial.png',
          description: 'Built a semantic segmentation workflow for aerial imagery, combining custom OpenCV augmentation with a MobileNetV3-small U-Net architecture for low-data training.'
        }, {
          id: 'malaria-and-white-blood-cell-detection',
          name: 'Malaria Parasite Detector',
          url: 'https://github.com/jideilori/malaria_diag/',
          image: 'images/projects/malaria_demo_screenshot.png',
          description: 'Trained an object detection system to count malaria parasites and white blood cells, then packaged prediction behind a custom FastAPI service deployed with Docker on Google Cloud.'
        }, {
          id: 'license-plate-recognition-and-custom-ocr',
          name: 'License Plate Reader and Custom OCR',
          url: 'https://github.com/jideilori/ocr-ml',
          image: 'images/projects/ocr_ml.webp',
          description: 'Built the full ANPR pipeline for Nigerian plates, from data preparation and annotation tooling to object detection, custom OCR, and threshold adjustment with a regression model.'
        }, {
          id: 'face-recognition',
          name: 'Face Recognition and Tracking',
          url: 'https://github.com/jideilori/face-recognition',
          image: 'images/projects/result.gif',
          description: 'Developed a real-time face recognition workflow with multi-object tracking for continuous identity matching in video streams.'
        },{
          id: 'monocular-depth',
          name: 'Monocular Depth Estimation',
          url: 'https://github.com/jideilori/resnet_depthnet',
          image: 'images/projects/office_result.png',
          description: 'Implemented a custom ResNet18 encoder-decoder with skip connections for monocular depth estimation and trained it on the NYU-v2 dataset.'
        }
      ]
    }
  ],
  publications: [
    {
      id: 'publications',
      title: 'Selected publications',
      items: [
        {
          id: 'malaria-yolov12-publication',
          name: 'Performance Evaluation of YOLOv12 Models for Malaria Parasite and White Blood Cell Detection',
          url: 'https://hal.science/hal-05593373',
          image: 'images/publications/malaria-yolov12-paper.png',
          description: 'Peer-reviewed study evaluating YOLOv12 variants for malaria microscopy detection, with emphasis on robust counting performance and practical diagnosis support.'
        }, {
          id: 'xai-healthcare-review',
          name: 'Explainable AI: A Systematic Literature Review Focusing on Healthcare',
          url: 'https://pubs.sciepub.com/jcsa/12/1/2',
          image: 'images/publications/xai-healthcare-fig4.png',
          imageFit: 'contain',
          description: 'Systematic review of explainable AI methods in healthcare, covering interpretability trends, adoption concerns, and opportunities for trustworthy ML systems.'
        }, {
          id: 'smart-surveillance-system',
          name: 'Design and Implementation of a Smart Surveillance System',
          url: 'https://www.caeaccess.org/archives/volume7/number33/866-2019652855/',
          image: 'images/publications/smart-surveillance-paper.png',
          imageFit: 'contain',
          description: 'Engineering paper describing a Raspberry Pi-based surveillance system that combines sensing, RFID validation, and automated alerts for rapid incident response.'
        }
      ]
    }
  ],
  clients: [
    {
      name: 'Client name',
      image: 'images/clients/client-image.png',
      color: 'text-yellow-600',
      bgColor: 'bg-white',
      borderColor: 'border-yellow-500'
    }
  ]
}

export default portfolioData;
