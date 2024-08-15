import operations from "../src/operations"

describe("Operations", () => {
    test("operation.sum(2,3) should return 5", () => {
        const total = operations.sum(2, 3);
        expect(total).toEqual(5);
    });

    test("operation.sumPositives(-2,3) should return null", () => {
        const total = operations.sumPositives(-2, 3);
        expect(total).toBeNull();
    })

    test("operations.sumPositive(14,13) should return 27", () => {
        const total = operations.sumPositives(14, 13);
        expect(total).toEqual(27);
    })
});