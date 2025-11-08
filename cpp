#include <iostream>
using namespace std;

int MaxNum(int a, int b)
{
	return (a > b) ? a : b;
}

char IsNumberPosNegorZero(int num)
{
	if (num > 0)
		return '+';
	else if (num < 0)
		return '-';
	else
		return '0';
}

template<typename T>
T calculator(T a, T b, char op)
{
	switch (op)
	{
	case '+':
		return a + b;
	case '-':
		return a - b;
	case '*':
		return a * b;
	case '/':
		if (b != 0)
			return a / b;
		else
		{
			cout << "Error: Division by zero!" << endl;
			return 0;
		}
	default:
		cout << "Error: Invalid operator!" << endl;
		return 0;
	}
}

int main()
{
	cout << "Enter two integers >>> ";
	int num1, num2;
	cin >> num1 >> num2;
	int* pnum1 = &num1;
	int* pnum2 = &num2;
	int max = MaxNum(*pnum1, *pnum2);
	cout << "The larger number is " << max << endl;

	cout << "Enter an integer >>> ";
	int num;
	cin >> num;
	int* pnum = &num;
	char result = IsNumberPosNegorZero(*pnum);
	cout << result << endl;

	int a, b;
	cout << "Enter two integers >>> ";
	cin >> a >> b;
	int* pa = &a;
	int* pb = &b;
	swap(*pa, *pb);
	cout << "After swapping: a = " << *pa << ", b = " << *pb << endl;

	int c, d;
	char op;
	cout << "Enter two integers and an operator (+, -, *, /) >>> ";
	cin >> c >> d >> op;
	int* pc = &c;
	int* pd = &d;
	int calcResult = calculator(*pc, *pd, op);
	cout << "Result: " << calcResult << endl;

	int n;
	cout << "Enter the size of the array >>> ";
	cin >> n;
	int *arr = new int[n];
	cout << "Enter " << n << " integers >>> ";
	for (int i = 0; i < n; i++) {
		cin >> *(arr + i);
	}
	int sum = 0;
	int* ptr = arr;
	for (int i = 0; i < n; i++) {
		sum += *ptr;
		ptr++;  
	}
	cout << "Sum of array elements: " << sum << endl;
	delete[] arr;
}
