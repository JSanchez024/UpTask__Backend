import { Router } from "express";
import { body, param } from "express-validator";
import { ProjectController } from "../controllers/ProjectController";
import { handleInputErrors } from "../middleware/validation";
import { TaskController } from "../controllers/TaskController";
import { validateProjectExists } from "../middleware/project";

const router = Router()


router.post('/',
    body('projectName')
        .notEmpty().withMessage('El Nombre del Proyecto es Obligatrio'),
    body('clientName')
        .notEmpty().withMessage('El Nombre del Cliente es Obligatrio'),
    body('description')
        .notEmpty().withMessage('La Descripcion del Proyecto es Obligatrio'),
    handleInputErrors,
    ProjectController.createProject
)


router.get('/', ProjectController.getAllProjects)

router.get('/:id',
    param('id').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    ProjectController.getProjectById
)

router.put('/:id',
    param('id').isMongoId().withMessage('ID no valido'),
    body('projectName')
        .notEmpty().withMessage('El Nombre del Proyecto es Obligatrio'),
    body('clientName')
        .notEmpty().withMessage('El Nombre del Cliente es Obligatrio'),
    body('description')
        .notEmpty().withMessage('La Descripcion del Proyecto es Obligatrio'),
    handleInputErrors,
    ProjectController.updateProject
)

router.delete('/:id',
    param('id').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    ProjectController.deleteProject
)

//Routes for tasks
router.param('projectId', validateProjectExists)

router.post('/:projectId/tasks',
    validateProjectExists,
    body('name')
        .notEmpty().withMessage('El Nombre de la Tarea es Obligatrio'),
    body('description')
        .notEmpty().withMessage('La descripcion de la Tarea es Obligatrio'),
    handleInputErrors,
    TaskController.createTask
)

router.get('/:projectId/tasks',
    validateProjectExists,
    TaskController.getProjectTasks
)

router.get('/:projectId/tasks/:taskId',
    param('taskId').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    validateProjectExists,
    TaskController.getTaskById
)

router.put('/:projectId/tasks/:taskId',
    param('taskId').isMongoId().withMessage('ID no valido'),
    body('name')
        .notEmpty().withMessage('El Nombre de la Tarea es Obligatrio'),
    body('description')
        .notEmpty().withMessage('La descripcion de la Tarea es Obligatrio'),
    handleInputErrors,
    validateProjectExists,
    TaskController.updateTask
)

router.delete('/:projectId/tasks/:taskId',
    param('taskId').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    validateProjectExists,
    TaskController.deleteTask
)

export default router