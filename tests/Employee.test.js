const Employee = require("../library/Employee");

describe('Employee', () => {

    describe('instantiation', () => {
        it('should pass and instantiate object correctly', () => {
            let testEmployee = new Employee("Jason", 1, "JasonDay@gmail.com");

            expect(testEmployee.name).toBe("Jason");
            expect(testEmployee.id).toBe(1);
            expect(testEmployee.email).toBe("JasonDay@gmail.com");
        });
    });

    describe('getEmail', () => {
        it('should return email correctly', () => {
            let testEmployee = new Employee("Jason", 1, "JasonDay@gmail.com");

            let email = testEmployee.getEmail();

            expect(email).toBe("JasonDay@gmail.com");
        });
    });

    describe('getID', () => {
        it('should return id correctly', () => {
            
        });
    });

    describe('getName', () => {
        it('should return name correctly', () => {
            
        });
    });

    describe('getRole', () => {
        it('should return role correctly', () => {
            
        });
    });
});