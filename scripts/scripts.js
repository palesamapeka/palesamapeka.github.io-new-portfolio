const aboutMeBtn = document.getElementById("about-me-btn");

function createSection(parentSelector, elementType, className, innerHTML) {
  let newElement = document.createElement(elementType);
  newElement.className = className;
  newElement.innerHTML = innerHTML;
  document.querySelector(parentSelector).appendChild(newElement);

  newElement.scrollIntoView({ behavior: 'smooth' });

  return newElement;
}

function createAboutMe() {
  const aboutMeContent = `
        <p>Hi! I am Palesa (aka Barry), and I am junior web developer. I was a recruit at <a href="#">Umuzi.org</a>, where I learnt and honed my development skills. My goal is to build better and more inclusive software. I obtained my National Diploma in Software Development in 2021. I majored in mobile application development, and I have decided to branch off and learn more technologies and programming techniques.</p>
        <br>
        <p>If I'm not writing code and scratching my head trying to fix a bug, you can find me either watching 'The Big Bang Theory' for the 60th time (probably), reading a book or listening to music. I would like to think that my music taste is elite.</p>
        <p>Come with me on this journey as I learn and sharpen my skills.</p>
    `;

  // Create the About Me section
  createSection(".main-display", "div", "about-me center-btn", aboutMeContent);

  // Create the Tech Stack button and hide the About Me button
  let educationBtn = createSection(
    "body",
    "button",
    "tech-stack-btn center-btn",
    "Education"
  );
  aboutMeBtn.style.display = "none";

  // Add an event listener to the Tech Stack button
  educationBtn.addEventListener("click", function () {
    createEducation(educationBtn);
  });
}

function createEducation(previousButton) {
  const educationContent = `
        <div class="main-display">
            <h1>Education</h1>
            <div class="project">
            <p>MICT Seta National Certificate: Information Technology: Systems Development  <br><a href="https://bbdsoftware.com/">BBD</a> x <a>Umuzi.org</a> <br>2024</p>
            </div>

            <div class="project">
            <p>N. Dip. Information Technology: Software Development <br>Central University of Technology <br>2021</p>
            </div>

            <div class="project">
            <p>National Senior Certificate <br>Welkom High School <br>2015</p>
                </div>
        </div>`;

  // Create the Education section
  createSection("body", "div", "education", educationContent);

  // Hide the previous button
  previousButton.style.display = "none";

  // Create the Work Experience button
  let workExpBtn = createSection(
    "body",
    "button",
    "work-exp-btn center-btn",
    "Work Experience"
  );

  // Add an event listener to the Work Experience button
  workExpBtn.addEventListener("click", function () {
    createWorkExperience(workExpBtn);
  });
}

function createWorkExperience(previousButton) {
  const workExperienceContent = `
        <div class="main-display">
            <h1>Work Experience</h1>
            <div class="project">
                <p>BBD x Umuzi Academy <br>Junior Web Developer<br>2023 - 2024</p>
            </div>
            <div class="project">
                <p>Quantanite <br>Technical Support<br>2023 - present</p>
            </div>
        </div>`;

  // Create the Work Experience section
  createSection("body", "div", "work-experience", workExperienceContent);

  // Hide the previous button
  previousButton.style.display = "none";

  // Create the Projects button
  let techStackBtn = createSection(
    "body",
    "button",
    "projects-btn center-btn",
    "Tech Stack"
  );

  // Add an event listener to the Projects button
  techStackBtn.addEventListener("click", function () {
    createTechStack(techStackBtn);
  });
}

function createTechStack(previousButton) {
  const techStackContent = `
    <div id="tech-stack" class="main-display">
        <h1>Tech Stack</h1>
        <div class="project">
            <h3>Web Development</h3>
            <div>Bootstrap</div>
            <div>Express.js</div>
            <div>PostgreSQL</div>
            <div>Docker</div>
            <div>Visual Studio Code</div>
            <div>HTML5</div>
            <div>CSS</div>
            <div>Webpack</div>
            <div>Npm</div>
            <div>Node.js</div>
            <div>Jasmine</div>
        </div>
        <div class="project">
            <h3>Android Development</h3>
            <div>IntelliJ IDEA</div>
            <div>Android Studio</div>
            <div>Firebase</div>
            <div>Backendless</div>
            <div>MySQL</div>
            <div>SQLite</div>
            <div>XML</div>
            <div>Gradle</div>
        </div>
        <div class="project">
            <h3>Version Control</h3>
            <div>Git</div>
            <div>GitHub</div>
        </div>
        <div class="project">
            <h3>Programming Languages</h3>
            <div>Java</div>
            <div>JavaScript</div>
            <div>C#</div>
        </div>
    </div>`;

  // Create the Tech Stack section
  createSection("body", "div", "tech-stack", techStackContent);

  // Hide the previous button
  previousButton.style.display = "none";

  // Create the Education button
  let projectsBtn = createSection(
    "body",
    "button",
    "education-btn center-btn",
    "Projects"
  );

  // Add an event listener to the Education button
  projectsBtn.addEventListener("click", function () {
    createProjects(projectsBtn);
  });
}

function createProjects(previousButton) {
  const projectsContent = `
        <div class="main-display">
            <h1>Projects</h1>
            <div class="project">
              <p>Simple Quiz Game</p>
              <a href="/projects/simple-quiz-app/quiz.html">
                <img src="/assests/simple-qiuz.jpg">
              </a>
              <p>Project Summary: <br>
                This project is a simple calculator application built using HTML, CSS, and JavaScript.
                The code initializes a quiz game by displaying questions and answer options, allowing the user to select answers
                 and keeping track of their score. It dynamically updates the interface based on user interactions and provides 
                 feedback on correct or incorrect answers. After the quiz ends, it displays the final score and offers the option to play again.<br><a
                  href="https://github.com/palesamapeka/palesamapeka.github.io/tree/main/projects/simple-quiz-app">Project
                  Repo</a></p>
            </div>
            <div class="project">
              <p>South African ID Number Validator</p>
              <a href="/projects/validate-south-african-id/index.html">
                <img src="/assests/validate.jpg">
              </a>
              <p>Project Summary: <br>
                This project is a simple ID validation tool built using HTML and JavaScript. It allows users to input a South African ID number, 
                validate its authenticity, and extract specific details from it. The application provides feedback on whether the ID number is 
                valid or invalid and displays additional information such as the person's gender, citizenship status, and date of birth.<br><a
                  href="https://github.com/palesamapeka/palesamapeka.github.io-new-portfolio/tree/main/projects/validate-south-african-id">Project
                  Repo</a></p>
            </div>
        </div>`;

  // Create the Projects section
  createSection("body", "div", "projects", projectsContent);

  // Hide the previous button
  previousButton.style.display = "none";

  let contactBtn = createSection("body", "button", "contact-btn center-btn", "Contact Me");

  // Add an event listener to the Education button
  contactBtn.addEventListener("click", function () {
    createContactForm(contactBtn);
  });
}

function createContactForm(previousButton) {
  const contactContent = `
<div class="main-display">
<h1 id="contact">Contact Me</h1>

            <form method="post" id="form">
              <input type="hidden" name="access_key" value="2a81889f-a835-40b0-9612-9aa2cceed5f3">

              <div class="form-group">
                <input type="text" class="form-control" id="visitorName" name="Name" placeholder="Name" required>
              </div>

              <div class="form-group">
                <input type="email" class="form-control" id="visitorEmail" name="Email" placeholder="Email" required>
              </div>

              <div class="form-group">
                <input type="text" class="form-control" id="visitorSubject" name="Subject" placeholder="Subject"
                  required>
              </div>
              <div class="form-group">
                <textarea class="form-control" id="comments" name="comments" placeholder="Comments" rows="4"
                  cols="80"></textarea>
              </div>

              <button type="submit" class="btn">Submit</button>
              <div id="result"></div>
            </form>
</div>

<footer>
    <nav>
      <div id="contact" class="footer-container">
        <div id="socials-container">
          <img src="assests/linkedin.png" alt="My LinkedIn Profile" class="icon"
            onclick="window.open('https://www.linkedin.com/in/palesa-mapeka/', '_blank')">
          <img src="assests/IG.png" alt="My Instagram Profile" class="icon"
            onclick="window.open('https://www.instagram.com/sieg.fried_/', '_blank')">
          <img src="assests/github.png" alt="My Github Profile" class="icon"
            onclick="window.open('https://github.com/palesamapeka', '_blank')">
        </div>
      </div>
    </nav>
    <p>Made with &#128151; by Palesa Mapeka, 2024</p>
  </footer>
    `;

  createSection("body", "div", "projects", contactContent);
  previousButton.style.display = "none";

  formSubmission();

}
aboutMeBtn.addEventListener("click", createAboutMe);


function formSubmission() {
    const form = document.getElementById("form");
    const result = document.getElementById("result");
  
    form.addEventListener("submit", function (e) {
      const formData = new FormData(form);
      e.preventDefault();
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      result.innerHTML = "Please wait...";
      result.style.fontWeight = "Bold";
      result.style.paddingTop = "1.5rem"
  
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status == 200) {
            result.innerHTML = json.message;
          } else {
            console.log(response);
            result.innerHTML = json.message;
          }
        })
        .catch((error) => {
          console.log(error);
          result.innerHTML = "Something went wrong!";
        })
        .then(function () {
          form.reset();
          setTimeout(() => {
            result.style.display = "none";
          }, 10000);
        });
    });
  }
  formSubmission();