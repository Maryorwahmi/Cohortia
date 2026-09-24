# binary_lab.py - Binary Conversion Challenge

def bin_to_dec(b):
    b = b.strip()
    if not all(ch in '01' for ch in b):
        raise ValueError("Input is not a binary string")
    return sum(int(bit) * (2 ** idx) for idx, bit in enumerate(reversed(b)))


def dec_to_bin(n):
    if n < 0:
        raise ValueError("dec_to_bin only accepts non-negative integers")
    return format(n, 'b')


def unique_values(bits):
    return 2 ** bits


def max_color_component():
    return 2 ** 8 - 1


def twos_complement(n, bits):
    if bits <= 0:
        raise ValueError("bits must be positive")
    if n >= 0:
        return format(n, f'0{bits}b')[-bits:]
    mask = (1 << bits)
    return format((mask + n) & (mask - 1), f'0{bits}b')


def main():
    # Baseline outputs for the hands-on activity
    print("Binary 11010 -> decimal:", bin_to_dec("11010"))
    print("Decimal 27 -> binary:", dec_to_bin(27))
    print("6 bits can represent:", unique_values(6), "values")
    print("Max color component (8-bit):", max_color_component())
    print("24-bit colors total:", unique_values(24))
    print("Two's complement of -5 (8-bit):", twos_complement(-5, 8))


if __name__ == "__main__":
    main()
