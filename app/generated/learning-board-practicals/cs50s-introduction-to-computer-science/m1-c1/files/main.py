def binary_to_decimal(bin_str):
    return sum(int(bit) * (2 ** i) for i, bit in enumerate(reversed(bin_str)))


def decimal_to_binary(n):
    if n == 0:
        return '0'
    bits = []
    while n > 0:
        bits.append(str(n % 2))
        n //= 2
    return ''.join(reversed(bits))

# Starter inputs - modify these in Scene 2
BINARY_INPUT = '11010'
DECIMAL_INPUT = 27
BITS = 6
COLOR_BITS = 8

print(f"1) Binary {BINARY_INPUT} -> decimal: {binary_to_decimal(BINARY_INPUT)}")
print(f"2) Decimal {DECIMAL_INPUT} -> binary: {decimal_to_binary(DECIMAL_INPUT)}")
print(f"3) Unique values for {BITS} bits: {2 ** BITS}")
print(f"4) Max per color component for {COLOR_BITS} bits: {2 ** COLOR_BITS - 1}")
