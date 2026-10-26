# data_types.py
student_name = "Alice Smith"
student_age = 20
gpa = 3.85
is_enrolled = True
course_credits = 15

# Print their values and types
print(f"Name: {student_name}, Type: {type(student_name)}")
print(f"Age: {student_age}, Type: {type(student_age)}")
print(f"GPA: {gpa}, Type: {type(gpa)}")
print(f"Enrolled: {is_enrolled}, Type: {type(is_enrolled)}")
print(f"Credits: {course_credits}, Type: {type(course_credits)}")

# Arithmetic operations
total_score = 85 + 92 + 78
average_score = total_score / 3
remaining_credits = 120 - course_credits # Assuming 120 credits for graduation

print(f"\nTotal score for 3 courses: {total_score}")
print(f"Average score: {average_score:.2f}") # Format to 2 decimal places
print(f"Credits remaining for graduation: {remaining_credits}")

# Experiment with floor division and modulo
hours_in_day = 24
days_in_week = 7
weeks_and_remainder = hours_in_day // days_in_week
remaining_hours = hours_in_day % days_in_week
print(f"24 hours is {weeks_and_remainder} full 'days' in a 7-day week, with {remaining_hours} hours remaining.")

# Type Conversion
price_str = "49.99"
quantity_str = "2"

# Try to multiply them directly (this will cause an error!)
# total_cost_error = price_str * quantity_str
# print(total_cost_error)

# Convert to numbers first
price_float = float(price_str)
quantity_int = int(quantity_str)
total_cost = price_float * quantity_int

print(f"\nOriginal price (string): {price_str}, Type: {type(price_str)}")
print(f"Original quantity (string): {quantity_str}, Type: {type(quantity_str)}")
print(f"Converted price (float): {price_float}, Type: {type(price_float)}")
print(f"Converted quantity (int): {quantity_int}, Type: {type(quantity_int)}")
print(f"Total cost: ${total_cost:.2f}")

# Convert a number back to a string for concatenation
message = "Your total is: $" + str(total_cost)
print(message)