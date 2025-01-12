import React from "react";

const Table = ({ projects }) => {
  console.log(projects, "projects");

  return (
    <div className="table-container">
      <table role="table" aria-labelledby="projectsTable">
        <caption id="projectsTable" className="sr-only">List of Projects</caption>
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Percentage Funded</th>
            <th scope="col">Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project['s.no']}</td>
              <td>{project["percentage.funded"]}%</td>
              <td>${project["amt.pledged"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
