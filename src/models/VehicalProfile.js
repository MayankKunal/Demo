import mongoose from 'mongoose';
const VehicalProfileSchema=new mongoose.Schema({
    driverId:{
        type: String,
     required:true
      },
      userId:{
        type:String,
    },
    vehicalRegNo:{
        type:String,
        
    },
    vehicalType:{
        type:String,
    },
    vehicalSeating:{
        type:String,
       
    },
    vehicalColour:{
        type:String,
        
    },
    vehicalMakeandModel:{
        type:String,
        
    },
    vehicalYearandManufacturing:{
        type:String,
        
    },
    serviceP:{
        type:String,
        
     },
     fuel:{
        type:String,
       
     },
     vehicalCategory:{
        type:String,
        
     },
     vehicalFrontImg:{
      type:Buffer,
      default:"no image"
     },
     vehicalBackImg:{
        type:Buffer,
        default:"no Image"
     },
     coDriverSideImg:{
        type:Buffer,
        default:"no image"
       },
       driverSideImg:{
          type:Buffer,
          default:"no Image"
       },
       vehicalRcImg:{
        type:Buffer,
        default:"no Image"
       },
       insuranceProvider:{
        type: String
       },
       vehicalNoasInsuranceDoucment:{
        type:String,
       },
       policyNo:{
        type: String
       },
       insuranceExpiryDate:{
        type:String
       },
       vehicalPermitType:{
          type:String
       },
       vehicalNoasPermitDocument:{
        type:String
       },
       permitExpiryDate:{
        type:String
       },
       stateandRto:{
        type:String
       },
       vehicalNoasRoadTaxDocument:{
        type:String
       },
       roadTaxNo:{
            type:String,
       },
       vehicalRoadTaxExpiryDate:{
        type:String
       },
       emissionType:{
        type:String
       },
       vehicalNoasEmissionDoc:{
        type:String,
       },
       emissionNoID:{
        type:String
       },
       vehicalEmissionExpiryDate:{
        type:String
       },
       vehicalAge:{
        type:String
       },
       vehicalNoasFitnessCertificate:{
        type:String,
       },
       vehicalFitnessExpiryDate:{
        type:String
       }
    
})
export const VehicalProfileModel=mongoose.model("vehicalProfile",VehicalProfileSchema);