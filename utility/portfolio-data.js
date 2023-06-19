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
      // title: 'Featured Projects',
      items: [
        {
          id: 'aerial-segmentation',
          name: 'Aerial Segmentation',
          url: 'https://github.com/jideilori/aerial_semantic_segmentation',
          image: 'images/projects/aerial.png',
          description: 'Semantic Segmentation task with few images which were augmented using a custom opencv pipeline and trained using mobilenetv3small unet.'
        }, {
          id: 'malaria-and-white-blood-cell-detection',
          name: 'Malaria and white blood cell detection',
          url: 'https://github.com/jideilori/malaria_diag/',
          image: 'images/projects/malaria_demo_screenshot.png',
          description: 'In order to aid in the speedy diagnosis of malaria in thick blood smears, I developed this prototyped malaria parasite and white blood cell counter. - Hosted using Google cloud run.'
        }, {
          id: 'license-plate-recognition-and-custom-ocr',
          name: 'License plate Recognition & Custom OCR',
          url: 'https://github.com/jideilori/ocr-ml',
          image: 'images/projects/ocr_ml.webp',
          description: 'An OCR for license plate using HOG and Logistic regression. Developed the complete pipeline from getting images, preprocessing to training the object detector and ocr.'
        }, {
          id: 'face-recognition',
          name: 'Face-recognition',
          url: 'https://github.com/jideilori/face-recognition',
          image: 'images/projects/result.gif',
          description: 'Real time face recognition with multiple object tracking'
        }
      ]
    }
  ],
  publications: [
    {
      id: 'publications',
      title: 'Featured articles',
      items: [
        {
          id: 'beyond-rgb-in-image-classification',
          name: 'Beyond RGB in Image classification',
          url: 'https://jideilori.medium.com/beyond-rgb-in-image-classification-293e14737509',
          image: 'images/publications/beyond_rgb.webp',
          description: 'Compared the effect of different color spaces and normalization techniques on image classification tasks. The results may surprise you. :-)'
        }, {
          id: 'deploying-opencv-web-application-on-heroku',
          name: 'Deploying Opencv Web Application On Heroku',
          url: 'https://jideilori.medium.com/deploying-your-opencv-flask-web-application-on-heroku-c23efcceb1e8',
          image: 'images/publications/deploy_opencv_heroku.webp',
          description: 'Detailed explanation on how to deploy your opencv web application on Heroku.'
        }, {
          id: 'custom-ocr',
          name: 'Custom OCR',
          url: 'https://jideilori.medium.com/ocr-with-machine-learning-55c7d082fe78',
          image: 'images/publications/ocr_ml.png',
          description: 'How i developed my custom ocr for license plate recognition.'
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