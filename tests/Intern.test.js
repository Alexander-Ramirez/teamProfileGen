const Intern = require("../library/Intern");

describe('Intern', () => {

    describe('instantiation', () => {
        it('should pass and instantiate object correctly', () => {
            let testIntern = new Intern("Zeus", 3, "ZuesLighting@gmail.com", "Intern", "SMU");

            expect(testIntern.name).toBe("Zeus");
            expect(testIntern.id).toBe(3);
            expect(testIntern.email).toBe("ZuesLighting@gmail.com");
            expect(testIntern.role).toBe("Intern");
            expect(testIntern.school).toBe("SMU");
        });
    });

    describe('getRole', () => {
        it('should return role correctly', () => {
            let testIntern = new Intern("Zeus", 3, "ZuesLighting@gmail.com", "Intern", "SMU");

            let role = testIntern.getRole();

            expect(role).toBe("Intern");
        });
    });

    describe('getSchool', () => {
        it('should return school correctly', () => {
            let testIntern = new Intern("Zeus", 3, "ZuesLighting@gmail.com", "Intern", "SMU");

            let school = testIntern.getSchool();

            expect(school).toBe("SMU");
        });
    });
});