#include <stdio.h>
#include <string.h> // For strcmp

// Search for target string in array of strings. Return index if found, -1 otherwise.
int linear_search_strings(char *arr[], int size, char *target) {
    for (int i = 0; i < size; i++) {
        if (strcmp(arr[i], target) == 0) { // strcmp returns 0 if strings are equal
            return i;
        }
    }
    return -1;
}

int main(int argc, char *argv[]) {
    char *names[] = {"Alice", "Bob", "Charlie", "David", "Eve"};
    int size = sizeof(names) / sizeof(names[0]);

    // If the user provides a command-line argument, search for that target.
    if (argc > 1) {
        int idx = linear_search_strings(names, size, argv[1]);
        if (idx != -1) {
            printf("Target \"%s\" found at index %d.\n", argv[1], idx);
        } else {
            printf("Target \"%s\" not found.\n", argv[1]);
        }
        return 0;
    }

    // Default demo behaviour (no args): show a found and a not-found case.
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
        printf("Target \"%s\" found at index %d.\n", target2, result2);
    } else {
        printf("Target \"%s\" not found.\n", target2);
    }

    return 0;
}
