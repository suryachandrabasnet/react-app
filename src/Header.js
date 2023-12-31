import React from "react";

const Header = ({ selectedTeam, teamMemberCount }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <h1 className="mt-4 p5 bg-primary text-white rounded">
          Team Member Allocation
        </h1>
        <h3>
          {selectedTeam} has {teamMemberCount} Member
        </h3>
      </div>
    </header>
  );
};

export default Header;
