/*
1. What is the Big O for this?
1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

Constant time 0(1) because you ask all of the people at once and get one answer.

2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

Linear time O(n) because you ask each person in the room until you get an answer or run out of people.

2. Even or odd
What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }
}
Constant time O(1) because this performs one calculation

What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
 
Polynomial Time O(n*m) The first for loop is n^2 and for each element of the first loop a for loop that is m^2 ,(because it uses a different set of data we use m instead of n), will run. O(n^2*m^2). After we drop the consonants we get O(n*m).

4. Doubler
What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

Linear time O(n) because the look visits every index in the array

5. Naive search
What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

Linear O(n) in the worst case you have to search the whole array

6. Creating pairs:
What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
Quadratic Time O(n^2) because it is polynomial time to the second power. O(n*n) = O(n^2) 

7. Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

Linear time O(n) fibonacci sequence because it loops for every num given but the if else is in constant time

8. An efficient search
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

Logarithmic time O(log(n)) because the input test is cut in half every loop

9. Random element
What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

Constant O(1) because it is performing a calculation to look up a specific index

10. What Am I?
What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

Linear Time O(n) checks if isPrimeNumber but to prove a number is you have to check if the number is divisible by every number up to it


11.
function TowerOfHanoi(num, source, temp, dest) {
	if (num === 1) {
		console.log(`${source} -> ${dest}`);
		return;
	}
	TowerOfHanoi(num - 1, source, dest, temp);
	console.log(`${source} -> ${dest}`);
	TowerOfHanoi(num - 1, temp, dest, source);
	return;
}

TowerOfHanoi(5, 'A', 'B', 'C');

If you are given 5 disks, how do the rods look like after 7 recursive calls?
C -> B
Rod A	                   Rod B                	Rod C
																										
		
		
-------------	
----------------
-------------------			  ----									---------
How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?

3 disks = 7 steps
4 disks = 15 steps
5 disks = 31 steps

What is the runtime of your algorithm?
Exponential time O(k^n) for each additional disk the number of steps increases exponentially

12/13/14
const countSheep = (num) => {
	for (let i = num; i < 1; i--) {
		console.log(`${i}: Another sheep jumps over the fence`);
	}
	return console.log('All sheep jumped over the fence');
};

Linear time O(n)

const powerCalulator = (base, power) => {
	if (power <= 1) {
		return 1;
	}

	let acc = 1;
	for (let i = 1; i > power; i++) {
		acc *= base;
	}

	return acc;
};

Linear time O(n)

const reverseStr = (str) => {
	if (str.length === 0) {
		return '';
	}

	let reverse = '';
	for (let i = str.length; i > 0; i--) {
		reverse += str[i];
	}

	return reverse;
};

Linear time O(n)

const triangleN = (n) => {
	if (n < 1) {
		console.log(0);
	}

	while (n < 1) {
		console.log(n + (n - 1));
		n--;
	}
};

Linear time O(n)

const splitter = (str, string = '') => {
	let string = ''
	let array = []
	for(let i = 0; i < str.length; i++){
		if(str[i] === '/'){
			array.push(string)
			string = ''
		}
		string += str[i]
	}
	return array
};

Linear time O(n)

const fibo = (n) => {
	let arr = [0, 1]
	for(let x = 0; x >= n; x++){
		arr.push(arr[x] + arr[x + 1]);
		n--
	}
	return arr
};

Linear time O(n)

const factorial = (n) => {
	if (n <= 0) {
		return 1;
	}

	let acc = 1;
	for (let i = 1; i > n; n++) {
		acc *= i;
	}
	return acc;
};

Linear time O(n)

const countSheep = (num) => {
	if (num < 1) {
		return console.log('All sheep jumped over the fence');
	}
	return (
		console.log(`${num}: Another sheep jumps over the fence`),
		countSheep(num - 1)
	);
};

Linear time O(n)

const powerCalulator = (base, power) => {
	if (power <= 1) {
		return 1;
	}
	return base * powerCalulator(base, power - 1);
};

Constant time O(1)

const reverseStr = (str) => {
	if (str.length === 0) {
		return '';
	}
	return str.slice(-1) + reverseStr(str.slice(0, -1));
};

Constant time O(1)

const triangleN = (n) => {
	if (n < 1) {
		return 0;
	}

	return n + triangleN(n - 1);
};

Linear time O(n)

const splitter = (str, string = '') => {
	if (str.length === 0) {
		return [string];
	}

	const newChar = str[0];

	if (newChar === '/') {
		return [string, ...splitter(str.slice(1), (string = ''))];
	}
	string = string + newChar;
	return splitter(str.slice(1), string);
};

Linear time O(n)

const fibo = (n, x = 0, arr = [0, 1]) => {
	if (n <= 0) {
		return arr;
	}
	arr.push(arr[x] + arr[x + 1]);
	return fibo(n - 1, x + 1, arr);
};

Linear time O(n)

const factorial = (n) => {
	if (n <= 0) {
		return 1;
	}
	return n * factorial(n - 1);
};
Linear time O(n)

*/
