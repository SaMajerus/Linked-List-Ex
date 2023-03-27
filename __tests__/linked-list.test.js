import LinkedList from '../src/linked-list.js';

describe('LinkedList', () => {
  
  test("it should construct a linked list with a head property", () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);  //If Linked-List is initialized, the 'head' field is 'null'.
  });
}); 
