"use client";
import React, { useState} from 'react'
import { Sidebar, Navbar, Navigation, Title, NewUserForm, RoleTable  } from '@/components'
import { usePathname } from 'next/navigation'

const links =[
    {
    
        href: '/dashboard/users/create-new/create-user-roles/staff',
        label: 'Staff'
    
    },
    
    

];

const usersData = [
    {
      roleId: "1",
      roleName : "QAC 1",
      status: 'Active',
      createdDate: '2024-07-01',
      createdBy: 'QAC'
      
    },
    {

        roleId: "2",
        roleName : "QAC 2",
        status: 'Active',
        createdDate: '2024-07-01',
        createdBy: 'QAC'
      
    },

    {
        roleId: "3",
        roleName : "QAC 3",
        status: 'Active',
        createdDate: '2024-07-01',
        createdBy: 'QAC'
            
    },

    {
        roleId: "4",
        roleName : "QAC 4",
        status: 'Active',
        createdDate: '2024-07-01',
        createdBy: 'QAC'
            
    },

    {
        roleId: "5",
        roleName : "QAC 5",
        status: 'Active',
        createdDate: '2024-07-01',
        createdBy: 'QAC'
            
      },
];

const CreateStaff = () => {
    const pathname = usePathname();

    const [formData, setFormData] =useState({
        userRoleId:'',
        userRoleName:'',
        status:'',
        createdDate:'',
        createdBy:''
    });
    const status =['Active', 'Inactive'];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData(prevState =>({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };


    return (
        <div className='w-full'>
            <Navbar/>
            <Sidebar/>

            <div className='mt-12  ml-64 flex flex-col  min-h-screen bg-[#D6D6FF]'>
                <Title text = 'New user role' />

                <>
                    <Navigation links={links} pathname={pathname} />
                </>

                <div className='flex flex-row justify-center space-x-6 '>
                    <div className=' w-1/2 mt-10 '>
                        <NewUserForm 
                            userRoleId={formData.userRoleId}
                            userRoleName={formData.userRoleName}
                            status={status}
                            createdDate={formData.createdDate}
                            createdBy={formData.createdBy}
                            onInputChange={handleInputChange}
                            onSubmit={handleSubmit}
                        />

                    </div>

                    <div className='mt-5 w-1/2'>
                        <RoleTable users={usersData} />
                    </div>
                </div>

                
            </div>

        </div>
    )
}

export default CreateStaff