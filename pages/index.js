import Head from "next/head";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reaveal, text_reaveal_fade } from "../utils/Animation";

const About = () => {
  const texts = [{ content: "Lovers" }, { content: "Learner" }];

  const textList = texts.map((text, index) => (
    <div className="overflow-hidden" key={index}>
      <motion.h1 variants={text_reaveal}>{text.content}</motion.h1>
    </div>
  ));

  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex"
      >
        <motion.div variants={container} className="md:w-1/2 lg:pl-36">
          {textList}
          <motion.p variants={text_reaveal_fade}>
            i am 23 years old Born in Surabaya i really like what i learn and learning is my hobby with my partner @Tuan_Putri <a className="text-third">ReactJS</a>,{" "}
            <a className="text-third">Kotlin</a> and{" "}
            <a className="text-third">Dart</a> .Web Designer By ariselroez_coming_soon.
          </motion.p>
        </motion.div>
        <div className="hidden md:block w-1/2">part 2</div>
      </motion.div>
    </>
  );
};

export default About;

About.Template = PageTemplate;
