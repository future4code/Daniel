import { StudentCreator, TeacherCreator } from "../user";
import { MissionCreatorHandler } from "../mission";
import { JSONFileManager } from "../fileManager";
import moment = require("moment");
import { Specialty } from "../specialty";


export class MainTaskManager {

    execute(): void {
        const newton = new MissionCreatorHandler();
        newton.create(moment("01/01/2019", "DD/MM/YYYY"), moment("02/06/2019", "DD/MM/YYYY"), [], [], "Newton");
        const studentCreator = new StudentCreator;
        const teacherCreator = new TeacherCreator;
        newton.addUser(studentCreator.create("Daniel", moment("30/09/1992", "DD/MM/YYYY"), "dan@live.com", "Newton"));
        newton.addUser(studentCreator.create("AstroStudent", moment("01/10/2019", "DD/MM/YYYY"), "student@live.com", "Newton"));
        newton.addUser(teacherCreator.create("AstroDev", moment("30/09/1992", "DD/MM/YYYY"), "dan@live.com", [Specialty.HTML, Specialty.CSS, Specialty.JS]));
        newton.addUser(teacherCreator.create("Soter", moment("01/10/2019", "DD/MM/YYYY"), "student@live.com", [Specialty.HTML, Specialty.CSS, Specialty.JS, Specialty.REACT, Specialty.OOP, Specialty.REDUX, Specialty.BACKEND]));
        newton.saveOnFile(new JSONFileManager('mission.json'));

    }
}