
import { motion } from "framer-motion";
import about_illustration from '../images/about-illustration.svg'
const About = () => {
    
    return (
        <motion.div
        key={'about-animated'}
        exit={{ opacity:0 }}
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}>
        <div className="about-main-section-container">
            <div className="about-section about-section-2">
                <div className="about-section-2-left">
                <h1>nice to meet you!</h1><br/>
                    <h4>I'm Dekel,
a full-stack developer with a passion for creating digital wonders.<br/>
Recently after I finished my military service I completed a comprehensive full stack development bootcamp which provided me with hands on experience and allowed me to work on a variety of projects ✨<br/>

When it comes to coding, I thrive on the thrill of crafting innovative solutions. With a strong foundation in web development and expertise in JavaScript, Python, and frameworks like React and Django, I am well-equipped to conquer any coding challenge that comes my way.<br/>

But there's more to me than just coding! In my free time, you'll find me embracing the beauty of nature, breathing in the fresh air of the outdoors. Nature ignites my creativity and provides a unique perspective that I bring to my designs. 🌳🌄<br/>

I have a love for art. When I'm not immersed in lines of code, I indulge in various artistic endeavors. From sketching and painting to experimenting with digital art, I find a lot of joy in expressing myself creatively. This artistic passion adds a touch of uniqueness and attention to detail to the digital solutions I create. 🎨✨<br/>

I'm excited to learn about your project and how we can collaborate to bring your digital vision to life. Let's combine our passions and skills to create extraordinary experiences that leave a lasting impact! 🌟🚀</h4>
                </div>
                <div className="about-section-2-right">
                    <img src={about_illustration} alt="about illustration"/>
                </div>
            </div>
            <div className="about-section about-section-3">
            <i className='flower divider-flower-about'/>
            <div className="about-section-3-left">
                <h1>technologies i use ⚙</h1>
                <div className="chip-container">
                <span className="chip">python</span>
                <span className="chip">django</span>
                <span className="chip">javascipt</span>
                <span className="chip">html</span>
                <span className="chip">css</span>
                <span className="chip">react</span>
                <span className="chip">react native</span>
                <span className="chip">expo</span>
                <span className="chip">typescript</span>
                <span className="chip">redux</span>
                <span className="chip">sql</span>
                <span className="chip">postgres</span>
                <span className="chip">git</span>
                <span className="chip">github</span>
                <span className="chip">firebase</span>
                <span className="chip">express</span>
                <span className="chip">figma</span>
                <span className="chip">tailwind</span>
                <span className="chip">node.js</span>
                </div>
            </div>
            <div className="about-section-3-right">
            <h1>currently learning 👨‍💻</h1>
            <div className="chip-container">
            <span className="chip">next.js</span>
                </div>
            </div>
            
            </div>
           
        </div>
        </motion.div>
    )
};

export default About;