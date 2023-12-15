// store mongoose schema and model. So, a blueprint for our tasks for how they will look.

import mongoose from "mongoose";
import { nanoid } from "nanoid";

const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    detail: {
        type: String,
        required: true,
        enum: ['planned', 'in progress', 'completed'],
        default: 'planned',
        trim: true
    },
    code: {
        type: String,
        required: true,
        default: 'code',
        trim: true
    }
}, {timestamps: true})


TodoSchema.pre('save', function(next){
    this.code = nanoid(10);
    next();
});

const Todos = mongoose.model('Todos', TodoSchema);
export default Todos;
