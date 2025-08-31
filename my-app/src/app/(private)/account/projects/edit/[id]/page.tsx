import React from 'react'
import { getProjectById } from '@/actions/projects'
import ProjectForm from '../../_components/project-form'



interface IEditProjectPageProp {

    params: {
        id: string
    }

}


const EditProjectPage = async({params}: IEditProjectPageProp) => {

    const { id } = await params;

   const projectResponse = await getProjectById(id);

      if (!projectResponse.success) {
        return <div>Failed to load project data</div>;
     }


  return (
     <div>
      <h1 className="text-xl font-bold">Edit Project</h1>
      <ProjectForm formType="edit" initialValues={projectResponse.data}/>
    </div>
  )
}

export default EditProjectPage