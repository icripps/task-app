import { connectToDatabase } from "@/utils/dbConnect"
import Task from '../../../models/tasks.model'
import { NextResponse } from 'next/server'



async function POST(request:any,{params}:any) {
    const {newTitle: title, newTask: task} = request.json()
    await connectToDatabase()
    await Task.create(id,{title,task}) 
    return NextResponse.json({message: "Task created "},{status:200})
    
}

async function PUT(request:any,{params}:any) {
    const {id } = params
    const {newTitle: title, newTask: task} = request.json()
    await connectToDatabase()
    await Task.create(id,{title,task}) 
    return NextResponse.json({message: "Task Edited "},{status:200})
    
}

async function GET(request:any,{params}:any ) {
    const {id } = params
    await connectToDatabase()
    const tasks = await Task.find() 
    return NextResponse.json({tasks},{status:200})
    
}

async function DELETE(request:any,{params}:any ) {
    const id = request.nextUrl.searchParams.get("id")
    await connectToDatabase()
    await Task.findByIdAndDelete(id) 
    return NextResponse.json({message: "Task Deleted "},{status:200})
    
}