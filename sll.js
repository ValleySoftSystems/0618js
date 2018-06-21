
/*
  this is an example for singly linked list

  a singly linked list is made of nodes
  last node always has the link of null
  each node is comprised of data and link

  every node's link points to next node
	start of linked list is in root node
 */

var rootNode = null;

function createNode(value) {
	var node = {
		data: value,
		next: null
	}
	return node;
}

function appendNodeToSLL(node) {
	if (!rootNode) {
		rootNode = node;
		return;
	}
	var currentNode = rootNode;
	while (currentNode.next) {
		currentNode = currentNode.next;
	}
	currentNode.next = node;
}

appendNodeToSLL(createNode(51));
appendNodeToSLL(createNode(23));
appendNodeToSLL(createNode(31));
appendNodeToSLL(createNode(9));




















