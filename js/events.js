!(function () {
  class EventList {
    constructor(target, events) {
      this.target = document.querySelector(target);
      this.events = events;
    }
    render() {
      for (let event of this.events) {
        this.target.innerHTML += `
      <div class="glass card">
        <h3 class="title">${event.name}</h3>
        <p class="desc">
            ${event.desc}
        </p>
        <div class="links">
          <span
            onclick="window.open('https://github.com/mayankgujrathi', '_blank')"
            class="register"
            >Register</span
          >
        </div>
      </div>
        `;
      }
    }
  }
  const el = new EventList(".main", [
    {
      name: "Technical Paper Presentation",
      desc: `<p>Here is an amazing opportunity to showcase your
ideas on a unique and massive platform in the form
of well integrated and intriguing presentation. It
strives to explore the competency of young minds
by giving their incredulous ideas a definitive
direction.</p>
<p>There are two stages in this event where in the first
stage is submission of abstract and the next one is
the final round where students have to present in
front of judges. Evaluation is done in front of
highly qualified judges.</p>`,
    },
    {
      name: "Technical Project /Prototype Presentation",
      desc: `<p>Project presentation is a platform which provides you
with a awestruck opportunity to showcase best of the
projects you worked on!!</p>
<p>Projects make 60% of your entire resume which is a
summary of your entire career!</p>
<p>You will be guided by the judges who have been a great
backbone and made CBIT the only college in entire
nation which alone had 5 winning teams in SIH
conducted by central government!</p>
<p>Grab this platform to clear all your confusions and get a
boost up!</p>
<p>We provide you a platform to come and see different
projects in different domains and gain knowledge and
take guidance and pave your way ahead!!</p>`,
    },
    {
      name: "Technical Poster Presentation",
      desc: `<p>Poster presentation - Ideathon is a platform which
provides you with an amazing opportunity to showcase
your ideas on a unique platform in the form of a poster
presentation.</p>
<p>Posters are legitimate and popular presentation
format for research and clinical vignettes. They
efficiently communicate concepts and data to an
audience using a combination of visuals and text.</p>`,
    },
    {
      name: "Treasure Hunt",
      desc: `<p>Treasure Hunt is an event which tests your basic
decoding skills .Using simple coding and aptitude skills
advance your way through the clues and find the
treasure.However there will be a clock ticking for you to
find the treasure.</p>
<p>Team size-1-2</p>`,
    },
    {
      name: "KODECRYPT",
      desc: `<p>Kodecrypt is the flagship event of Headstart, which tests
your programming and problem solving skills. You must
solve tricky and interesting programming questions in
any language of your choice.</p>
<p>The event has 3 rounds.</p>
<p>Round 1 - Basic MCQ questions.</p>
<p>Round 2 & 3 are online coding rounds.</p>
<p>There’s something more in the store.</p>
<p>You can directly reach the final round through:</p>
<p>Kodecrypt Long Challenge where all the previous
Kodecrypt questions are posted and are available for a
period of 10 days.</p>
<p>Kodecrypt Wild card Questions is an extra layer where
in people who solve at the earliest qualify.</p>`,
    },
    {
      name: "Technical Online Quiz- FAST AND FURIOUS",
      desc: `<p>"A fun and supersonic celebration of technology!!"</p>
<p>Get ready for a roller coaster ride into the intense world
of techno quizzing.</p>
<p>Fast and Furious gives you the experience of fastest-
finger-first game wherein you will be racing against and
trying to overrun your friends and peers by answering a
series of 15 technical and aptitude questions quickly and
accurately. In each race, the fastest performers among
the teams participated, are promoted to the next round.
The final round is a "Surprise Round", a haven for those
with the technical chutzpah to display your geekiness.
You will be given details of round-3 only after finishing
the first two rounds. We await the crowning of the next
tech wizards.</p>`,
    },
    {
      name: "BUGBEATERS",
      desc: `<p>BugBeaters is a debugging event. It tests participants
ability to find corner cases and solve minor issues
present in the code and come up with a working solution
for the given problem statement. It consists of 2 rounds
where each round is an elimination round. Both the
rounds are online rounds.</p>
<p>Apart from these we will be organizing few pre-
contests and the top performers of those contests will get
into the final round.</p>`,
    },
    {
      name: "DESIGN FREAKS",
      desc: `<p>Design freaks is an established and popular event of
Headstart which focuses on how well a person can
design eye catching User Interfaces (UI) for web
applications</p>
<p>Round 1: MCQ's related to basic design concepts of Web</p>
<p>Round 2: constitutes of some practical stuff like creating
some components of a web page.</p>
<p>Round 3: The participants need to develop a static
website which would be evaluated and winner will be
decided.</p>`,
    },
    {
      name: "DATA ADDICTS",
      desc: `<p>DataAddicts is an event based on DBMS. It provides the
perfect platform to showcase your querying skills. It
provides intriguing challenges to test your passion for
database systems.</p>
<p>This event has 3 rounds along with an introductory
session for beginners.</p>
<p>Round 1: consists of basic multiple choice questions</p>
<p>Round 2: you will have to write DBMS queries for given
questions.</p>
<p>Round 3: you will have to execute the queries for given
database.</p>`,
    },
    {
      name: "C-STAR",
      desc: `<p>This event brings you an opportunity to prove your skills
in C. You can tackle questions from basics to the
complex of its concepts. This event consists of 3 rounds.</p>
<p>Round 1 consists of basic online MCQs.</p>
<p>Round 2 is online MCQs that are to be solved at a
specified time.</p>
<p>Round 3 is the debugging round. The ones clearing
round 3 are given merit certificates and exciting prizes
& the ones clearing round 2 will be given participation
certificates.</p>`,
    },
    {
      name: "TIC TECH TOE",
      desc: `<p>This event is based on the traditional game TIC TAC
TOE. Each participant is expected to solve the logical
questions in a vertical or horizontal or diagonal
direction. Players who solves two lines in the given time
limit will be considered for the next round.</p>
<p>Round 1: Online Aptitude test.</p>
<p>Round 2: TIC TECH TOE game.</p>
<p>Round 3: Creative Analysis.</p>`,
    },
    {
      name: "FIND FIT FINISH",
      desc: `<p>Find Fit Finish is an event that tests the quickness of an
individual.</p>
<p>In first round "Logical Quiz", we will be testing the IQ
of an individual through a logical quiz.</p>
<p>The second round "Google It Out" would check how
quickly an individual can reach a desired target by
searching for clues in suitable websites.</p>
<p>The third round "Inter Knack" would be a knockout
round where we will be testing your mental ability to
solve random games and giving some Interesting
Knockoff tasks.</p>
<p>All three rounds involved in the event do not demand
much of technical skills, but they do test thinking and
logical abilities.</p>`,
    },
    {
      name: "MLit",
      desc: `<p>MLit is Machine Learning Iconic Trail,we’'ll assess
whether your knowledge is credit worthy or not.</p>
<p>We’ll be having 3 rounds</p>
<p>Round 1 Get it wrong</p>
<p>Round 2 Detect the algorithm</p>
<p>Round 3 Crack the code</p>`,
    },
  ]);
  document.addEventListener("DOMContentLoaded", function () {
    el.render();
  });
})();
