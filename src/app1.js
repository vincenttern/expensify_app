const appRoot = document.getElementById("app");

const info = {
  employees: ["Tim James", "Zack Franklin", "Vincent Lim", "Steve Howard"],
  bugIssues: [
    "Make Mobile Devices Responsive",
    "Scrape Reddit Javascript Page On Recent Posts",
    "Build the navbar with hamburger menu"
  ],
  employeeSelected: "",
  bugSelected: ""
};

const onRandomBug = () => {
  const randomNum = Math.floor(Math.random() * info.bugIssues.length);
  info.bugSelected = info.bugIssues[randomNum];

  renderFunction();
};

const onRandomEmployee = () => {
  const randomNum = Math.floor(Math.random() * info.employees.length);
  info.employeeSelected = info.employees[randomNum];

  renderFunction();
};

const onReset = () => {
  info.employeeSelected = "";
  info.bugSelected = "";

  renderFunction();
};

const renderFunction = () => {
  const template = (
    <div>
      <h1>Random Bug Tracker</h1>
      <p>Selecting employee by random to work on a random Bug Issues</p>
      <h4>
        {info.employeeSelected &&
          `${info.employeeSelected} is assigned to ${info.bugSelected}`}
      </h4>
      <button onClick={onRandomEmployee}>Random Employee</button>
      <button onClick={onRandomBug}>Random Bug</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderFunction();
