#include <stdio.h>

// TODO: Implement the recursive power function
long long power(int base, int exp) {
    // Base case: If exponent is 0, result is 1
    if (exp == 0) {
        return 1;
    }
    // Recursive step: base * power(base, exp - 1)
    else {
        return base * power(base, exp - 1);
    }
}

int main() {
    int base1 = 2, exp1 = 5; // 2^5 = 32
    int base2 = 3, exp2 = 0; // 3^0 = 1
    int base3 = 10, exp3 = 3; // 10^3 = 1000

    printf("%d^%d = %lld\n", base1, exp1, power(base1, exp1));
    printf("%d^%d = %lld\n", base2, exp2, power(base2, exp2));
    printf("%d^%d = %lld\n", base3, exp3, power(base3, exp3));

    return 0;
}
