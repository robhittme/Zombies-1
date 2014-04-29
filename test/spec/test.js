/* global describe, it */

(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {

            });
        });
    });

   describe('Sleep', function() {
   		it("should be hours * 15", function() {
   			var rest = new Sleep(3);
   			expect(rest.hours).to.be.equal(45);
   		});
   		it("should be life by hours of Sleep", function() {
   			var rest = new Sleep(3);
   			expect(rest.life).to.be.equal(45);
   		});
   });

   describe ("Coffee", function() {
   		it("should be cups * 5", function() {
   			var blackBrew = new Coffee(5);
   			expect(blackBrew.cups).to.be.equal(25);
   		});
   		it("should be life by cups of coffee", function () {
   			var blackBrew = new Coffee(5);
   			expect(blackBrew.life).to.be.equal(25);
   		});
   });
   describe ("Energydrink", function() {
   		it("should be cans * 5", function() {
   			var redBull = new Energydrink(5);
   			expect(redBull.cans).to.be.equal(25);
   		});
   		it("should be life by cans of Energydrink", function () {
   			var redBull = new Energydrink(5);
   			expect(redBull.life).to.be.equal(25);
   		});
   });
   describe ("Snacks", function() {
   		it("should be amount * 3", function() {
   			var chips = new Snacks(3);
   			expect(chips.amount).to.be.equal(9);
   		});
   		it("should be life by amount of snacks", function () {
   			var chips = new Snacks(3);
   			expect(chips.life).to.be.equal(9);
   		});
   });
   describe ("Classroom", function() {
   		describe("Difficulty of the Class", function() {
   			it("If the class is easy - 10 from life", function () {
   				var testAssignment = new Classroom();
   				var rest = new Sleep(6);
   				testAssignment.difficulty('easy', rest);
   				expect(rest.life).to.be.equal(80);
   		});
   			it("If the class is intermediate - 20 from life", function () {
   				var testAssignment = new Classroom();
   				var rest = new Sleep(6);
   				testAssignment.difficulty('intermediate', rest);
   				expect(rest.life).to.be.equal(70);
   		});
   			it("If the class is hard - 30 from life", function () {
   				var testAssignment = new Classroom();
   				var rest = new Sleep(6);
   				testAssignment.difficulty('hard', rest);
   				expect(rest.life).to.be.equal(60);
   		});
   });
   	describe ("AssignmentDifficulty", function() {
   			it("If the assignment is easy - 15 from life", function () {
   				var testAssignment = new AssignmentDifficulty();
   				var rest = new Sleep(6);
   				testAssignment.levelOfToughness('easy', rest);
   				expect(rest.life).to.be.equal(75);
   		});
   			it("If the assignment is intermediate - 30 from life", function () {
   				var testAssignment = new AssignmentDifficulty();
   				var rest = new Sleep(6);
   				testAssignment.levelOfToughness('intermediate', rest);
   				expect(rest.life).to.be.equal(60);
   		});
   			it("If the assignment is hard - 45 from life", function () {
   				var testAssignment = new AssignmentDifficulty();
   				var rest = new Sleep(6);
   				testAssignment.levelOfToughness('hard', rest);
   				expect(rest.life).to.be.equal(45);
   		});
   	});
   });`
})();
