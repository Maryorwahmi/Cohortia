import sys

name = input("What is your name? ")
fav_color = input("What is your favorite color? ")
birth_year_str = input("What year were you born? ")
try:
    birth_year_int = int(birth_year_str)
except ValueError:
    print(f"Error: invalid birth year '{birth_year_str}'. Please enter a numeric year.")
    sys.exit(1)

current_year_input = input("What is the current year? (press Enter for 2023) ")
if current_year_input.strip() == "":
    current_year = 2023
else:
    try:
        current_year = int(current_year_input)
    except ValueError:
        print(f"Error: invalid current year '{current_year_input}'. Using 2023.")
        current_year = 2023

age = current_year - birth_year_int
if age < 0:
    print(f"That would make you {age} years old — are we time traveling?")

# Extra feature: compute decade and adult check
decade = (birth_year_int // 10) * 10
print(f"You were born in the {decade}s.")
if age >= 18:
    print("You are an adult (18+).")
else:
    print("You are not an adult yet.")

print(f"Hello, {name}! I love {fav_color} too. You are approximately {age} years old.")
