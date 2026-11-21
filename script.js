const outputDiv = document.getElementById("output");
const gradeBtn = document.getElementById("gradeBtn");

function calculateGrade() {
  // 1. Take marks as input using prompt()
  const userInput = prompt("Enter student marks (0 to 100):");

  // Handle Cancel button
  if (userInput === null) {
    console.log("Grading cancelled by user.");
    alert("Grading cancelled.");
    outputDiv.innerHTML = "<p>Grading cancelled.</p>";
    return;
  }

  const marks = Number(userInput);

  // Validate input is a valid number between 0 and 100
  if (
    userInput.trim() === "" ||
    Number.isNaN(marks) ||
    marks < 0 ||
    marks > 100
  ) {
    console.log("Invalid input! Please enter marks between 0 and 100.");
    alert("Please enter valid marks between 0 and 100!");
    outputDiv.innerHTML =
      "<p><strong>Error:</strong> Please enter valid marks between 0 and 100.</p>";
    return;
  }

  // 2. Determine grade using if-else and comparison operators
  let grade = "";
  let statusMessage = "";

  if (marks >= 90 && marks <= 100) {
    grade = "A";
    statusMessage = "Grade A (90–100)";
  } else if (marks >= 75 && marks < 90) {
    grade = "B";
    statusMessage = "Grade B (75–89)";
  } else if (marks >= 50 && marks < 75) {
    grade = "C";
    statusMessage = "Grade C (50–74)";
  } else {
    grade = "Fail";
    statusMessage = "Fail (Below 50)";
  }

  // 3. Display result using alert(), console.log(), and webpage
  alert(`Marks: ${marks}\nResult: ${statusMessage}`);
  console.log("Marks:", marks, "| Grade:", grade);

  outputDiv.innerHTML = `
    <h3>Grading Result</h3>
    <p><strong>Marks Obtained:</strong> ${marks} / 100</p>
    <p><strong>Grade / Status:</strong> ${statusMessage}</p>
  `;
}

gradeBtn.addEventListener("click", calculateGrade);

// Run automatically when page loads
calculateGrade();