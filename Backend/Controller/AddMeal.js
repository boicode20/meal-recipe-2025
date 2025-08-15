import { Meals } from "../Schema/MealSchema.js";
import { User } from "../Schema/UserSchema.js";

export const addMeal = async(req,res)=>{
    const {
        meal_name,
        meal_img:{
                    img_string,
                    img_public_id
                },
        meal_ingredients,
        meal_desc,
        meal_category,
        meal_type,
        meal_origin,
        meal_time_cook:{
            hours,
            minutes
        }
    }=req.body

    const meal = {
        uid:req.user._id,
        meal_name,
        meal_img:{
                    img_string,
                    img_public_id
                },
        meal_ingredients,
        meal_desc,
        meal_category,
        meal_type,
        meal_origin,
        meal_time_cook:{
            hours,
            minutes
        }
    }
    if(!req.user) return res.status(401).json({error:true,message:"Unauthorized user."})
    
    try{
        const checkUser = await User.findById({_id:req.user._id})
        if(!checkUser) return res.status(400).json({error:true,message:"No user found."})
        const addMeal = await Meals.create(meal)
        return res.status(201).json({error:false,message:"Added meal."})
    }catch(error){
        console.error(error)
    }
}
