#include <stdio.h>
#include <stdlib.h> // For malloc and free

// Define the Node structure
typedef struct Node {
    int data;
    struct Node *next;
} Node;

// Function to insert a new node at the beginning of the list
Node *insert_at_head(Node *head, int value)
{
    Node *new_node = (Node *) malloc(sizeof(Node));
    if (new_node == NULL)
    {
        printf("Memory allocation failed for new node!\n");
        exit(1);
    }
    new_node->data = value;
    new_node->next = head;
    return new_node;
}

// BUGGY: Function to insert a new node at the end of the list
// Your task will be to fix just 1-2 lines here so the end insertions work.
Node *insert_at_end(Node *head, int value)
{
    // Create the new node
    Node *new_node = (Node *) malloc(sizeof(Node));
    if (new_node == NULL)
    {
        printf("Memory allocation failed for new node!\n");
        exit(1);
    }
    new_node->data = value;
    // BUG: new_node->next is not set correctly for a standalone last node
    // (This will still let an insertion on an empty list succeed.)

    // If the list is empty, the new node becomes the head
    if (head == NULL)
    {
        return new_node;
    }

    // Traverse the list to find the last node
    Node *current = head;
    while (current->next != NULL)
    {
        current = current->next;
    }

    // BUG: We forgot to link the last node to the new node here.

    return head; // Return the original head (it hasn't changed if buggy)
}

// Function to print the list
void print_list(Node *head)
{
    Node *current = head;
    while (current != NULL)
    {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");
}

// Function to free the list memory
void free_list(Node *head)
{
    Node *current = head;
    while (current != NULL)
    {
        Node *next_node = current->next;
        free(current);
        current = next_node;
    }
}

int main(void)
{
    Node *head = NULL;

    // Insert some elements at the head
    head = insert_at_head(head, 30);
    head = insert_at_head(head, 20);
    head = insert_at_head(head, 10);
    printf("List after head insertions: ");
    print_list(head); // Expected: 10 -> 20 -> 30 -> NULL

    // Insert some elements at the end
    head = insert_at_end(head, 40);
    head = insert_at_end(head, 50);
    printf("List after end insertions: ");
    print_list(head); // If buggy: still 10 -> 20 -> 30 -> NULL

    // Test with an initially empty list for insert_at_end
    Node *empty_list_head = NULL;
    empty_list_head = insert_at_end(empty_list_head, 100);
    printf("Empty list after end insertion: ");
    print_list(empty_list_head); // Expected: 100 -> NULL
    free_list(empty_list_head);

    // Don't forget to free the main list!
    free_list(head);

    return 0;
}
