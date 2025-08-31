import React from "react";
import ExperienceForm from "../_components/experience-form";


function AddExperiencePage() {
  return (
    <div>
      <h1 className="text-xl font-bold">Add Experience</h1>
      <ExperienceForm formType="add"/>
    </div>
  );
}

export default AddExperiencePage;