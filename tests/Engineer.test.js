const Engineer = require("../library/Engineer");

describe('Engineer', () => {

    describe('instantiation', () => {
        it('should pass and instantiate object correctly', () => {
            let testEnginer = new Engineer("Burce Wayne", 2, "NotBatman@gmail.com", "Engineer", "BatMan02");

            expect(testEnginer.name).toBe("Burce Wayne");
            expect(testEnginer.id).toBe(2);
            expect(testEnginer.email).toBe("NotBatman@gmail.com");
            expect(testEnginer.role).toBe("Engineer");
            expect(testEnginer.github).toBe("BatMan02");
        });
    });

    describe('getRole', () => {
        it('should return role correctly', () => {
            let testEnginer = new Engineer("Burce Wayne", 2, "NotBatman@gmail.com", "Engineer", "BatMan02");

            let role = testEnginer.getRole();

            expect(role).toBe("Engineer");
        });
    });

    describe('getGithub', () => {
        it('should return github correctly', () => {
            let testEnginer = new Engineer("Burce Wayne", 2, "NotBatman@gmail.com", "Engineer", "BatMan02");

            let github = testEnginer.getGithub();

            expect(github).toBe("BatMan02");
        });
    });
});