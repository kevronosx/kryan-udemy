class Department {
  constructor(
    private readonly id: string,
    private name: string,
    private employees: string[] = []
  ) {}

  getName() {
    return this.name;
  }

  setName(name: string) {
    return (this.name = name);
  }

  addEmployee(employee: string) {
    if (employee === 'Max') {
      return;
    }
    return this.employees.push(employee);
  }

  getEmployees(this: Department) {
    return this.employees;
  }

  describe(this: Department) {
    return console.log(`Department: ${this.id} ${this.name}`);
  }
}

class ITDepartment extends Department {
  private lastReport: string;

  get recentReport() {
    return this.lastReport;
  }

  constructor(id: string, name: string, public admins: string[]) {
    super(id, name);
    this.admins = admins;
  }

  getAdmins() {
    return this.admins;
  }
}

const accounting = new Department('D1', 'Accounting');
accounting.describe();
accounting.addEmployee('Kevron');
accounting.addEmployee('Deadpool');
accounting.addEmployee('Kill');
accounting.addEmployee('Max');
console.log('Employees', accounting.getEmployees());

const itDepartment = new ITDepartment('D2', 'IT', ['one', 'two']);
itDepartment.describe();
console.log('IT Admins', itDepartment.getAdmins());
