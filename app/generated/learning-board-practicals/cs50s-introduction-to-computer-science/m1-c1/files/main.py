# Binary Conversion Starter (runnable)
# Scene-friendly constants you will modify in Scene 2.
BINARY_INPUT = '11010'        # change me in Scene 2
DECIMAL_INPUT = 27            # change me in Scene 2
BITS = 6
COLOR_COMPONENT_BITS = 8

def bin_to_dec(bstr):
    """Convert a binary string (e.g. '101') to its decimal integer."""
    return sum(int(bit) * (2 ** i) for i, bit in enumerate(reversed(bstr)))

def dec_to_bin(n):
    """Convert a non-negative integer to its binary string representation."""
    if n == 0:
        return '0'
    bits = []
    while n > 0:
        bits.append(str(n % 2))
        n //= 2
    return ''.join(reversed(bits))

def unique_values(bits_count):
    """Return how many unique values can be represented with bits_count bits."""
    if bits_count < 0:
        raise ValueError('bits must be non-negative')
    return 2 ** bits_count

def max_color_component(bits_per_component):
    """Maximum decimal value representable with bits_per_component bits (e.g., 8 bits -> 255)."""
    return 2 ** bits_per_component - 1

def main():
    # Scene 1: Observe the outputs below. In Scene 2 you'll change the constants above.
    print(f"Binary {BINARY_INPUT} -> Decimal = {bin_to_dec(BINARY_INPUT)}")
    print(f"Decimal {DECIMAL_INPUT} -> Binary = {dec_to_bin(DECIMAL_INPUT)}")
    print(f"{BITS} bits can represent {unique_values(BITS)} unique values")
    print(f"With {COLOR_COMPONENT_BITS} bits per color channel, max per component = {max_color_component(COLOR_COMPONENT_BITS)}")

if __name__ == '__main__':
    main()
