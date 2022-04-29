const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Unit Test for static method in FizzbuzzService" , () => {

    test("give explorer object a trick attributte" , () => {
        const explorer1 = {name: "Explorer1", score: 1};
        FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 
        expect(explorer1.trick).not.toBeUndefined();
        expect(typeof explorer1.trick).toBe("number");

        const explorer3 = {name: "Explorer3", score: 3};
        FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}
        expect(explorer3.trick).not.toBeUndefined();
        expect(typeof explorer3.trick).toBe("string");

        const explorer5 = {name: "Explorer5", score: 5};
        FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}
        expect(explorer5.trick).not.toBeUndefined();
        expect(typeof explorer5.trick).toBe("string");

        const explorer15 = {name: "Explorer15", score: 15};
        FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        expect(explorer15.trick).not.toBeUndefined();
        expect(typeof explorer15.trick).toBe("string");
    });

    test("Return FIZZ if number divisible by 3 , BUZZ if number divisible by 5 , FIZZBUZZ if number disivible by 15, and number if not divisible by 3/5/15",
        () => {
            const number1 = 3;
            const result1 = FizzbuzzService.applyValidationInNumber(number1);
            expect(typeof result1).toBe("string");
            expect(result1).toBe("FIZZ");

            const number2 = 5;
            const result2 = FizzbuzzService.applyValidationInNumber(number2);
            expect(typeof result2).toBe("string");
            expect(result2).toBe("BUZZ");

            const number3 = 15;
            const result3 = FizzbuzzService.applyValidationInNumber(number3);
            expect(typeof result3).toBe("string");
            expect(result3).toBe("FIZZBUZZ");

            const number4 = 7;
            const result4 = FizzbuzzService.applyValidationInNumber(number4);
            expect(typeof result4).toBe("number");
            expect(result4).toBe(7);
        });

});