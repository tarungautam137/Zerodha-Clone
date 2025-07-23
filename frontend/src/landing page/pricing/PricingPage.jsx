import React from 'react'
import Hero from "./Hero"
import ChargesTable from "./ChargesTable"
import ChargesExplained from "./ChargesExplained"
import AcOpeningCharges from "./AcOpeningCharges"
import OptionalServiceCharges from "./OptionalServiceCharges"

const PricingPage = () => {
  return (

    <div className='pt-20 px-50'>

      <Hero/>
      <ChargesTable/>
      <ChargesExplained/>
      <AcOpeningCharges/>
      <OptionalServiceCharges/>

    </div>
    
  )
}

export default PricingPage