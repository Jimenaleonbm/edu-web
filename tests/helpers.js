let failures = 0;

function assertEqual(actual, expected, testName) {
    const pass = JSON.stringify(actual) === JSON.stringify(expected);
    if (pass) {
        console.log("✓ PASS: " + testName);
    } else {
        failures++;
        console.log("✗ FAIL: " + testName);
        console.log("  expected:", expected);
        console.log("  actual:  ", actual);
    }
}

function report() {
  console.log(failures === 0 ? "All tests passed" : failures + " test(s) failed");
}

module.exports = { assertEqual, report };