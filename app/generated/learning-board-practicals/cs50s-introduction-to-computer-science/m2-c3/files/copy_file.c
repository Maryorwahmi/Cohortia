#include <stdio.h>
#include <stdlib.h> // For exit()

int main(int argc, char *argv[])
{
    // 1. Check for correct number of command-line arguments
    if (argc != 3)
    {
        printf("Usage: %s <input_filename> <output_filename>\n", argv[0]);
        return 1; // Indicate error
    }

    char *input_filename = argv[1];
    char *output_filename = argv[2];

    FILE *input_file = NULL;
    FILE *output_file = NULL;
    int c; // To hold characters read from file, must be int for EOF

    // 2. Open the input file for reading
    input_file = fopen(input_filename, "r");
    if (input_file == NULL)
    {
        printf("Error: Could not open input file '%s'.\n", input_filename);
        return 1;
    }

    // 3. Open the output file for writing
    output_file = fopen(output_filename, "w");
    if (output_file == NULL)
    {
        printf("Error: Could not open output file '%s'.\n", output_filename);
        fclose(input_file); // Close input file before exiting
        return 1;
    }

    // 4. Read character by character from input and write to output
    while ((c = fgetc(input_file)) != EOF)
    {
        fputc(c, output_file);
    }

    // 5. Close both files
    fclose(input_file);
    fclose(output_file);

    printf("File '%s' successfully copied to '%s'.\n", input_filename, output_filename);

    return 0;
}
