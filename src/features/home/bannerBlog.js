// import "./bannerBlog.css";
// import { BlogsData, BlogsIntro } from "../../config/blogs.config";
// import { motion } from "framer-motion";
// import Card from "../../shared/components/card/Card";

// import {
//   containerStagger,
//   fadeUpItem,
// } from "../../shared/components/FramerVariants";
// import SectionHeader from "../../shared/components/SectionHeader/SectionHeader";

// function BannerBlog() {
//   const [featured, ...others] = BlogsData;

//   return (
//     <section className="home-blogs-section-" aria-labelledby="blog-heading">
//       <motion.div
//         variants={fadeUpItem}
//         initial="initial"
//         whileInView="animate"
//         viewport={{ once: true, amount: 0.6 }}
//       >
//         <SectionHeader
//           title={BlogsIntro.homeHeading.start}
//           highlight={BlogsIntro.homeHeading.highlight}
//         />
//       </motion.div>

//       <motion.div
//         className="home-blog-inner-container"
//         variants={containerStagger}
//         initial="initial"
//         whileInView="animate"
//         viewport={{ once: true, amount: 0.4 }}
//       >
//         {[featured, ...others.slice(0, 3)].map((post, index) => (
//           <Card
//             key={index}
//             title={post.title}
//             description={post.date}
//             image={post.image}
//             link={post.link}
//             linkLabel="Read"
//             variants={fadeUpItem}
//             type="hover-arrow"
//           />
//         ))}
//       </motion.div>
//     </section>
//   );
// }

// export default BannerBlog;
