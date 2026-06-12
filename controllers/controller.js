const express = require('express')

const getAlltasks =(req,res)=>{
    res.send('all items from the file')
}

const getTask = (req,res)=>{
    res.send({id:req.params.id})
}

const updateTask = (req,res)=>{
    res.send("update task")
}


const createTask = (req,res)=>{
    res.json(req.body)
}

const deleteTask = (req,res)=>{
    res.json("delete task")
}


module.exports= {
    getAlltasks,getTask,createTask,deleteTask,updateTask
}