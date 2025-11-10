#include <iostream>
#define SIZE 10
using namespace std;

// Fills an array with random integers [0, 99]
void FillArrayRandomly(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] = rand() % 100;
    }
}

// Prints the array
void PrintArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    srand(time(NULL));

    // ====================
    // TASK 1: Copy array using pointer arithmetic
    // ====================
    int x[SIZE];
    FillArrayRandomly(x, SIZE);

    int* ptr = x;
    int y[SIZE];
    for (int i = 0; i < SIZE; i++) {
        *(y + i) = *(ptr + i);
    }

    PrintArray(x, SIZE);
    PrintArray(y, SIZE);

    // ====================
    // TASK 2: Reverse array using a pointer to the array
    // ====================
    int a[SIZE];
    FillArrayRandomly(a, SIZE);

    int* pa = a;
    for (int i = 0; i < SIZE / 2; i++) {
        int temp = *(pa + i);
        *(pa + i) = *(pa + (SIZE - 1 - i));
        *(pa + (SIZE - 1 - i)) = temp;
    }

    PrintArray(a, SIZE);

    // ====================
    // TASK 3: Copy array into another in reverse order using pointer arithmetic
    // ====================
    int z[SIZE];
    FillArrayRandomly(z, SIZE);

    int* pz = z;
    int w[SIZE];
    for (int i = 0; i < SIZE; i++) {
        *(w + i) = *(pz + (SIZE - 1 - i));
    }

    PrintArray(z, SIZE);
    PrintArray(w, SIZE);
}

// I used help from AI (with dereferencing/pointer arithmetic), but at least now I understand how ts works lol
