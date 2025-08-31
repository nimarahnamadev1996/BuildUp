'use client'

import dayjs from 'dayjs';
import { Pencil, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'



import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { IExperience } from '@/interfaces'
import toast from 'react-hot-toast';
import { deleteExperienceById } from '@/actions/experineces';

const ExperiencesTable = ({ experiences }: { experiences: IExperience[] }) => {

  const [loading, setLoading] = useState(false);
  const [selectedExperienceIdToDelete, setSelectedExperienceIdToDelete] = useState<string | null>(null);


  const router = useRouter();

    const columns = [
    "Role",
    "Company",
    "Start Date",
    "End Date",
    "Location",
    "Created At",
    "Actions",
  ];


  const deleteExperienceHandler = async (id: string) => {
    try{

        setLoading(true)
        setSelectedExperienceIdToDelete(id)

        const response = await deleteExperienceById(id);
        
          if (!response.success) {
            throw new Error(response.message);
        }
        toast.success(response.message);

    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setSelectedExperienceIdToDelete(null);
      setLoading(false);
    }
  }

  return (
     <div className="mt-7">
      <Table className="border border-gray-400">
        <TableHeader className="bg-gray-200 font-semibold">
          <TableRow className="font-semibold">
            {columns.map((column, index) => (
              <TableHead className="font-bold" key={index}>
                {column}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {experiences.map((experience) => (
            <TableRow key={experience.id}>
              <TableCell>{experience.role}</TableCell>
              <TableCell>{experience.company}</TableCell>
              <TableCell>
                {" "}
                {dayjs(experience.start_date).format("MMM DD, YYYY")}
              </TableCell>
              <TableCell>
                {dayjs(experience.end_date).format("MMM DD, YYYY")}
              </TableCell>
              <TableCell>{experience.location}</TableCell>
              <TableCell>
                {dayjs(experience.created_at).format("MMM DD, YYYY hh:mm A")}
              </TableCell>
              <TableCell>
                <div className="flex gap-5">
                  <Button
                    variant={"outline"}
                    size={"icon"}
                    onClick={() => deleteExperienceHandler(experience.id)}
                    disabled={
                      loading && selectedExperienceIdToDelete === experience.id
                    }
                  >
                    <Trash2 size={12} />
                  </Button>
                  <Button
                    variant={"outline"}
                    size={"icon"}
                    onClick={() =>
                      router.push(`/account/experiences/edit/${experience.id}`)
                    }
                  >
                    <Pencil size={12} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ExperiencesTable