import React from 'react'

const Qualification = () => {
  // Education details with images and degrees
  const educationDetails = [
    { 
      src: "UMKC.jpg", 
      alt: "Master's Degree",
      degree: "M.S in Computer Science",
    },
    { 
      src: "SRM.png", 
      alt: "Bachelor's Degree",
      degree: "B.Tech in Computer Science and Engineering",
    },
  ]

  const experienceImages = [
    // Experience logos
    { src: "BofA.svg", alt: "Bank of America" },
    { src: "ALDI.svg", alt: "ADLI" },
  ]

  return (
    <>
      {/* Experience Section */}
      <h6 className='text-center text-white bg-black border-2 rounded-md'>industry experience 💼</h6>
      <div className='flex flex-wrap items-center justify-center m-2 gap-4'>
        {experienceImages.map((exp, index) => (
          <img
            key={index}
            src={exp.src}
            alt={exp.alt}
            className='h-1/6 w-1/6 hover:scale-110 hover:duration-500'
          />
        ))}
      </div>

      {/* Education Section */}
      <h6 className='text-center text-white bg-black border-2 rounded-md'>study timeline 🎓</h6>
      <div className='flex flex-row items-center justify-center m-2 gap-4'>
        {educationDetails.map((edu, index) => (
          <div key={index} className="relative group">
            <img
              src={edu.src}
              alt={edu.alt}
              className='h-24 w-24 transition-opacity duration-300 group-hover:opacity-25'
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-xs font-bold text-center">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Qualification