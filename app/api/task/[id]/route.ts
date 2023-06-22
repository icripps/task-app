import { NextResponse } from 'next/server'
import Task from '../../../../models/tasks.model'

import { connectToDatabase } from "@/utils/dbConnect"

async function PUT(request:any,{params}:any ) {
    const {id } = params
    const {newTitle: title, newTask: task} = request.json()
    await connectToDatabase()
    await Task.findByIdAndUpdate(id,{title,task}) 
    return NextResponse.json({message: "Task Edited "},{status:200})
    
}

async function GET(request:any,{params}:any ) {
    const {id } = params
    await connectToDatabase()
    const task = await Task.findOne({_id:id}) 
    return NextResponse.json({task},{status:200})
    
}