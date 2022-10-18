class Emp_Payroll_Data
{
    name;
    profileImage;
    gender;
    department;
    salary;
    startDate;
    notes;
    
    // Constructor
    constructor(...params)
    {
        this.name = params[0];
        this.profileImage = params[1];
        this.gender = params[2];
        this.department = params[3];
        this.salary = params[4];
        this.startDate = params[5];
        this.notes = params[6];
    }

    // getter and setter method
    get name() {return this._name;}
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Given name is Incorrect';
    }

    get profileImage(){return this._profileImage;}
    set profileImage(profileImage){this._profileImage=profileImage;}

    get gender(){return this._gender;}
    set gender(gender){this._gender=gender;}

    get department(){return this.department;}
    set department(department){this.department=department;}

    get startDate(){return this._startDate;}
    set startDate(startDate){this._startDate=startDate;}

    get notes(){return this._notes;}
    set notes(notes){this._notes=notes;}

    // method
    toString()
    {
        return "name : " +this.name + "profileImage : "+this.profileImage + "gender : "+ this.gender + 
        "department : "+this.department + "salary : "+this.salary + "startDate : "+startDate + "notes : "+this.notes ;
    }
}