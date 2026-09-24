#include <stdio.h>
#include <string.h> // For strcmp function

// TODO: Modify this function to search for a string in an array of strings
// It should return the index if found, -1 otherwise.
int linear_search_strings(char *arr[], int size, char *target) {
    // Your implementation here
    for (int i = 0; i < size; i++) {
        if (strcmp(arr[i], target) == 0) { // strcmp returns 0 if strings are equal
            return i;
        }
    }
    return -1;
}

int main() {
    char *names[] = {"Alice", "Bob", "Charlie", "David", "Eve"};
    int size = sizeof(names) / sizeof(names[0]);

    char *target1 = "Charlie";
    char *target2 = "Frank";

    int result1 = linear_search_strings(names, size, target1);
    if (result1 != -1) {
        printf("Target \"%s\" found at index %d.\n", target1, result1);
    } else {
        printf("Target \"%s\" not found.\n", target1);
    }

    int result2 = linear_search_strings(names, size, target2);
    if (result2 != -1) {
        printf("Target \"%s\" not found.\n", target2);
    } else {
        printf("Target \"%s\" found at index %d.\n", target2, result2); // Corrected print statement for not found
    }

    return 0;
}