#include <stdio.h>
#include <stdlib.h> // Required for malloc and free

int main(void)
{
    int num_grades;
    float *grades; // Pointer to store the dynamically allocated array
    float sum = 0.0;

    // 1. Prompt user for the number of grades
    printf("How many grades do you want to enter? ");
    scanf("%d", &num_grades);

    // Basic validation
    if (num_grades <= 0)
    {
        printf("Number of grades must be positive.\n");
        return 1;
    }

    // 2. Dynamically allocate memory for 'num_grades' floats
    // Your code here: Use malloc and check for NULL
    grades = (float *) malloc(num_grades * sizeof(float));
    if (grades == NULL)
    {
        printf("Memory allocation failed!\n");
        return 1;
    }

    // 3. Loop to get each grade from the user
    for (int i = 0; i < num_grades; i++)
    {
        printf("Enter grade %d: ", i + 1);
        scanf("%f", &grades[i]);
        sum += grades[i];
    }

    // 4. Calculate and print the average
    printf("Average grade: %.2f\n", sum / num_grades);

    // 5. Free the dynamically allocated memory
    // Your code here: Use free and set pointer to NULL
    free(grades);
    grades = NULL;

    return 0;
}