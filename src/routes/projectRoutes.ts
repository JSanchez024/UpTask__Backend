import { Router } from "express";
import { body, param } from "express-validator";
import { ProjectController } from "../controllers/ProjectController";
import { handleInputErrors } from "../middleware/validation";
import { TaskController } from "../controllers/TaskController";
import { projectExists } from "../middleware/project";
import { hasAuhorization, taskBelongsToProject, taskExists } from "../middleware/task";
import { authenticate } from "../middleware/auth";
import { TeamMemberController } from "../controllers/TeamController";
import { NoteController } from "../controllers/NoteController";
import Note from "../models/Note";

const router = Router()

router.use(authenticate)

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

//Routes for tasks
router.param('projectId', projectExists)

router.put('/:projectId',
    param('projectId').isMongoId().withMessage('ID no valido'),
    body('projectName')
        .notEmpty().withMessage('El Nombre del Proyecto es Obligatrio'),
    body('clientName')
        .notEmpty().withMessage('El Nombre del Cliente es Obligatrio'),
    body('description')
        .notEmpty().withMessage('La Descripcion del Proyecto es Obligatrio'),
    handleInputErrors,
    hasAuhorization,
    ProjectController.updateProject
)

router.delete('/:projectId',
    param('projectId').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    hasAuhorization,
    ProjectController.deleteProject
)



router.post('/:projectId/tasks',
    hasAuhorization,
    body('name')
        .notEmpty().withMessage('El Nombre de la Tarea es Obligatrio'),
    body('description')
        .notEmpty().withMessage('La descripcion de la Tarea es Obligatrio'),
    handleInputErrors,
    TaskController.createTask
)

router.get('/:projectId/tasks',
    TaskController.getProjectTasks
)

router.param('taskId', taskExists)
router.param('taskId', taskBelongsToProject)

router.get('/:projectId/tasks/:taskId',
    param('taskId').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    TaskController.getTaskById
)

router.put('/:projectId/tasks/:taskId',
    hasAuhorization,
    param('taskId').isMongoId().withMessage('ID no valido'),
    body('name')
        .notEmpty().withMessage('El Nombre de la Tarea es Obligatrio'),
    body('description')
        .notEmpty().withMessage('La descripcion de la Tarea es Obligatrio'),
    handleInputErrors,
    TaskController.updateTask
)

router.delete('/:projectId/tasks/:taskId',
    hasAuhorization,
    param('taskId').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    TaskController.deleteTask
)

router.post('/:projectId/tasks/:taskId/status',
    param('taskId').isMongoId().withMessage('ID no valido'),
    body('status')
        .notEmpty().withMessage('El estado es obligatorio'),
    handleInputErrors,
    TaskController.updateStatus
)

//Routes for teams
router.post('/:projectId/team/find',
    body('email')
        .isEmail().toLowerCase().withMessage('E-mail no valido'),
        handleInputErrors,
        TeamMemberController.findMemberByEmail
)

router.get('/:projectId/team',
    TeamMemberController.getProjectTeam
)

router.post('/:projectId/team',
    body('id')
        .isMongoId().withMessage('ID No Valido'),
        handleInputErrors,
        TeamMemberController.addMemberById
)

router.delete('/:projectId/team',
    body('id')
        .isMongoId().withMessage('ID No Valido'),
        handleInputErrors,
        TeamMemberController.removeMemberById
)

router.delete('/:projectId/team/:userId',
    param('userId')
        .isMongoId().withMessage('ID No Valido'),
        handleInputErrors,
        TeamMemberController.removeMemberById
)

//Routes dor Notes
router.post('/:projectId/tasks/:taskId/notes',
    body('content')
        .notEmpty().withMessage('El Contenido de la nota es Obligatrio'),
        handleInputErrors,
        NoteController.createNote
)

router.post('/:projectId/tasks/:taskId/notes',
    NoteController.getTaskNotes
)

router.delete('/:projectId/tasks/:taskId/notes/:noteId',
    param('noteId').isMongoId().withMessage('ID No Valido'),
    handleInputErrors,
    NoteController.deleteNote
)
export default router