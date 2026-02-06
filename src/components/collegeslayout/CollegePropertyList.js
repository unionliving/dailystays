import React from 'react'
import PropertiesCardNew from '../Properties/PropertiesCardNew'

const CollegePropertyList = ({properties}) => {
  return (
    <div>
     
        <div className='grid grid-cols-1 lg:grid-cols-3 mx-4 mt-3 lg:mx-12 lg:mt-12 grid-flow-row gap-6   ' >
        {
            properties.map((property, index) =>(
                <PropertiesCardNew property={property } />
            ))
        }
        </div>
    </div>
  )
}

export default CollegePropertyList