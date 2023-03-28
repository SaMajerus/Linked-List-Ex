import LinkedList from '../src/linked-list.js';

describe('LinkedList', () => {
  
  test("it should construct a linked list with a head property", () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);  //If Linked-List is initialized, the 'head' field is 'null'.
  });
  test('LinkedList.prototype.insertLast() should add a node at head if a linked list has no head', () => {
    let linkedList = new LinkedList();
    linkedList.insertLast("head");
    expect(linkedList.head.data).toEqual("head");
  });
}); 
