import { compare } from '../index';

describe('compare function', () => {
    it('should return true for valid chained comparisons', () => {
        expect(compare`${5} < 10 < ${20}`).toBe(true);  // Valid chained comparison
        expect(compare`${5} <= 5 <= ${10}`).toBe(true);  // Valid comparison
        expect(compare`${15} > 10 > ${5}`).toBe(true);   // Valid comparison
        expect(compare`${15} >= 15 >= ${10}`).toBe(true); // Valid comparison
    });

    it('should return false for invalid chained comparisons', () => {
        expect(compare`${5} < 3 < ${20}`).toBe(false);  // Invalid chain
        expect(compare`${5} <= 3 <= ${10}`).toBe(false);  // Invalid chain
        expect(compare`${15} > 20 > ${5}`).toBe(false);  // Invalid chain
        expect(compare`${15} >= 20 >= ${10}`).toBe(false); // Invalid chain
    });

    it('should handle invalid operators', () => {
        expect(compare`${5} <> 10 <> ${20}`).toBe(false);  // Invalid operator
        expect(compare`${5} == 10 == ${20}`).toBe(false);  // Invalid operator
    });

    it('should handle edge cases', () => {
        expect(compare`${5} < 5 < ${10}`).toBe(false);  // False because < is strict
        expect(compare`${10} >= 10 >= ${5}`).toBe(true);  // Valid comparison
    });

    it('should handle incomplete input (missing one operand)', () => {
        const invalidChain = () => expect(compare`${5} < 10 <`).toThrow();  // Invalid because missing one operand
        const invalidChain2 = () => expect(compare`${5} < 10`).toThrow();  // Invalid because missing one operand
        const invalidChain3 = () => expect(compare`${5} <`).toThrow();  // Invalid because missing one operand

        expect(invalidChain).toThrow();
        expect(invalidChain2).toThrow();
        expect(invalidChain3).toThrow();
    });
});