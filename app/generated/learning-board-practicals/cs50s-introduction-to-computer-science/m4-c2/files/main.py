def calculate(num1, num2, op):
    """
    Performs a basic arithmetic operation on two numbers.

    Args:
        num1 (float): The first number.
        num2 (float): The second number.
        op (str): The operator ('+', '-', '*', '/')

    Returns:
        float or str: The result of the operation or an error message.
    """
    if op == '+':
        return num1 + num2
    elif op == '-':
        return num1 - num2
    elif op == '*':
        return num1 * num2
    elif op == '/':
        # Handle division by zero
        if num2 == 0:
            return "Error: Division by zero!"
        return num1 / num2
    else:
        return "Error: Invalid operator."


if __name__ == "__main__":
    # Demonstration examples
    print("Demo: basic calculate function outputs")
    print(f"10 + 5 = {calculate(10, 5, '+')}")
    print(f"10 - 5 = {calculate(10, 5, '-')}")
    print(f"10 * 5 = {calculate(10, 5, '*')}")
    print(f"10 / 5 = {calculate(10, 5, '/')}")
    print(f"10 / 0 = {calculate(10, 0, '/')}")
    print(f"10 ? 5 = {calculate(10, 5, '?')}")

    # Uncomment the block below to enable interactive mode:
    # while True:
    #     first_num_str = input("Enter the first number (or 'q' to quit): ")
    #     if first_num_str.strip().lower() == 'q':
    #         break
    #     try:
    #         first_num = float(first_num_str)
    #     except ValueError:
    #         print("Please enter a valid number.")
    #         continue
    #     second_num_str = input("Enter the second number: ")
    #     try:
    #         second_num = float(second_num_str)
    #     except ValueError:
    #         print("Please enter a valid number.")
    #         continue
    #     operator = input("Enter an operator (+, -, *, /): ").strip()
    #     result = calculate(first_num, second_num, operator)
    #     print(f"Result: {result}")
