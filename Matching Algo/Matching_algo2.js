// Sample user details
const user = {
  name: "John Doe",
  skills: ["JavaScript", "React", "Node.js"],
  location: "City A",
  availability: "Summer",
};

// Sample internship opportunities
const internships = [
  {
    title: "Frontend Developer Intern",
    skillsRequired: ["JavaScript", "React"],
    location: "City A",
    duration: "Summer",
  },
  {
    title: "Backend Developer Intern",
    skillsRequired: ["Node.js", "MongoDB"],
    location: "City B",
    duration: "Summer",
  },
  {
    title: "Design Intern",
    skillsRequired: ["UI/UX Design", "Adobe Creative Suite"],
    location: "City A",
    duration: "Summer",
  },
];

// Calculate the match score and percentage between user and each internship
const calculateMatchScore = (user, internship) => {
  const totalPossibleScore = user.skills.length + 3; // Max possible score
  let score = 0;

  // Score based on skills match
  const commonSkills = user.skills.filter(skill =>
    internship.skillsRequired.includes(skill)
  );
  score += commonSkills.length;

  // Score based on location match
  if (user.location === internship.location) {
    score += 2;
  }

  // Score based on availability match
  if (user.availability === internship.duration) {
    score += 1;
  }

  const matchPercentage = (score / totalPossibleScore) * 100;
  return { score, matchPercentage };
};

// Find the best-matched internships
const findBestMatches = (user, internships) => {
  const matches = internships.map(internship => ({
    ...internship,
    ...calculateMatchScore(user, internship),
  }));

  // Sort internships by descending score
  matches.sort((a, b) => b.score - a.score);

  return matches;
};

// Find and display the best-matched internships for the user
const bestMatches = findBestMatches(user, internships);

console.log("Best Matched Internships:");
bestMatches.forEach(internship => {
  console.log(
    `Title: ${internship.title}, Score: ${internship.score}, Match Percentage: ${internship.matchPercentage.toFixed(2)}%`
  );
});
