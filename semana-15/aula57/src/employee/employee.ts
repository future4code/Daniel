export default abstract class Employee {
    protected name:string;
    protected salary:number;
    private static instances:number = 0;

    constructor(name:string,salary:number){
        this.name = name;
        this.salary = salary;
        Employee.instances++
    }
    
    public abstract sayJob():void

    public countEmployee():number{
        return Employee.instances;
    }
}
