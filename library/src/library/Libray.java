package library;

public class Libray {
	private Book [] book = new Book[50];
	
	public Libray() {// Library class Constructor
		
	}

	public Book[] getBook() {
		return book;
	}

	public void setBook(Book[] book) {
		this.book = book;
	}

	public int newBook(Book b) { // method 1- add new book to library
		if(!IsFull()) { // return true if library is full,false if not
			for (int i = 1 ; i <= book.length ; i++) {
				if(book[i] == null) {
					book[i] = b;
					System.out.println("Yahooooooooooooo!!!");
					return 1;
				}	
			}	
		}
		System.out.println("Error:the library Full!!!");
		return 0;
	}//end the 1-method
	
	public int borrowBook(Book b) {//method 2- to borrow new book
		if(IsNotBorrowed(b.getTitle())) {//return true if the book available and not borrowed,false if not
			System.out.println("Congratulations,'"+ b.getTitle()+"' book is available.");	
			return 1;
		}
		System.out.println("Error: '"+b.getTitle()+"' book is not available or borrowed!!!");
		return 0;
	}// end the 2-method
	
	public int returnBook(Book b) {//method 3- to return a book
		if(b.isBorrowed() == true ) {
			b.setBorrowed(false);
		System.out.println("'"+b.getTitle()+"' book has been returned.");
		return 1;
		}
		System.out.println("Error: the book '"+b.getTitle()+"' is not borrowed!!!");
		return 0;
	}// end the 3-method
	
	public void printAvailableBooks() {//method 4- print all available books
		for (int i = 1 ; i <= Book.getNumOfBook() ; i++ ) {
			if(book[i].isBorrowed() == false) 
				   System.out.println("book #"+i+" "+book[i].toString());//if the book is not borrowed
			else
				   System.out.println("book #"+i+"  is borrowed!!!");//if the book is borrowed
				}
	}// end the 4-method
	
	private boolean IsFull() { // return true if the library is full ,false if not
		if(Book.getNumOfBook() > book.length )
			return true;
		return false;
		
	}//end the method
	
	private boolean IsNotBorrowed(String title) {// return true if the book is not borrowed ,false if is borrowed
		for (int i = 1 ; i <= Book.getNumOfBook() ; i++) {
			if(book[i].getTitle().equals(title) && book[i].isBorrowed() == false ) {
			   book[i].setBorrowed(true);
			   return true;
			}
		}
		return false;
	}// end the method
	
	public int Size() {
		return Book.getNumOfBook();
	}
	
	public Book get() {
		return book[book.length-1];
	}
	
}

