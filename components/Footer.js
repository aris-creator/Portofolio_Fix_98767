import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin , AiOutlineFacebook ,AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      style={{ height: "10vh" }}
      className="px-10 flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-center"
    >
      <ul className="flex flex-col text-center sm:flex-row">
        <li>
          <p className="mr-2.5 lg:mr-10">Aris Prasetyo </p>
        </li>
      </ul>
      <ul className="flex text-center ">
        <p className="mr-2.5 lg:mr-10">
          <Link href="https://www.linkedin.com/in/aris-prasetyo-667a2119a">
            <AiOutlineGithub size={25} />
          </Link>
        </p>
        <p className="mr-2.5 lg:mr-10">
          <Link href="https://github.com/web-development">
            <AiOutlineLinkedin size={25} />
          </Link>
        </p>
        <p className="mr-2.5 lg:mr-10">
          <Link href="https://m.facebook.com/ulfa.imuetzclalu?tsid=0.07976542483245219&source=result">
            <AiOutlineFacebook size={25} />
          </Link>
        </p>
        <p className="mr-2.5 lg:mr-10">
          <Link href="https://www.instagram.com/arisprasetiyo/">
            <AiOutlineInstagram size={25} />
          </Link>
        </p>
      </ul>
    </div>
  );
};

export default Footer;
