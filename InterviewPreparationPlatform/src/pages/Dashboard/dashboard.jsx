import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Welcome Back 👋</h1>

      <div className="stats">

        <div className="card">
          <h2>Questions Solved</h2>
          <p>45</p>
        </div>

        <div className="card">
          <h2>Quizzes Completed</h2>
          <p>12</p>
        </div>

        <div className="card">
          <h2>Study Streak</h2>
          <p>15 Days</p>
        </div>

      </div>

      <div className="activity">
        <h2>Recent Activities</h2>

        <ul>
          <li>✓ Solved Binary Search Question</li>
          <li>✓ Completed OOP Quiz</li>
          <li>✓ Created Study Plan</li>
        </ul>
      </div>

    </div>
  );
}

export default Dashboard;