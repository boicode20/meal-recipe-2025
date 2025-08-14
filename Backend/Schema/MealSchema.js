import { Schema, model } from "mongoose";

// Schema for meal
const mealSchema = new Schema({
    uid:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    meal_name:{
        type:String,
        required:true
    },
    meal_img:{
        img_string:{
            type:String,
            defualt:'',
            required:true
        },
        img_public_id:{
            type:String,
            defualt:'',
            required:true
        }
    },
    meal_ingredients:{
        type:String,
        required:true,
        default:''
    },
    meal_desc:{
        type:String,
        default:'',
        required:true
    },
    meal_category:{
        type: String,
        required: true,
        enum:["Chicken","Beaf","Pork","Fish","Seafood","Vegetarian","Vegan","Other"]
    },
    meal_type:{
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'],
        required: true
    },
    meal_origin:{
        type: String,
        required: true
    },
    meal_heart:{
        type: Number,
        default: 0
    },
    meal_time_cook:{
        type:String,
        required:true
    }

},{timestamps:true})

export const Meals = model("Meals",mealSchema);