import { StudentRanking, Navbar, Sidebar, Title } from "@/components"

const page = () => {

    const students = [
        { name: 'John Doe', indexNo: 2100798, points: 100 },
        { name: 'Jane Doe', indexNo: 2100799, points: 90 },
        { name: 'John Smith', indexNo: 2100800, points: 80 },
        { name: 'Jane Smith', indexNo: 2100801, points: 70 },
        { name: 'John Doe', indexNo: 2100798, points: 60 },
        { name: 'Jane Doe', indexNo: 2100799, points: 50 },
        { name: 'John Smith', indexNo: 2100800, points: 40 },
        { name: 'Jane Smith', indexNo: 2100801, points: 30 },
        { name: 'John Doe', indexNo: 2100798, points: 20 },
        { name: 'Jane Doe', indexNo: 2100799, points: 10 },
        { name: 'Jane Doe', indexNo: 2100799, points: 5 },
    ];
  return (
    <div className="w-full">
      <Navbar />
      <Sidebar />

      <div className=' mt-14 ml-64 flex flex-col min-h-screen bg-[#D6D6FF] p-4'>

        <Title text='Student Ranking' />

        <div className="mt-7 ml-20 flex flex-col">
          <StudentRanking students={students}/>

        </div>
        

      </div>
        
    </div>
  )
}

export default page