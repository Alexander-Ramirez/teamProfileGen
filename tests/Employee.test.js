const Employee = require("../library/Employee");

describe('Employee', () => {

    describe('instantiation', () => {
        it('should pass and instantiate object correctly', () => {
            let testEmployee = new Employee("Alex", 1, "AlexRamirez@gmail.com", "Employee");

            expect(testEmployee.name).toBe("Alex");
            expect(testEmployee.id).toBe(1);
            expect(testEmployee.email).toBe("AlexRamirez@gmail.com");
            expect(testEmployee.role).toBe("Employee");
        });
    });

    describe('getName', () => {
        it('should return name correctly', () => {
            let testEmployee = new Employee("Alex", 1, "AlexRamirez@gmail.com", "Employee");

            let name = testEmployee.getName();

            expect(name).toBe("Alex");
        });
    });
    
    describe('getID', () => {
        it('should return id correctly', () => {
            let testEmployee = new Employee("Alex", 1, "AlexRamirez@gmail.com", "Employee");

            let id = testEmployee.getId();

            expect(id).toBe(1);
        });
    });
    
    describe('getEmail', () => {
        it('should return email correctly', () => {
            let testEmployee = new Employee("Alex", 1, "AlexRamirez@gmail.com", "Employee");

            let email = testEmployee.getEmail();

            expect(email).toBe("AlexRamirez@gmail.com");
        });
    });

    describe('getRole', () => {
        it('should return role correctly', () => {
            let testEmployee = new Employee("Alex", 1, "AlexRamirez@gmail.com", "Employee");

            let role = testEmployee.getRole();

            expect(role).toBe("Employee");
        });
    });
});