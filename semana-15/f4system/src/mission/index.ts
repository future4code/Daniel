import moment = require("moment");
import { Teacher, Student, User } from "../user";
import { FileManager } from '../fileManager/index';

export abstract class Mission {
    name: string;
    startDate: string;
    finishDate: string;
    teacherList: Teacher[];
    studentList: Student[];
    fileManager: FileManager;
    constructor(startDate: moment.Moment, finishDate: moment.Moment, teacherList: Teacher[], studentList: Student[], name: string) {
        this.startDate = startDate.format("DD/MM/YYYY");
        this.finishDate = finishDate.format("DD/MM/YYYY");
        this.teacherList = teacherList;
        this.studentList = studentList;
        this.name = name;

    }
    addUser(user: User): void {
        if (user instanceof Teacher) {
            this.teacherList.push(user);
        }
        if (user instanceof Student) {
            this.studentList.push(user);
        }
    }
    removeUser(user: User) {
        if (user instanceof Teacher) {
            this.teacherList = this.teacherList.filter((teacher: Teacher) => teacher.name === user.name);
        }
        if (user instanceof Student) {
            this.studentList = this.studentList.filter((student: Student) => student.name === user.name);
        }
    }
}

export class WebMission extends Mission {
    constructor(startDate: moment.Moment, finishDate: moment.Moment, teacherList: Teacher[], studentList: Student[], name: string) {
        super(startDate, finishDate, teacherList, studentList, name);
    }
}

export class MobileMission extends Mission {
    constructor(startDate: moment.Moment, finishDate: moment.Moment, teacherList: Teacher[], studentList: Student[], name: string) {
        super(startDate, finishDate, teacherList, studentList, name);
    }
}

interface MissionCreator {
    mission: Mission;
    create(startDate: moment.Moment, finishDate: moment.Moment, teacherList: Teacher[], studentList: Student[], name: string): void;
    addUser(user: User): void;
    removeUser(user: User): void;
    saveOnFile(fileManager: FileManager): void;
}
export class MissionCreatorHandler {
    public mission: Mission;

    create(startDate: moment.Moment, finishDate: moment.Moment, teacherList: Teacher[], studentList: Student[], name: string): void {
        if (/^\d+$/.test(name)) {
            this.mission = new WebMission(startDate, finishDate, teacherList, studentList, name);
        }
        else {
            this.mission = new MobileMission(startDate, finishDate, teacherList, studentList, name);
        }
    }
    addUser(user: User): void {
        this.mission.addUser(user)
    }
    removeUser(user: User): void {
        this.mission.removeUser(user)
    }
    saveOnFile(fileManager: FileManager): void {
        const checker = new MissionNameChecker;
        if (checker.execute(this.mission.name, fileManager)) {
            console.log("Não foi possível salvar. Já existe uma missão com esse nome.");
            return;
        }
        fileManager.writeToFile(this.mission);
        console.log("Missão salva!")
    }
}

export class MissionNameChecker {
    execute(name: string, fileManager: FileManager): boolean {
        try {
            const allMissions = fileManager.readFromFile();
            const index = allMissions.findIndex((mission: any) => mission.name == name);
            return index > -1
        }
        catch (err) {
            console.log("Não foi possível verificar se já existe essa missão!")
        }
    }
}
