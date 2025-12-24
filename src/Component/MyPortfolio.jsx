import React, { useEffect } from 'react'
import { FaLinkedinIn, } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const MyPortfolio = () => {

  const heading = {
    backgroundImage: "url('/Images/chex.png')"
  }

  const about = {
    backgroundImage: "url('/Images/aboutImage.jpeg')"
  }

  return (
    <div className='wrapper_outer'>

      {/* Home Section */}
      <div id="1" className='paralla_Section'>
        <div className='paralex-bg' style={heading}></div>
        <div className='dp'>
          <img className='my_dp' src='./Images/sarat.jpg' alt="profile" />
        </div>
        <div className='myname'>
          <h1 className='full-h1'>Hi, I'm Sarat Swain</h1>
        </div>
        <div className='prof'>
          <h4>MERN STACK DEVELOPER</h4>
        </div>
        <div className='fullbtn'>
          <a href='#4'><button className='dpbtn'>View My Work</button></a>
        </div>
      </div>

      {/* About Section */}
      <div id="2" className='parallax_Section'>
        <div className='paralex-bg' style={about}></div>
        <h2 className='abou-h'>About Me</h2>
        <div className='abo-box'>
          <div>
            <img src='./Images/aboutImage.jpeg' alt="about" />
          </div>

          <div >

            <p className='about-text'>My name is Sarat Swain, and I am currently pursuing a Master of Computer Applications (MCA) at GIFT Autonomous College, Bhubaneswar, affiliated with Biju Patnaik University of Technology (BPUT). I have completed a MERN Stack Developer Internship at Robogenesis, Bhubaneswar, from May 2025 to July 2025, where I gained hands-on experience in full-stack web development.I completed my graduation in Computer Science from Salipur Autonomous College, Salipur in the academic year 2024, securing 75%. I completed my Intermediate (+2 Science) from Tarini +2 Science Residential College, Kendrapara, under the CHSE board in 2021, with 71%, and my Matriculation from Janashakti Nodal High School, Kendrapara, under the BSE board, in 2019, with 70%.

I have strong technical skills in web development, including HTML, CSS, JavaScript, React, and backend technologies such as Node.js, Express.js, and MongoDB. In addition, I have working knowledge of .NET and Java Full Stack Development, along with database management systems like SQL and MongoDB.

My short-term goal is to become a Full Stack Developer, and my long-term goal is to work in a reputed IT company where I can continuously enhance my skills and contribute to impactful projects. My strengths include being a quick learner and having a strong passion for frontend technologies. My hobbies include trading and market analysis.

Thank you. </p>

          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id='3' >
        <div className='parallax_Section'>
          {/* <div className='paralex-bgt'></div> */}
          <div className='box'>
            <h2 className='sk'>Skills</h2>
            <div className="skills-container">
              <a className='x' href='https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML'>
                <div className='s-img'><img src='./Images/html.png' className='img' alt="node" />HTML</div></a>
              <a className='x' href='https://www.tpointtech.com/css-tutorial'>
                <div className='s-img'><img src='./Images/css.jpg' className='img' alt="node" />CSS</div></a>
              <a className='x' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
                <div className='s-img'><img src='./Images/js.png' className='img' alt="node" height="61px" />JavaScript</div></a>
              <a className='x' href='https://react.dev/'>
                <div className='s-img'><img src='./Images/react.png' className='img' alt="react" />React</div></a>
              <a className='x' href='https://www.geeksforgeeks.org/mongodb/what-is-mongodb-working-and-features/'>
                <div className='s-img'><img src='./Images/mongo.png' className='img' alt="mongo" />MongoDB</div>
              </a>
              <a className='x' href='https://expressjs.com/'>
                <div className='s-img'><img src='./Images/express.png' className='img' alt="express" />Express</div></a>
              <a className='x' href='https://nodejs.org/en/learn/getting-started/introduction-to-nodejs'>
                <div className='s-img'><img src='./Images/node.png' className='img' alt="node" />Node.js</div></a>
                 <a className='x' href='https://www.mysql.com/'>
                <div className='s-img'><img src='./Images/c.jpg' className='img' alt="C" />Language</div></a>
                <a className='x' href='https://www.tpointtech.com/'>
                <div className='s-img'><img src='./Images/java.jpg' className='img' alt="java" />JAVA</div></a>
                <a className='x' href='https://www.mysql.com/'>
                <div className='s-img'><img src='./Images/mysql.jpg' className='img' alt="sql" />SQL</div></a>
                <a className='x' href='https://dotnet.microsoft.com/en-us/'>
                <div className='s-img'><img src='./Images/net.jpg' className='img' alt=".net" />.NET</div></a>
                <a className='x' href='https://www.w3schools.com/cs/index.php'>
                <div className='s-img'><img src='./Images/c1.jpg' className='img' alt="c" />C#</div></a>
                 <a className='x' href='https://www.geeksforgeeks.org/java/introduction-java-servlets/'>
                <div className='s-img'><img src='./Images/servlet.jpg' className='img' alt="Servlet" /> Servlet</div></a>



            </div>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div id='4' className='parallax_Section'>
        {/* <div className='paralex-bgf'></div> */}
        <h2 className='this' >Projects</h2>
        <div className="projects-container">
          {/* 1st project--------------- */}

           <div className='cart' >
              <img className='image' src='./Uploads/Aptitute-Test.webp'  />

              <h4>Aptitude Tracker</h4>
              <p>This is my First Project 'Aptitude Tracker System'</p>
              <a href='https://github.com/sarat7873/Apptitude.git'><button className='buton'>Code</button></a>
              <a href='https://apptitude-three.vercel.app/'><button className='buton'>Live</button></a>
            </div>

        {/* {/------------------------------------------------2nd project-*  */} 
            <div className='cart' >
              <img className='image' src='./Uploads/netflix.jpg'  />

              <h4>Netflix</h4>
              <p>This is my Second Project 'Netflix-Website'</p>
              <a href='https://github.com/sarat7873/netflix.git'><button className='buton'>Code</button></a>
              <a href='https://netflix18.vercel.app/'><button className='buton'>Live</button></a>
            </div>

            {/* ------third projectt */}

            <div className='cart' >
              <img className='image' src='./Uploads/crud.jpeg'  />

              <h4>Employeesheet Website</h4>
              <p>This is my third Project ' Employeesheet Website'</p>
              <a href='https://github.com/sarat7873/Employeesheet.git'><button className='buton'>Code</button></a>
              <a href='https://employeesheet01.vercel.app/'><button className='buton'>Live</button></a>
            </div>

            <div className='cart' >
              <img className='image' src='./Images/food.jpg'  />

              <h4> Restaurant Website</h4>
              <p>This is my React Project 'Restaurant - Website '</p>
              <a href='https://github.com/sarat7873/Rs-project.git'><button className='buton'>Code</button></a>
              <a href='https://netflix18.vercel.app/'><button className='buton'>Live</button></a>
            </div>
            

        </div>
      </div>
          
  
     

      {/* Footer */}
      <footer className='foot'>
        <h2 id='5'>Connect</h2>
        <p>+91-7873954675</p>
        <div className='full-fot'>
          <div className='icon-fot'>  <FaLinkedinIn className='icon' />
            <a className='fot' href='https://www.linkedin.com/in/sarat-swain-642a54348'>Sarat Swain</a></div>
          <div className='icon-fot'>  <FaInstagram className='icon' />
            <a className='fot' href='https://www.instagram.com/prince_sarat18?igsh=MTQzaW1uY2FmY3JyMw=='>prince_sarat18</a>
            <div className='icon-fot'>
              <i className="fa-solid fa-envelope"></i>
              <a className='fot' href='https://mail.google.com/mail/u/0/#inbox'>saratswain119@gmail.com</a></div>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default MyPortfolio
