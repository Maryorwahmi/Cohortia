import random

# Seed for reproducibility in this lab (so the outputs are deterministic for verification)
random.seed(0)

def generate_log(filename, num_entries):
    """Generates a log file with random success/warning entries."""
    with open(filename, "w") as f:
        for i in range(num_entries):
            if random.random() < 0.7: # 70% chance of success
                f.write(f"Log entry {i+1}: Operation successful.\n")
            else:
                f.write(f"Log entry {i+1}: Warning - Low disk space.\n")
    print(f"Generated {num_entries} log entries in '{filename}'.")


def analyze_log(filename):
    """Analyzes a log file for success and warning entries."""
    success_count = 0
    warning_count = 0
    try:
        with open(filename, "r") as f:
            for line in f:
                if "successful" in line:
                    success_count += 1
                elif "Warning" in line:
                    warning_count += 1
        print(f"Analysis of '{filename}':")
        print(f"  Successful operations: {success_count}")
        print(f"  Warning operations: {warning_count}")
    except FileNotFoundError:
        print(f"Error: Log file '{filename}' not found.")
    except Exception as e:
        print(f"An unexpected error occurred during analysis: {e}")


# --- Main execution (runnable starter) ---
if __name__ == "__main__":
    log_file_name = "application.log"
    # To experiment in Scene 2 change the next line to 20 (or another number)
    num_entries_to_generate = 10

    # Part 1: Generate the log file
    generate_log(log_file_name, num_entries_to_generate)

    # Part 2: Analyze the log file
    analyze_log(log_file_name)

    # Sample test calls you can run separately (import main in python -c to call analyze_log):
    # analyze_log("non_existent_log.txt")
