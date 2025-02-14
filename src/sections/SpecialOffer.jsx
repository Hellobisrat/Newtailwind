import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section 
        id="about-us"
        className="flex justify-wrap 
        items-center max-xl:flex-col-reverse 
        gap-10  max-container">
         <div className="flex  flex-1">
          <img
           src={offer}
           width={773}
           height={687}
           className="object-contain w-full"
          />

          </div>
             <div>
                <h2 className="mt-10 font-palanquin text-4xl capitalize 
                 font-bold lg:max-w-lg">
                   
                 <span className="text-coral-red ">Special</span> 
               Offer 
                </h2>
                <p className="mt-4 lg:max-w-lg info-text  "
                >Ensuring on shopping journey that redefines your experience
                 with unbeatable deals. From premier selections to increadible
                 savings we offer unparalleled value that sets apart
                </p>
                <p className="mt-6 lg-max-w-lg  info-text">Nevigate a realm of possibilities designed to 
                fullfill your unique desires, superpassing the loftiest expectations. Your journey with
                us is nothing short of exceptional </p>
                <div className="mt-11 flex flex-wrap gap-4 ">
                <Button label="Shop Now"  iconURL={arrowRight} />
                <Button label="Learn more"
                backgroundColor="bg-white"
                 borderColor='border-slate-gray'
                textColor="text-slate-gray"/>
                </div>
               
    
         </div>
        
    
        </section>
  )
}

export default SpecialOffer