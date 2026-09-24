#include <stdio.h>
#include <stdbool.h> // For boolean type in bubble sort optimization
#include <string.h>  // For memcpy

// Function to print an array
void print_array(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

// Bubble Sort implementation (copy from lesson)
void bubble_sort(int arr[], int n) {
    int i, j;
    bool swapped;
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if (swapped == false)
            break;
    }
}

// Selection Sort implementation (copy from lesson)
void selection_sort(int arr[], int n) {
    int i, j, min_idx;
    for (i = 0; i < n - 1; i++) {
        min_idx = i;
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx])
                min_idx = j;
        }
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

// Insertion Sort implementation (copy from lesson)
void insertion_sort(int arr[], int n) {
    int i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j+1] = key;
    }
}

int main() {
    int original_arr[] = {5, 1, 4, 2, 8, 0, 9, 3, 7, 6};
    int n = sizeof(original_arr) / sizeof(original_arr[0]);

    // Create copies for each sort
    int arr_bubble[n];
    int arr_selection[n];
    int arr_insertion[n];

    memcpy(arr_bubble, original_arr, sizeof(original_arr));
    memcpy(arr_selection, original_arr, sizeof(original_arr));
    memcpy(arr_insertion, original_arr, sizeof(original_arr));

    printf("Original array: ");
    print_array(original_arr, n);
    printf("\n");

    // Test Bubble Sort
    printf("--- Bubble Sort ---\n");
    bubble_sort(arr_bubble, n);
    printf("Sorted array: ");
    print_array(arr_bubble, n);
    printf("\n");

    // Test Selection Sort
    printf("--- Selection Sort ---\n");
    selection_sort(arr_selection, n);
    printf("Sorted array: ");
    print_array(arr_selection, n);
    printf("\n");

    // Test Insertion Sort
    printf("--- Insertion Sort ---\n");
    insertion_sort(arr_insertion, n);
    printf("Sorted array: ");
    print_array(arr_insertion, n);
    printf("\n");

    return 0;
}