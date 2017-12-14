class LinkedList{
	constructor (){
		this.head = null;
		this.tail = null;
		this.count = 0;
	}

	get length(){
		return this.count;
	}

	addLast(data){
		const node = {
			data: data,
			next: null
		}
	if(this.count === 0) this.head = node;
	else this.tail.next = node;
	this.tail = node;
	this.count ++
 }

 addFirst(data) {
 	const node = {
 		data: data,
 		next: null;
 	}
 	let temp = this.head;
 	this.head = node;
 	this.head.next = temp;
 	this.count++;
 	if(this.count === 1) this.tail = this.head;
 }

 removeFirst(){
 	this.head = this.head.next;
 	this.count --;
 	if(this.count === 0) this.tail = null;
 }

 removeLast(){
 	if(this.count === 1) {
 		this.head = null;
 		this.tail = null;
 	} else {
 		let current = this.head;
 		while(current.next !== this.tail) {
 			current = current.next
 		}
 		current.next = null;
 		this.tail = current;
 	}
 	this.count--
 }

}