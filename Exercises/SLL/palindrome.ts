// Palindrome: Implement a function to check if a linked list is a palindrome.

import { cloneDeep } from "lodash";
import { SLL } from './SLL';

function isPalindrome(list: SLL): boolean {
  if (list === null) return false;

  let reversedList = reverseSLL(list);

  let current1 = list.head;
  let current2 = reversedList.head;

  while(current1 !== null) {
    if (current1.value !== current2.value) {
      return false;
    }

    current1 = current1.next;
    current2 = current2.next;
  }

  return true;
}

function reverseSLL(list): SLL {
  let clonedList = cloneDeep(list);

  let current = clonedList.head;
  let prev = null;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  clonedList.tail = clonedList.head;
  clonedList.head = prev;

  return clonedList;
}
