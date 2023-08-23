// Sample user details
const user = {
  name: "John Doe",
  skills: ["JavaScript", "React", "Node.js"],
  location: "City A",
  availability: "Summer",
};

// Sample internship opportunities (this could come from a database)
const internships = [
  // Thousands of internship objects
  // ...
];

// Calculate the match score and percentage between user and each internship
const calculateMatchScore = (user, internship) => {
  // ... (same as before)
};

// Find the best-matched internships
const findBestMatches = (user, internships) => {
  // Parallel processing using modern JavaScript features or libraries (e.g., async/await, Promise.all)
  const calculateAllMatches = async () => {
    const matches = [];

    // Process internships in parallel
    await Promise.all(
      internships.map(async internship => {
        const matchData = calculateMatchScore(user, internship);
        matches.push({
          ...internship,
          ...matchData,
        });
      })
    );

    return matches;
  };

  // Call the parallel processing function and sort the matches
  return calculateAllMatches().then(matches => {
    // Sort internships by descending score
    matches.sort((a, b) => b.score - a.score);
    return matches;
  });
};

// Find and display the best-matched internships for the user
findBestMatches(user, internships)
  .then(bestMatches => {
    console.log("Best Matched Internships:");
    bestMatches.forEach(internship => {
      console.log(
        `Title: ${internship.title}, Score: ${internship.score}, Match Percentage: ${internship.matchPercentage.toFixed(2)}%`
      );
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
