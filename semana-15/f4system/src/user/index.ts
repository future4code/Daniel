import * as moment from 'moment'
import { Mission } from '../mission';
import { Specialty } from '../specialty';
import { FileManager } from '../fileManager/index';
import { MissionNameChecker } from '../mission/index';

export interface User {
    name: string;
    birthDate: string;
    email: string;
}

export class Student implements User {
    name: string;
    birthDate: string;
    email: string;
    mission: string;

    constructor(name: string, birthDate: moment.Moment, email: string, mission: string) {
        this.name = name;
        this.birthDate = birthDate.format("DD/MM/YYYY");
        this.email = email;
        this.mission = mission;
    }

}

export class Teacher implements User {
    name: string;
    birthDate: string;
    email: string;
    specialty: Specialty[];
    constructor(name: string, birthDate: moment.Moment, email: string, specialty: Specialty[]) {
        this.name = name;
        this.birthDate = birthDate.format("DD/MM/YYYY");
        this.email = email;
        this.specialty = specialty;
    }
}

interface UserTeacherCreator {
    create(name: string, birthDate: moment.Moment, email: string, specialty: Specialty[]): Teacher
}

export class TeacherCreator implements UserTeacherCreator {

    create(name: string, birthDate: moment.Moment, email: string, specialty: Specialty[]): Teacher {
        if (name && email) {
            const newTeacher = new Teacher(name, birthDate, email, specialty);
            return newTeacher
        }
        else {
            console.log("Dados inválidos para criação do usuário.");
        }
    }
}

interface UserStudentCreator {
    create(name: string, birthDate: moment.Moment, email: string, mission: string): Student
}

export class StudentCreator implements UserStudentCreator {

    create(name: string, birthDate: moment.Moment, email: string, mission: string): Student {
        if (name && email) {
            const newStudent = new Student(name, birthDate, email, mission);
            return newStudent

        }
        else {
            console.log("Dados inválidos para criação do usuário.");
        }
    }
}

