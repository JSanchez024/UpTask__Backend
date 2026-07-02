import { request, type Request, type Response } from "express";
import Project from "../models/Project";
import Task from "../models/Task";

export class TaskController{
    static createTask = async (req: Request, res: Response) => {

        const {projectId} = req.params
        const project = await Project.findById(projectId)
        if(!project){
            const error = new Error('Proyecto no encontrado')
            return res.status(404).json({error: error.message})
        }

        try {
            const task = new Task(req.body)
            task.project = req.project._id
            req.project.tasks.push(task._id)
            await Promise.allSettled([task.save(), req.project.save()])
            res.send('Tarea creada correctamente')
        } catch (error) {
            res.status(500).json({error: 'Hubo un error'})
        }
    }

    static getProjectTasks = async (req: Request, res: Response) => {

        try {
            const tasks = await Task.find({project: req.project._id}).populate('project')
            res.json(tasks)
        } catch (error) {
            res.status(500).json({error: 'Hubo un error'})
        }
    }

    static getTaskById = async (req: Request, res: Response) => {
        try {
            if(req.task.project.toString() !== req.project._id.toString()){
                const error = new Error('Accion no valida')
                return res.status(400).json({error: error.message})
            }
            res.json(req.task)
        } catch (error) {
            res.status(500).json({error: 'Hubo un error'})            
        }
    }

    static updateTask = async (req: Request, res: Response) => {
        try {
            req.task.name = req.body.name
            req.task.description = req.body.description
            await req.task.save()
            res.send('Tarea Actualizada Correctamente')
        } catch (error) {
            res.status(500).json({error: 'Hubo un error'})            
        }
    }

    static deleteTask = async (req: Request, res: Response) => {
        try {
            req.project.tasks = req.project.tasks.filter(task => task.toString() !== req.task._id.toString())
            await Promise.allSettled([req.task.deleteOne(), req.project.save()])
            res.send('Tarea Eliminada Correctamente') 
        } catch (error) {
            res.status(500).json({error: 'Hubo un error'})            
        }
    }

    static updateStatus = async (req: Request, res: Response) => {
        try {
            const { status } = req.body
            req.task.status = status
            await req.task.save()
            res.send('Tarea Actualizada')

        } catch (error) {
            res.status(500).json({error: 'Hubo un error'})  
        }
    }
}