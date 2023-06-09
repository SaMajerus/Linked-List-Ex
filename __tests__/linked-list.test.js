import LinkedList from '../src/linked-list.js';

describe('LinkedList', () => {
  
  let linkedListWithNodes = new LinkedList();

  beforeEach(() => {
    linkedListWithNodes.insertLast("node1");
    linkedListWithNodes.insertLast("node2");
    linkedListWithNodes.insertLast("node3");
    linkedListWithNodes.insertLast("node4");
  });

  afterEach(() => {
    linkedListWithNodes.head = null; 
  });
  
  /* -------- Tests -------- */
  test("it should construct a linked list with a head property", () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);  //If Linked-List is initialized, the 'head' field is 'null'.
  });

  //Tests for 'LinkedList.prototype.insertLast()'--
  test('LinkedList.prototype.insertLast() should add a node at head if a linked list has no head', () => {
    let linkedList = new LinkedList();
    linkedList.insertLast("head");
    expect(linkedList.head.data).toEqual("head");
  });

  test("'LinkedList.prototype.insertLast()' should add a node at the end of a linked list", () => {
    linkedListWithNodes.insertLast("new last");
    expect(linkedListWithNodes.head.next.next.next.next.data).toEqual("new last");
  });

  //Tests for 'LinkedList.prototype.remove()'--
  test('it should set a new head if the head is removed', () => {
    linkedListWithNodes.remove(0);
    expect(linkedListWithNodes.head.data).toEqual("node2");
  });

  test('it should remove a node from the middle', () => {
    linkedListWithNodes.remove(2);
    expect(linkedListWithNodes.head.next.next.data).toEqual("node4");
  });

  //Misc Tests #2--
  test('it should return -1 if the index does not exist', () => {
    expect(linkedListWithNodes.remove(9)).toEqual(-1);
  });
}); 
