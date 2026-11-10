export interface BlogPost {
  slug: string;
  id: string; // e.g. "001", "002"
  title: string;
  tag: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  heroImage: string;
  leadParagraph: string;
  sections: Array<{
    heading: string;
    content: string;
    image?: string;
  }>;
  conclusion: string;
}

export const blogs: BlogPost[] = [
  {
    "slug": "learn-to-code-beginners-edition",
    "id": "001",
    "title": "Learn to Code: Beginner's Edition",
    "tag": "Programming",
    "date": "March 11, 2023",
    "author": {
      "name": "Durjoy Barua",
      "role": "FullStack Developer",
      "avatar": "/images/Q8kbwcH/durjoy.jpg"
    },
    "heroImage": "/images/m8ZppcR/2.jpg",
    "leadParagraph": "Are you interested in learning how to code, but don't know where to start? The world of programming can seem daunting to beginners, with its unfamiliar jargon and seemingly endless variety of languages and frameworks. But fear not! With a bit of guidance and a lot of practice, anyone can learn to code. Here are four key points to consider as you begin your journey as a beginner coder:",
    "sections": [
      {
        "heading": "1. Choose a language and stick with it",
        "content": "There are dozens of programming languages to choose from, each with its own syntax and features. As a beginner, it's best to start with a language that's widely used and has a supportive community. Some popular options include Python, JavaScript, and Ruby. Once you've chosen a language, stick with it and focus on learning its fundamentals. Don't be tempted to jump from language to language too quickly, as this can be overwhelming and counterproductive",
        "image": "/images/2v2ZB2K/3.jpg"
      },
      {
        "heading": "2. Practice, practice, practice",
        "content": "As with any skill, the key to becoming a good programmer is to practice regularly. Start with simple exercises and gradually work your way up to more complex projects. There are many online resources available that provide coding challenges and exercises, such as HackerRank and Codewars. You can also practice by building your own projects, such as a website or a small game. The more you practice, the more comfortable you'll become with the language and the better your coding skills will become",
        "image": "/images/nrQZkZB/4.png"
      },
      {
        "heading": "3. Learn from others",
        "content": "Coding can be a solitary activity, but that doesn't mean you have to learn alone. Join online communities and forums where you can ask questions, get feedback on your code, and learn from more experienced programmers. Sites like Stack Overflow and GitHub are great resources for connecting with other coders and learning from their code. You can also attend coding meetups and conferences to network with other programmers in person.",
        "image": "/images/SVvvCcM/5.jpg"
      },
      {
        "heading": "4. Have fun!",
        "content": "Learning to code can be challenging, but it can also be incredibly rewarding. Don't forget to have fun and enjoy the process! Try to approach coding with a sense of curiosity and playfulness, and don't be afraid to experiment with new ideas and approaches. If you find yourself getting frustrated, take a break and come back to it later with a fresh perspective.",
        "image": "/images/mDb8D6B/6.jpg"
      }
    ],
    "conclusion": "Learning to code can be a fulfilling and empowering experience, even for beginners. By choosing a language, practicing regularly, learning from others, and having fun, you can become a proficient programmer in no time. Don't be intimidated by the world of coding \u2013 with dedication and persistence, anyone can learn to code."
  },
  {
    "slug": "4-key-points-in-data-science",
    "id": "002",
    "title": "4 Key Points in Data Science",
    "tag": "Data Science",
    "date": "March 09, 2023",
    "author": {
      "name": "Durjoy Barua",
      "role": "FullStack Developer",
      "avatar": "/images/Q8kbwcH/durjoy.jpg"
    },
    "heroImage": "/images/TqBPwg1/data.jpg",
    "leadParagraph": "Data Science is a rapidly growing field that involves extracting insights and knowledge from large and complex datasets. With the increasing amount of data being generated every day, data science has become an integral part of many businesses and industries. In this blog, we will discuss four important points that you need to know about data science.",
    "sections": [
      {
        "heading": "1. Importance of Data Cleaning:",
        "content": "Data cleaning is an essential process in data science. It involves identifying and correcting errors, inconsistencies, and missing values in the data. The quality of the data determines the accuracy of the results obtained from the analysis. Therefore, it is crucial to ensure that the data is cleaned properly before performing any analysis. Data cleaning can be time-consuming, but it is a necessary step in data science.",
        "image": "/images/jW8RgJP/databaseadmin-2.jpg"
      },
      {
        "heading": "2. Machine Learning",
        "content": "Machine learning is a subset of artificial intelligence that involves building algorithms that can learn from data and make predictions or decisions without being explicitly programmed. It is used in various applications, such as image recognition, speech recognition, and natural language processing. Machine learning algorithms can be supervised, unsupervised, or semi-supervised, depending on the availability of labeled data. With the increasing availability of data and computing power, machine learning has become an important tool in data science.",
        "image": "/images/QkpqT4n/3033279.jpg"
      },
      {
        "heading": "3. Data Visualization",
        "content": "Data visualization is the process of representing data in a graphical or pictorial form. It helps in understanding complex data and communicating insights effectively. Data visualization can be used to identify patterns, trends, and outliers in the data. It is an important step in data analysis and can help in making informed decisions. There are various tools available for data visualization, such as Tableau, Power BI, and matplotlib.",
        "image": "/images/30PbG12/5031659.jpg"
      },
      {
        "heading": "4. Ethics in Data Science",
        "content": "Data science involves dealing with large amounts of data that can be personal and sensitive. Therefore, it is important to ensure that ethical considerations are taken into account while working with data. This includes obtaining consent from the data subjects, protecting the privacy of the data, and ensuring that the data is used for legitimate purposes. Ethical considerations are important in building trust with the data subjects and maintaining the integrity of the data science field.",
        "image": "/images/7XymPQ6/4674949.jpg"
      }
    ],
    "conclusion": "Data science is an exciting field that offers endless opportunities for exploring and discovering insights from data. The four points discussed in this blog are essential for anyone who wants to get started in data science. Data cleaning, machine learning, data visualization, and ethics are important considerations that can help in producing accurate and meaningful insights from data. With the increasing amount of data being generated every day, data science will continue to play an important role in shaping the future."
  },
  {
    "slug": "key-points-of-web-development",
    "id": "003",
    "title": "Key Points of Web Development",
    "tag": "Web Development",
    "date": "May 11, 2023",
    "author": {
      "name": "Durjoy Barua",
      "role": "FullStack Developer",
      "avatar": "/images/Q8kbwcH/durjoy.jpg"
    },
    "heroImage": "/images/M2KvjPp/18824957.jpg",
    "leadParagraph": "Web development is the process of creating and maintaining websites, web applications, and other online solutions. It involves a wide range of skills and technologies, including HTML, CSS, JavaScript, and backend programming languages. In this blog post, we will discuss the key points of web development and its significance.",
    "sections": [
      {
        "heading": "1. Front-End Development:",
        "content": "Front-end development is the process of creating the user interface and experience of a website. This includes designing layouts, implementing user interactions, and optimizing performance. Front-end developers use a variety of tools and technologies, including HTML, CSS, and JavaScript.",
        "image": "/images/9bgTQVn/3426526.jpg"
      },
      {
        "heading": "2. Back-End Development:",
        "content": "Back-end development is the process of creating the server-side components of a website. This includes creating and managing databases, implementing APIs, and handling server requests. Back-end developers use a variety of programming languages, such as PHP, Python, and Ruby.",
        "image": "/images/bs4zc20/backend-1.jpg"
      },
      {
        "heading": "3. Full-Stack Development:",
        "content": "Full-stack development involves both front-end and back-end development. Full-stack developers are responsible for designing and implementing both the user interface and the server-side components of a website. Full-stack development requires a broad range of skills and knowledge, including database management, server administration, and user experience design.",
        "image": "/images/rQ3fcVX/4884785.jpg"
      },
      {
        "heading": "4. Content Management Systems (CMS):",
        "content": "Content management systems are software applications that allow users to create and manage website content without requiring extensive technical knowledge. Popular CMS platforms include WordPress, Drupal, and Joomla. CMS systems are often used in web development to simplify the process of website creation and maintenance.",
        "image": "/images/grwtVPR/4855307.jpg"
      },
      {
        "heading": "5. Web Development Frameworks:",
        "content": "Web development frameworks are pre-built libraries and tools that provide developers with a standardized set of features and functionality. This helps to speed up development time and ensure consistency across projects. Popular web development frameworks include React, Angular, and V",
        "image": "/images/rycm16G/19198999.jpg"
      }
    ],
    "conclusion": "Web development is a complex and rapidly evolving field that requires a diverse set of skills and technologies. The key points of web development include front-end development, back-end development, full-stack development, content management systems, and web development frameworks. By leveraging these tools and techniques, web developers can create high-quality websites and online solutions that meet the needs of businesses and organizations."
  },
  {
    "slug": "essentials-of-mobile-development",
    "id": "004",
    "title": "The Essentials of Mobile Development",
    "tag": "Mobile Development",
    "date": "Feb 11, 2023",
    "author": {
      "name": "Durjoy Barua",
      "role": "FullStack Developer",
      "avatar": "/images/Q8kbwcH/durjoy.jpg"
    },
    "heroImage": "/images/Xb7jWNp/5006157.jpg",
    "leadParagraph": "Mobile development is the process of creating applications that run on mobile devices, such as smartphones and tablets. Mobile development requires a wide range of skills and technologies, including programming languages, app design, and user experience. In this blog post, we will discuss the key points of mobile development and its significance.",
    "sections": [
      {
        "heading": "1. Native App Development:",
        "content": "Native app development involves creating applications that are specifically designed for a particular operating system, such as Android or iOS. Native apps are known for their fast performance and robust functionality. Native app development requires a deep understanding of the target platform, as well as programming languages such as Java, Kotlin, and Swift.",
        "image": "/images/0rk7Xy6/5035108.jpg"
      },
      {
        "heading": "2. Cross-Platform App Development:",
        "content": "Cross-platform app development involves creating applications that can run on multiple operating systems using a single codebase. This approach allows developers to save time and resources by avoiding the need to write separate code for each platform. Popular cross-platform development frameworks include React Native, Xamarin, and Flutter.",
        "image": "/images/rGjWNgH/58343.jpg"
      },
      {
        "heading": "3. User Experience Design:",
        "content": "User experience design is a critical component of mobile development. Good UX design helps to ensure that users can easily navigate and interact with an application, leading to increased user satisfaction and retention. UX design involves creating wireframes, mockups, and prototypes, as well as conducting user testing.",
        "image": "/images/R9Mc6xX/111.jpg"
      },
      {
        "heading": "4.Backend Development:",
        "content": "Backend development involves creating the server-side components of a mobile application, such as databases and APIs. Backend development is essential for providing data storage, authentication, and other critical functionality. Popular backend development languages include Node.js, Ruby on Rails, and Python.",
        "image": "/images/MgXMQnp/111-1.jpg"
      },
      {
        "heading": "5.App Store Optimization:",
        "content": "App store optimization (ASO) is the process of optimizing a mobile app to rank higher in app store search results. This involves optimizing keywords, app descriptions, and other factors that affect app store rankings. ASO is an essential part of mobile development, as it helps to increase visibility and downloads.",
        "image": "/images/rycm16G/19198999.jpg"
      }
    ],
    "conclusion": "Mobile development is a complex and rapidly evolving field that requires a diverse set of skills and technologies. The key points of mobile development include native app development, cross-platform app development, user experience design, backend development, and app store optimization. By leveraging these tools and techniques, mobile developers can create high-quality applications that meet the needs of businesses and users."
  },
  {
    "slug": "essentials-of-photography",
    "id": "005",
    "title": "Exploring the Essentials of Photography",
    "tag": "Photography",
    "date": "March 1, 2023",
    "author": {
      "name": "Durjoy Barua",
      "role": "FullStack Developer",
      "avatar": "/images/Q8kbwcH/durjoy.jpg"
    },
    "heroImage": "/images/rZswsNF/professional-camera-blurred.jpg",
    "leadParagraph": "Photography is the art and science of capturing images using a camera. Photography has been around for over 200 years, and it has evolved significantly since the first camera was invented. Today, photography is a popular hobby and profession, and it is used in a wide range of fields, including advertising, journalism, and art. In this blog post, we will explore the key points of photography and its significance.",
    "sections": [
      {
        "heading": "1. Composition:",
        "content": "Composition is the art of arranging the elements in a photograph in a way that creates a visually pleasing image. Composition involves factors such as framing, angles, and balance. Good composition can make an ordinary photograph look extraordinary.",
        "image": "/images/7JTvHHb/top-view-autumn-leaves-with-photos-camera.jpg"
      },
      {
        "heading": "2. Lighting:",
        "content": "Lighting is a critical component of photography. The way a subject is lit can significantly affect the mood and tone of a photograph. Lighting involves factors such as the direction of light, the intensity of light, and the quality of light.",
        "image": "/images/kmRqDDy/1163.jpg"
      },
      {
        "heading": "3. Camera Settings:",
        "content": "Understanding camera settings is essential for taking high-quality photographs. Camera settings include aperture, shutter speed, and ISO. Aperture controls the amount of light entering the lens, shutter speed controls the duration of the exposure, and ISO controls the sensitivity of the camera to light.",
        "image": "/images/7gGG2Ng/sl-121019-25870-83.jpg"
      },
      {
        "heading": "4. Editing:",
        "content": "Editing is the process of post-processing a photograph to enhance its visual appeal. Editing involves adjusting factors such as brightness, contrast, and color balance. Editing can also involve cropping and removing unwanted elements from a photograph.",
        "image": "/images/rxMg40Q/empty-modern-creative-agency-office-with-dual-monitors-setup-with-processing-video-film-montage-vide.jpg"
      },
      {
        "heading": "5. Photography Styles:",
        "content": "There are many different styles of photography, including portrait, landscape, and street photography. Each style has its own unique characteristics and requires a different set of skills.",
        "image": "/images/c1PvhB4/medium-shot-man-wearing-hat-23-2149126957.jpgg"
      }
    ],
    "conclusion": "Photography, the art and science of capturing images, has evolved significantly over two centuries. Its significance lies in freezing moments, conveying emotions, documenting reality, and inspiring creativity. From a popular hobby to a powerful tool in advertising, journalism, and art, photography plays a vital role in our lives. Its accessibility and impact in the digital age make it an invaluable medium of self-expression and storytelling."
  },
  {
    "slug": "essentials-of-art-and-design",
    "id": "006",
    "title": "The Essentials of Art and Design",
    "tag": "Art & Design",
    "date": "March 11, 2023",
    "author": {
      "name": "Durjoy Barua",
      "role": "FullStack Developer",
      "avatar": "/images/Q8kbwcH/durjoy.jpg"
    },
    "heroImage": "/images/4MYp9Z4/vibrant-yellow-peony-bouquet-symbolizes-spring-freshness-generated-by-ai-188544-11712.jpg",
    "leadParagraph": "Art and design are forms of creative expression that have been a part of human culture for thousands of years. Art and design encompass a wide range of disciplines, including painting, sculpture, graphic design, fashion design, and architecture. In this blog post, we will explore the key points of art and design and their significance.",
    "sections": [
      {
        "heading": "1. Creativity:",
        "content": "Creativity is the foundation of art and design. Creativity involves the ability to think outside the box and come up with original ideas. Creativity is essential for artists and designers to create works that are innovative and unique.",
        "image": "/images/n7HHJTz/colorful-painting-with-brush-it-1340-32188.jpg"
      },
      {
        "heading": "2. Composition:",
        "content": "Composition is the arrangement of elements in a work of art or design. Composition involves factors such as balance, contrast, and visual flow. Good composition is essential for creating works that are aesthetically pleasing and effective.",
        "image": "/images/6XTmtVk/colorful-paper-art-piece-that-has-word-it-1340-35458.jpg"
      },
      {
        "heading": "3. Color Theory:",
        "content": "Color theory is the study of how colors interact with each other. Color theory involves understanding concepts such as color temperature, color harmony, and color psychology. Color theory is critical for artists and designers to create works that effectively communicate their intended message.",
        "image": "/images/6PKX1LK/collection-colored-pencils-drawing-lemon-1340-29087.jpg"
      },
      {
        "heading": "4. Materials and Tools:",
        "content": "Materials and tools are essential for creating works of art and design. Different materials and tools have unique properties and require different techniques to work with. Understanding how to use materials and tools effectively is essential for artists and designers to bring their ideas to life.",
        "image": "/images/Ny9pkWy/colorful-set-items-including-pencil-notebook-pencil-marker-1340-29059.jpg"
      },
      {
        "heading": "5. History and Context:",
        "content": "Art and design are influenced by historical and cultural contexts. Understanding the history and context of art and design can help artists and designers create works that are culturally relevant and meaningful.",
        "image": "/images/Nt1NfyD/handcrafted-memories-captured-photo-album-generated-by-ai-188544-10901.jpg"
      }
    ],
    "conclusion": "Art and design are essential forms of creative expression that have shaped human culture for centuries. The key points of art and design include creativity, composition, color theory, materials and tools, and history and context. By mastering these essential skills and techniques, artists and designers can create works that are innovative, aesthetically pleasing, and culturally significant."
  },
  {
    "slug": "one-stop-learning-destination",
    "id": "007",
    "title": "Your One-Stop Learning Destination: Courses, Videos, and Tutorials",
    "tag": "Education",
    "date": "March 11, 2023",
    "author": {
      "name": "Durjoy Barua",
      "role": "FullStack Developer",
      "avatar": "/images/Q8kbwcH/durjoy.jpg"
    },
    "heroImage": "/images/R0gg08z/29493.jpg",
    "leadParagraph": "Our website is an online learning platform that provides free courses and tutorials on a variety of topics, including programming, CSS, Photoshop, and more. Our mission is to make learning accessible and easy for anyone, regardless of their skill level or experience. In this blog post, we will explore the key features of our website and the benefits of using our platform.",
    "sections": [
      {
        "heading": "1. Comprehensive Library:",
        "content": "Our website offers a comprehensive library of courses and tutorials on a wide range of topics. Whether you are a beginner or an expert, you can find courses that match your skill level and interests.",
        "image": "/images/NxWk8hp/people-education-online-with-computer-illustration-design-24877-63616.jpg"
      },
      {
        "heading": "2. User-Friendly Platform:",
        "content": "Our website is designed to be user-friendly and easy to navigate. You can access courses and tutorials with just a few clicks, and our intuitive interface makes it easy to find what you are looking for.",
        "image": "/images/ws12Qt4/visual-teenager-reading-book-mobile-phone-educate-learing-online-concept-design-isometric-illustrati.jpg"
      },
      {
        "heading": "3. Free Access:",
        "content": "All of our courses and tutorials are available for free, which means that anyone can access them without having to pay a dime. We believe that education should be accessible to everyone, and our platform reflects that commitment.",
        "image": "/images/Z1wjYL2/media-content-management-vlogging-activities-product-videos-sharing-online-marketing-advertising-too.jpg"
      },
      {
        "heading": "4. Quality Content:",
        "content": "Our courses and tutorials are created by experts in their respective fields. We ensure that all of our content is of the highest quality, so you can be confident that you are learning from the best.",
        "image": "/images/1Kmz97y/student-girl-with-laptop-dreams-diploma-255494-102.jpg"
      },
      {
        "heading": "5. Flexibility:",
        "content": "Our website offers flexibility in terms of when and where you can learn. You can access our courses and tutorials from anywhere, at any time, and on any device. This means that you can learn at your own pace, according to your own schedule.",
        "image": "/images/FHTWv61/social-network-teamwork-vector-concept-81522-387.jpg"
      }
    ],
    "conclusion": "Our website is a valuable resource for anyone who wants to learn new skills or improve their existing ones. With our comprehensive library, user-friendly platform, free access, quality content, and flexibility, we make learning easy and accessible for everyone. Start exploring our courses and tutorials today, and unlock your potential to become a pro in no time!"
  },
  {
    "slug": "online-education-for-kids",
    "id": "008",
    "title": "Unlocking the Benefits of Online Education for Kids",
    "tag": "Education",
    "date": "May 1, 2023",
    "author": {
      "name": "Durjoy Barua",
      "role": "FullStack Developer",
      "avatar": "/images/Q8kbwcH/durjoy.jpg"
    },
    "heroImage": "/images/Ns5tpKx/mjtt-gmi7-210901.jpg",
    "leadParagraph": "Online education has become an increasingly popular option for parents who want to provide their children with quality education from the comfort of their own homes. With the rise of technology, kids can now access a wide range of educational resources and courses online. In this blog post, we will explore the benefits of online education for kids and how it can help them thrive academically.",
    "sections": [
      {
        "heading": "1. Flexibility:",
        "content": "Online education offers parents and children the flexibility to learn at their own pace and on their own schedule. This means that kids can learn when they are most alert and focused, rather than being constrained by a fixed classroom schedule.",
        "image": "/images/Jkqtv1W/cvnn-5eqa-220905.jpg"
      },
      {
        "heading": "2. Personalized Learning:",
        "content": "Online education allows for personalized learning, where each child can learn according to their own strengths, weaknesses, and learning style. This tailored approach can help kids achieve their full potential and excel academically.",
        "image": "/images/kxTxqV2/ata4-c3te-220905.jpg"
      },
      {
        "heading": "3. Wide Range of Resources:",
        "content": "Online education provides access to a wide range of educational resources and courses that may not be available in traditional classrooms. Kids can explore different subjects and topics that interest them, and learn in a way that suits their individual needs.",
        "image": "/images/TMHyBTR/nytf-miov-210901.jpg"
      },
      {
        "heading": "4. Safe Learning Environment:",
        "content": "Online education provides a safe learning environment for kids, free from distractions and negative influences. Parents can rest assured that their children are learning in a secure and supportive environment.",
        "image": "/images/nwSf6vH/51825.jpg"
      },
      {
        "heading": "5. Interactive Learning:",
        "content": "Online education offers interactive learning opportunities, where kids can engage with teachers and other students in real-time. This can help them develop communication and collaboration skills, which are essential for their future academic and professional success.",
        "image": "/images/rynMGYg/3702965.jpg"
      }
    ],
    "conclusion": "In conclusion, online education offers numerous benefits for kids, including flexibility, personalized learning, access to a wide range of resources, a safe learning environment, and interactive learning opportunities. As parents, it's important to explore different options and find the best educational resources for our children. With online education, kids can thrive academically and develop essential skills that will serve them well throughout their lives."
  },
  {
    "slug": "time-management-strategies",
    "id": "009",
    "title": "Time Management: Strategies for Utilizing Your Time Effectively",
    "tag": "Productivity",
    "date": "April 11, 2023",
    "author": {
      "name": "Durjoy Barua",
      "role": "FullStack Developer",
      "avatar": "/images/Q8kbwcH/durjoy.jpg"
    },
    "heroImage": "/images/bHPrnpn/4903406.jpg",
    "leadParagraph": "Time is a valuable resource, and how we utilize it can determine our success in life. We all have 24 hours in a day, but some people seem to accomplish more than others. In this blog post, we will explore some tips and strategies for utilizing our time effectively and achieving our goals.",
    "sections": [
      {
        "heading": "1. Set Priorities:",
        "content": "Start by identifying your most important tasks and setting priorities. Focus on completing the tasks that will have the greatest impact on your goals and objectives.",
        "image": "/images/3zP4yxB/45227.jpg"
      },
      {
        "heading": "2. Create a Schedule:",
        "content": "Create a schedule for your day, week, or month, and stick to it as much as possible. This will help you stay on track and make the most of your time",
        "image": "/images/pw53Tww/6234265.jpg"
      },
      {
        "heading": "3. Eliminate Distractions:",
        "content": "Identify the things that distract you the most and try to eliminate them. This might include turning off your phone, closing your email, or finding a quiet space to work.",
        "image": "/images/WsmpnMH/3681597.jpg"
      },
      {
        "heading": "4. Take Breaks:",
        "content": "It's important to take regular breaks to avoid burnout and maintain productivity. This might include going for a walk, doing some stretching exercises, or taking a power nap.",
        "image": "/images/MSGv6KS/4436053.jpg"
      },
      {
        "heading": "5. Learn to Say No:",
        "content": "Saying no to unnecessary commitments can free up more time for the things that matter most. Be selective about the tasks and projects you take on, and focus on those that align with your goals.",
        "image": "/images/mF2Wv6N/4097791.jpg"
      },
      {
        "heading": "6. Delegate Tasks:",
        "content": "If possible, delegate tasks to others to free up more time for the things that require your attention. This might include hiring a virtual assistant or delegating tasks to colleagues or family members.",
        "image": "/images/q9SZMj4/2109-q708-020-S-m012-c10-politicians-round-table-flat.jpg"
      }
    ],
    "conclusion": "In conclusion, utilizing our time effectively is essential for achieving our goals and living a fulfilling life. By setting priorities, creating a schedule, eliminating distractions, taking breaks, learning to say no, and delegating tasks, we can make the most of our time and achieve greater success. It's important to remember that time is a limited resource, and we must use it wisely to make the most of our lives."
  }
];

export function getAllBlogs(): BlogPost[] {
  return blogs;
}

export function getBlogById(id: string): BlogPost | undefined {
  return blogs.find((blog) => blog.id === id);
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogs.map((blog) => blog.slug);
}
