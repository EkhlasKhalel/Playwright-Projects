class TestSuite {
  static totalSuites = 0;

  constructor(public name: string) {
    TestSuite.totalSuites++;
  }

  static getSuiteCount() {
    return TestSuite.totalSuites;
  }
}

const suite1 = new TestSuite("Login Tests");
const suite2 = new TestSuite("Signup Tests");

console.log(TestSuite.getSuiteCount()); // 2


class BaseTest {
  constructor(public name: string) {}
  run() {
    console.log(`Running ${this.name}`);
  }
}

class ExtendedTest extends BaseTest {
  constructor(name: string, public retries: number) {
    super(name); // Call BaseTest constructor
  }

  run() {
    super.run(); // Call BaseTest method
    console.log(`Retries allowed: ${this.retries}`);
  }
}
const extend = new ExtendedTest("Omar", 1);
extend.run();

function combine(a: number, b: number, x: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(10, 20, 30));         // 30
console.log(combine("Hello, ", "Omar")); // "Hello, Omar"
console.log(combine('o', 'false'));