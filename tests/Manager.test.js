const Manager = require("../library/Manager");

describe('Manager', () => {

    describe('instantiation', () => {
        it('should pass and instantiate object correctly', () => {
            let testManager = new Manager("Tim", 4, "BestBossTim@gmail.com", "Manager", "100");

            expect(testManager.name).toBe("Tim");
            expect(testManager.id).toBe(4);
            expect(testManager.email).toBe("BestBossTim@gmail.com");
            expect(testManager.role).toBe("Manager");
            expect(testManager.officeNumber).toBe("100");
        });
    });

    describe('getRole', () => {
        it('should return role correctly', () => {
            let testManager = new Manager("Tim", 4, "BestBossTim@gmail.com", "Manager", "100");

            let role = testManager.getRole();

            expect(role).toBe("Manager");
        });
    });

    describe('getofficeNumber', () => {
        it('should return officeNumber correctly', () => {
            let testManager = new Manager("Tim", 4, "BestBossTim@gmail.com", "Manager", "100");

            let officeNumber = testManager.getOfficeNumber();

            expect(officeNumber).toBe("100");
        });
    });
});