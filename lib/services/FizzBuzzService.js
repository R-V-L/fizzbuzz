class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
            explorer.trick = "FIZZBUZZ";
        } else if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
        } else if (explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
        } else {
            explorer.trick = explorer.score;
        }
        return explorer;
    }
    static applyValidationInNumber(number) {
        const fizzbuzz = { score: number };
        if (number % 5 === 0 && number % 3 === 0) {
            fizzbuzz.trick = "FIZZBUZZ";
        } else if (number % 5 === 0) {
            fizzbuzz.trick = "BUZZ";
        } else if (number % 3 === 0) {
            fizzbuzz.trick = "FIZZ";
        } else {
            fizzbuzz.trick = number;
        }
        return fizzbuzz;
    }
}

module.exports = FizzbuzzService;