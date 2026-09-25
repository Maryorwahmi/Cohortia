#include <stdio.h>
#include <stdbool.h>
#include <string.h>

typedef struct { long comps; long swaps; } Stats;

void print_array(int arr[], int size) {
    for (int i = 0; i < size; i++) printf("%d ", arr[i]);
    printf("\n");
}

void bubble_sort(int arr[], int n, Stats *s, bool trace) {
    s->comps = s->swaps = 0;
    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            s->comps++;
            if (trace) printf("Compare arr[%d]=%d and arr[%d]=%d\n", j, arr[j], j+1, arr[j+1]);
            if (arr[j] > arr[j+1]) {
                int t = arr[j]; arr[j] = arr[j+1]; arr[j+1] = t;
                s->swaps++;
                swapped = true;
                if (trace) { printf(" Swap -> "); print_array(arr, n); }
            }
        }
        if (!swapped) break; // optimization: stop early when sorted
    }
}

void selection_sort(int arr[], int n, Stats *s, bool trace) {
    s->comps = s->swaps = 0;
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            s->comps++;
            if (trace) printf("Compare arr[%d]=%d and arr[%d]=%d\n", j, arr[j], min_idx, arr[min_idx]);
            if (arr[j] < arr[min_idx]) min_idx = j;
        }
        if (min_idx != i) {
            int t = arr[min_idx]; arr[min_idx] = arr[i]; arr[i] = t;
            s->swaps++;
            if (trace) { printf("Swap min at %d -> ", min_idx); print_array(arr, n); }
        }
    }
}

void insertion_sort(int arr[], int n, Stats *s, bool trace) {
    s->comps = s->swaps = 0;
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        if (trace) printf("Insert key=%d from index %d\n", key, i);
        while (j >= 0) {
            s->comps++;
            if (trace) printf("Compare key=%d with arr[%d]=%d\n", key, j, arr[j]);
            if (arr[j] > key) {
                arr[j + 1] = arr[j];
                s->swaps++;
                if (trace) { printf(" Shift -> "); print_array(arr, n); }
                j--;
            } else break;
        }
        arr[j + 1] = key;
        if (trace) { printf(" Place key -> "); print_array(arr, n); }
    }
}

int main() {
    int original_arr[] = {5, 1, 4, 2, 8, 0, 9};
    int n = sizeof(original_arr) / sizeof(original_arr[0]);

    int arr_bubble[10];
    int arr_selection[10];
    int arr_insertion[10];

    memcpy(arr_bubble, original_arr, sizeof(original_arr));
    memcpy(arr_selection, original_arr, sizeof(original_arr));
    memcpy(arr_insertion, original_arr, sizeof(original_arr));

    printf("Original array: ");
    print_array(original_arr, n);
    printf("\n");

    Stats sb, ss, si;

    bool TRACE = false; // TASK 2: change this to true to see step-by-step tracing

    printf("--- Bubble Sort ---\n");
    bubble_sort(arr_bubble, n, &sb, TRACE);
    printf("Sorted array: "); print_array(arr_bubble, n);
    printf("Comparisons: %ld Swaps: %ld\n\n", sb.comps, sb.swaps);

    printf("--- Selection Sort ---\n");
    selection_sort(arr_selection, n, &ss, TRACE);
    printf("Sorted array: "); print_array(arr_selection, n);
    printf("Comparisons: %ld Swaps: %ld\n\n", ss.comps, ss.swaps);

    printf("--- Insertion Sort ---\n");
    insertion_sort(arr_insertion, n, &si, TRACE);
    printf("Sorted array: "); print_array(arr_insertion, n);
    printf("Comparisons: %ld Swaps: %ld\n\n", si.comps, si.swaps);

    // Edge-case automated checks: already-sorted and reverse-sorted inputs
    int sorted_arr[] = {0,1,2,3,4,5,6};
    int rev_arr[]    = {6,5,4,3,2,1,0};

    // Test on sorted input
    memcpy(arr_bubble, sorted_arr, sizeof(sorted_arr));
    memcpy(arr_selection, sorted_arr, sizeof(sorted_arr));
    memcpy(arr_insertion, sorted_arr, sizeof(sorted_arr));
    bubble_sort(arr_bubble, n, &sb, false);
    selection_sort(arr_selection, n, &ss, false);
    insertion_sort(arr_insertion, n, &si, false);
    printf("Sorted input -> Bubble comps:%ld swaps:%ld | Selection comps:%ld swaps:%ld | Insertion comps:%ld swaps:%ld\n",
           sb.comps, sb.swaps, ss.comps, ss.swaps, si.comps, si.swaps);

    // Test on reverse input
    memcpy(arr_bubble, rev_arr, sizeof(rev_arr));
    memcpy(arr_selection, rev_arr, sizeof(rev_arr));
    memcpy(arr_insertion, rev_arr, sizeof(rev_arr));
    bubble_sort(arr_bubble, n, &sb, false);
    selection_sort(arr_selection, n, &ss, false);
    insertion_sort(arr_insertion, n, &si, false);
    printf("Reverse input -> Bubble comps:%ld swaps:%ld | Selection comps:%ld swaps:%ld | Insertion comps:%ld swaps:%ld\n",
           sb.comps, sb.swaps, ss.comps, ss.swaps, si.comps, si.swaps);

    return 0;
}
