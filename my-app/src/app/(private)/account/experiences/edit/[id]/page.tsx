import React from 'react'
import ExperienceForm from '../../_components/experience-form'
import { getExperienceById } from '@/actions/experineces';


interface IEditExperienceProps {
  params: {
    id: string;
  };
}

const EditExperience = async({params}: IEditExperienceProps) => {

 const { id } = await params; 
 
 const experienceResponse = await getExperienceById(id)

  if (!experienceResponse.success) {
    return <div>{experienceResponse.message}</div>;
  }


  return (
   <div>
      <h1 className="text-xl font-bold">Experiences</h1>
      <ExperienceForm  formType="edit" initialValues={experienceResponse.data}/>
   </div>
  )
}

export default EditExperience