'use client'
import { usePathname } from 'next/navigation'


import PrivateLayout from './private-layout'
import PublicLayout from './public-layout'
import PortfolioLayout from '@/app/portfolio/_components/portfolio-layout'


const LayoutProvider = ({ children }: { children: React.ReactNode }) => {

    const pathname = usePathname()

    if(pathname.startsWith('/account')){
        return <PrivateLayout>{children}</PrivateLayout>
    }else if(pathname.startsWith('/portfolio')){
        return <PortfolioLayout>{children}</PortfolioLayout>
    }else{
        return <PublicLayout>{children}</PublicLayout>
    }
}

export default LayoutProvider