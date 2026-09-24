#include <stdio.h>
#include <stdlib.h> // malloc, calloc, realloc, free

int main(void)
{
    int num_grades;
    float *grades = NULL; // pointer to heap-allocated array
    float sum = 0.0f;

    printf("How many grades do you want to enter? ");
    if (scanf("%d", &num_grades) != 1)
    {
        printf("Invalid number input.\n");
        return 1;
    }

    if (num_grades <= 0)
    {
        printf("Number of grades must be positive.\n");
        return 1;
    }

    // ALLOCATION: allocate memory for num_grades floats on the heap
    // NOTE: this starter uses malloc *but intentionally does not use sizeof(float) here*.
    // This is deliberate for the second scene where you'll change it to the correct form.
    grades = (float *) malloc((size_t) num_grades);
    if (grades == NULL)
    {
        printf("Memory allocation failed!\n");
        return 1;
    }

    for (int i = 0; i < num_grades; i++)
    {
        printf("Enter grade %d: ", i + 1);
        if (scanf("%f", &grades[i]) != 1)
        {
            printf("Invalid grade input.\n");
            free(grades);
            grades = NULL;
            return 1;
        }
        sum += grades[i];
    }

    printf("Average grade: %.2f\n", sum / num_grades);

    free(grades);
    grades = NULL; // avoid dangling pointer

    return 0;
}
