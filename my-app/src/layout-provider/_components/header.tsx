import { Button } from '@/components/ui/button'
import usersGlobalStore, { IUsersGlobalStore } from '@/global-store/users-store'
import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import PrivateLayoutSidebar from './sidebar'

const PrivateLayoutHeader = () => {

      const {user} = usersGlobalStore() as IUsersGlobalStore

        const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <div className="bg-primary p-5 flex justify-between items-center">

         <h1 className="font-bold text-2xl text-yellow-500">BuildUp</h1>

         <div className="flex gap-5 items-center">
             <span className="text-sm text-white">{user?.name}</span>

             <Button onClick={() => setOpenSidebar(true)}>
                <Menu size={15} className="text-white" />
             </Button>
         </div>


         {
            openSidebar && (
                <PrivateLayoutSidebar
                 openSidebar={openSidebar}
                 onClose={() => setOpenSidebar(false)}/>
            )
         }
    </div>
  )
}

export default PrivateLayoutHeader