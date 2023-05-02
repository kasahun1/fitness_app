import { Header } from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos obcaecati
        modi velit labore cupiditate sint ex aut molestiae at debitis?
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              omnis magni ea maxime et, iste reiciendis quas tenetur, enim
              deleniti quod illo deserunt cum fuga aperiam obcaecati placeat
              voluptatum vero accusamus recusandae suscipit amet asperiores vel
              fugit! Reprehenderit, accusamus ipsa?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              natus fugiat dicta ullam, placeat eligendi excepturi debitis
              consequuntur magni exercitationem!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              optio sint, voluptatem inventore qui voluptate?
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              omnis magni ea maxime et, iste reiciendis quas tenetur, enim
              deleniti quod illo deserunt cum fuga aperiam obcaecati placeat
              voluptatum vero accusamus recusandae suscipit amet asperiores vel
              fugit! Reprehenderit, accusamus ipsa?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              natus fugiat dicta ullam, placeat eligendi excepturi debitis
              consequuntur magni exercitationem!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              omnis magni ea maxime et, iste reiciendis quas tenetur, enim
              deleniti quod illo deserunt cum fuga aperiam obcaecati placeat
              voluptatum vero accusamus recusandae suscipit amet asperiores vel
              fugit! Reprehenderit, accusamus ipsa?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              natus fugiat dicta ullam, placeat eligendi excepturi debitis
              consequuntur magni exercitationem!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              optio sint, voluptatem inventore qui voluptate?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
