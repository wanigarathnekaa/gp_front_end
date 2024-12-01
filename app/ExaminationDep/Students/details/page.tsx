"use client";
import React, { useEffect, useState } from 'react'
import { Navbar, ExamSidebar, Title, Navigation, StudentCounterCard, SearchBar, ExaminationTable, Dropdown } from '@/components/index'
import { usePathname } from 'next/navigation';
import { getAllStudents } from '@/actions/studentDetails';

interface User {
    userId: string;
    userName: string;
    regNo: string;
    indexNo: string;
    phone: string;
    size: string;
    issuedDate: string;
    returnedDate?: string;
    status: string;
}


const links=[
    {
        href: '/ExaminationDep/Students/details',
        label: 'home'
    
      },
    
      
      {
        href: '/ExaminationDep/Students/history',
        label: 'History'
      },
];


const Details = () => {

    const pathname = usePathname();
    // console.log("pathname",pathname);

    const [users, setUsers] = useState<User[]>([]);
    const [currentUsers, setCurrentUsers] = useState<User[]>([]);
    // const [historyUsers, setHistoryUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true); //Tracks whether data is being fetched.
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStudents = async() =>{
            try{
                const data = await getAllStudents();
                console.log("Fetched data:", data); 

                const now = new Date();
                const oneYearAgo = new Date();
                oneYearAgo.setFullYear(now.getFullYear() -1);

                const currentYearUsers = data.filter((user:User) =>{
                    const issuedDate = new Date(user.issuedDate);
                    return issuedDate >= oneYearAgo && issuedDate <= now;

                });

                // const historyYearUsers = data.filter((user:User) => {
                //     const issuedDate = new Date(user.issuedDate);
                //     return issuedDate < oneYearAgo;

                // });


                setUsers(data);
                setCurrentUsers(currentYearUsers);
                // setHistoryUsers(historyYearUsers);
                setLoading(false);

            } catch (error){
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchStudents();

    }, []);

    const handleSearch =(searchText : string) => {
        const filteredUsers = currentUsers.filter(user =>

            user.userId.toLowerCase().includes(searchText.toLowerCase()) ||
            user.userName.toLowerCase().includes(searchText.toLowerCase()) ||
            user.regNo.toLowerCase().includes(searchText.toLowerCase()) ||
            user.indexNo.toLowerCase().includes(searchText.toLowerCase()) ||
            user.size.toLowerCase().includes(searchText.toLowerCase()) ||
            user.status.toLowerCase().includes(searchText.toLowerCase())||
            user.issuedDate.toLowerCase().includes(searchText.toLowerCase())
        );
    
        setCurrentUsers(filteredUsers);
    };

    const handleSelect = (selectedOption : string) => {
        const filteredUsers = currentUsers.filter(user => user.status.toLowerCase().includes(selectedOption.toLowerCase()));
        setCurrentUsers(filteredUsers);
    }

    

    const totStudents = currentUsers.length;
    const returnedStudents = currentUsers.filter(user => user.status === 'Returned').length;
    const notretrunedStudents =totStudents - returnedStudents;

    return (
        <div className='w-full'>
            <Navbar/>
            <ExamSidebar/>
        
            <div className='ml-72 md:ml-64 lg:ml-72 bg-blue-50 flex flex-col min-h-screen'>
                <div className='ml-5 mt-20'>
                    <Title text='Student Details'/>
                </div>
                
                <Navigation links={links} pathname={pathname}/>

                <div className='p-4 mt-3 ml-3 mr-3 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
                    <StudentCounterCard title='Total Students get Cloaks ' count={totStudents} wide/>
                    <StudentCounterCard title='Students Returned Cloaks' count={returnedStudents} wide/>
                    <StudentCounterCard title='Students not Returned Cloaks' count={notretrunedStudents} wide/>

                </div>

                <div className="flex items-center mb-4 mt-4 ml-3 p-6 ">
                    <div className="flex space-x-4">
                        <SearchBar onSearch={handleSearch} />
                        <Dropdown 
                            options={["Returned", "Issued"]}
                            onSelect={handleSelect} />
                    </div>
                </div>

                <div className='ml-3 px-6 mt-2'>
                    <ExaminationTable users={currentUsers}/>
                </div>

            </div>
        </div>
       
    )
}

export default Details