import image1 from "../Assets/author-img.jpg";
import image2 from "../Assets/contact-img.jpg";
import image3 from "../Assets/about-story.jpg";
import image4 from "../Assets/blog-img4.jpg";
import image5 from "../Assets/project-img4.jpg";

const storyData = {
  title: "How I became a Web Developer",
  subtitle:
    "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec.",
  author: {
    name: "Amara Lune",
    date: "16 May 2025",
    image: image1,
  },
  images: [
    {
      src: image2,
      alt: "Profile image of Amara Lune, a web developer",
    },
    {
      src: image3,
      alt: "Amara’s workspace setup reflecting her journey",
    },
    {
      src: image4,
      alt: "Amara working on a blog post about her journey",
    },
    {
      src: image5,
      alt: "Snapshot of Amara’s work environment and style",
    },
  ],

  description: `Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
    venenatis vitae, justo.`,

  sections: [
    {
      sectionTitle: "Me in a Nutshell",
      sectionDescriptions: [
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eum.enean massa.",
        "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
      ],
    },
    {
      sectionTitle: "How I got into Design",
      sectionDescriptions: [
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eum.enean massa.",
        "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
      ],
    },
  ],
};

export default storyData;
