import projectData from '@/assets/data/projects.json';
import {Project} from "@/portfolio/models/project.entity.js";

export class ProjectService {
    static getProjects(language = "es") {
        try {
            const projects = projectData.projects;
            return projects.map(project => new Project(
                project.name[language],
                project.description[language],
                project.date[language],
                project.link,
                project.image,
                project.icon
            ));
        } catch (e) {
            console.error("Error getting projects", e);
            return [];
        }
    }
}