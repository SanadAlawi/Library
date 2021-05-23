package library;

public class Book {
	private String title;
	private String author;
	private int edition;
	private String publisher;
	private String language;
	private static int NumOfBook;
	private boolean borrowed;
	
	public Book() {
		setTitle("Computer security");
		setAuthor("Matt Bishop");
		setEdition(2);
		setPublisher("Addison-Wesley Professional");
		setLanguage("English");
		NumOfBook++;
	}
	
	public Book(String title, String author, int edition, String publisher, String language) {
		setTitle(title);
		setAuthor(author);
		setEdition(edition);
		setPublisher(publisher);
		setLanguage(language);
		NumOfBook++;
	}

	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public int getEdition() {
		return edition;
	}
	public void setEdition(int edition) {
		this.edition = edition;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public static int getNumOfBook() {
		return NumOfBook;
	}
	
	public boolean isBorrowed() {
		return borrowed;
	}

	public void setBorrowed(boolean borrowed) {
		this.borrowed = borrowed;
	}
	
//	@Override
//	public String toString() {
//		return "Book [title=" + title + ", author=" + author + ", edition=" + edition + ", publisher=" + publisher
//				+ ", language=" + language + "]";
//	}
	
	
	

}
