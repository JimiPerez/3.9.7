// Write your tests here!
const { expect } = require("chai");
const partitionStudentsByScore = require("../src/solution.js");

describe("partitionStudentsByScore()", () => {
  it("should split students by score", () => {
    const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];
    const [failGroup, passGroup] = partitionStudentsByScore(students, 8);
    expect(failGroup).to.have.deep.members([
      { name: "Morgan Sutton", score: 7.4 }
    ]);
    expect(passGroup).to.have.deep.members([
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Natalee Vargas", score: 9.2 }]);
    });


  it('should place all students in first array if necessary', () => {
    const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];
    const [failGroup, passGroup] = partitionStudentsByScore(students, 10);
    expect(failGroup).to.have.deep.members([
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Natalee Vargas", score: 9.2 }
    ]);
    expect(passGroup).to.have.deep.members([]);
    
  });

  it('should place all students in second array if necessary', () => {
    const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];
    const [failGroup, passGroup] = partitionStudentsByScore(students, 6);
    expect(failGroup).to.have.deep.members([]);
    expect(passGroup).to.have.deep.members([
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Natalee Vargas", score: 9.2 }
    ]);
    
  });

  it("should return an empty array with two arrays if the students list is empty", () => {
    const students = [];
    const actual = partitionStudentsByScore(students, 8);
    const expected = [[], []]
    expect(actual).to.eql(expected);
  });
});
