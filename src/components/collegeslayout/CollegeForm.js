import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const CollegeForm = () => {
  const [phone, setPhone] = useState("")

  const handleMainForm = async  () =>{
    
    const dataMain = [
        {
        "Attribute": "EmailAddress",
        "Value": ""
        },
        {
        "Attribute": "FirstName",
        "Value": ""
        },
        {
        "Attribute": "LastName",
        "Value": ""
        },
        {
            "Attribute": "source",
            "Value": "website_form"
            },
            {
                "Attribute": "mx_Referral_Code",
                "Value": ""
                },
        {
        "Attribute": "Phone",
        "Value": phone
        },
        {
            "Attribute": "mx_Property_Name",
            "Value": ""
            },
            {
            "Attribute": "mx_How_did_you_hear_about_us",
            "Value": ""
            },
            {
                "Attribute": "mx_College_or_Company_Name",
                "Value": ""
                },
            
            {
                    "Attribute": "mx_Move_in_Date_Time",
                    "Value": ""
            },
             
            
        
        {
        "Attribute": "SearchBy",
        "Value": "Phone"
        }
        ]
        if(phone.length !==0 && phone.length === 10 ){
            try {

                const response = await fetch(`https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.CreateOrUpdate?postUpdatedLead=false&accessKey=u$r0346498d5d8a9d49fab725f28c83a03a&secretKey=bf008a0ca47aab2824e794e0e435193da2a473f2`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(dataMain)
                });
        
                const result = await response.json();
                setPhone("")
                console.log("done")
                toast.success("Form Submitted Successfully")
               
               
            } catch (error) {
                console.log(error)
                toast.error("There is some error in submitting")
            }      
            
        }
        else{
            toast.error("Please enter all the details")
        }
        
}

  return (
    <>
       <ToastContainer />
       <div className='bg-[#ebe3d654] shadow-lg mx-4 mt-12 lg:mx-12 lg:mt-16 mb-6 items-center gap-12 grid grid-cols-1 lg:grid-cols-3 grid-flow-row py-6 px-4 lg:px-12 lg:py-12 rounded-lg' >
   
   <div className='col-span-2'>
       <h3 className='lg:text-[2.5rem] text-[1.5rem] font-[NeueMedium]' >
       Find the Perfect Space Near <br /> Your College
       </h3>
       <p className='font-[NeueRegular] text-[.8rem] lg:text-[1rem]'>Discover premium properties near your college—co-living spaces, <br className='hidden lg:block' /> student housing, and luxury apartments, all in one place.</p>
   </div>
   <div className='flex col-span-1  w-full lg:items-center flex-col gap-6 lg:justify-center'>
       <div className='relative w-[85vw] lg:w-full'>
       <p className='absolute left-[3%] top-[20%] bg-gray-200 rounded-full px-3 py-2 text-[.8rem] text-gray-600 z-[999]' >+91</p>
       <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} className='py-4 relative pl-16 rounded-lg border-[1px] border-[#dfdfdf] w-full' placeholder='Enter Your Phone Number' />
       </div>
       <button onClick={handleMainForm} className='bg-[#D64C27] rounded-full w-[85vw] lg:w-full text-white py-3 lg:py-4 px-6 text-center'>GET A CALL BACK</button>
   </div>
</div>
    </>
   
  )
}

export default CollegeForm