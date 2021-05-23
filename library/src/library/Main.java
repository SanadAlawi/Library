package library;

import javafx.application.Application;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.TextField;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.control.cell.TextFieldTableCell;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;
import javafx.util.converter.IntegerStringConverter;

public class Main extends Application{
	
	Libray lib = new Libray(); // Library Object
	
	// Label objects
	Label titlelabel = new Label("Title: ");
	Label authorlabel = new Label("Author: ");
	Label editionlabel = new Label("Edition: ");
	Label puplabel = new Label("Publisher: ");
	Label languagelabel = new Label("Language: ");
	Label maxlabel = new Label("Max: 50");
	Label totallabel = new Label("Total Books: 0");
	
	// TxetField objects
	TextField titletf = new TextField();
	TextField authortf = new TextField();
	TextField editiontf = new TextField();
	TextField puptf = new TextField();
	TextField languagetf = new TextField();
	
	// Button objects
	Button addbutton = new Button("Add");
	Button borrowbutton = new Button("Borrow a book");
	Button returnbutton = new Button("Return a book");
	
	// TableView object
	TableView table = new TableView();
	
	
	
	
	@Override
	public void start(Stage stage) throws Exception {
		
		//ColumnView object
		TableColumn<Book, String> titlecolumn = new TableColumn<>("Title");
		titlecolumn.setCellValueFactory(new PropertyValueFactory<>("title"));
		titlecolumn.setCellFactory(TextFieldTableCell.forTableColumn());
		titlecolumn.setOnEditCommit(t -> {
			 ((Book) t.getTableView()
		                .getItems()
		                .get(t.getTablePosition().getRow()))
		                .setTitle(t.getNewValue());

		});
		TableColumn<Book, String> authorcolumn = new TableColumn("Author");
		authorcolumn.setCellValueFactory(new PropertyValueFactory<>("author"));
		authorcolumn.setCellFactory(TextFieldTableCell.forTableColumn());
		authorcolumn.setOnEditCommit(t -> {
			 ((Book) t.getTableView()
		                .getItems()
		                .get(t.getTablePosition().getRow()))
		                .setAuthor(t.getNewValue());

		});
		TableColumn<Book, Integer> editioncolumn = new TableColumn("Edition");
		editioncolumn.setCellValueFactory(new PropertyValueFactory<>("edition"));
		editioncolumn.setCellFactory(TextFieldTableCell.forTableColumn(new IntegerStringConverter()));
		editioncolumn.setOnEditCommit(t -> {
			((Book) t.getTableView()
					.getItems()
					.get(t.getTablePosition().getRow()))
					.setEdition(t.getNewValue());
		});
		TableColumn<Book, String> puplishercolumn = new TableColumn("Puplisher");
		puplishercolumn.setCellValueFactory(new PropertyValueFactory<>("publisher"));
		puplishercolumn.setCellFactory(TextFieldTableCell.forTableColumn());
		puplishercolumn.setOnEditCommit(t -> {
			 ((Book) t.getTableView()
		                .getItems()
		                .get(t.getTablePosition().getRow()))
		                .setPublisher(t.getNewValue());

		});
		TableColumn<Book, String> languagecolumn = new TableColumn("Language");
		languagecolumn.setCellValueFactory(new PropertyValueFactory<>("language"));
		languagecolumn.setCellFactory(TextFieldTableCell.forTableColumn());
		languagecolumn.setOnEditCommit(t -> {
			 ((Book) t.getTableView()
		                .getItems()
		                .get(t.getTablePosition().getRow()))
		                .setLanguage(t.getNewValue());

		});
		
		ObservableList<Book> data = FXCollections.observableArrayList();
		table.getColumns().addAll(titlecolumn, authorcolumn, editioncolumn, puplishercolumn, languagecolumn);
		table.setItems(data);
		table.setEditable(true);
		
		// TextField Width
		titletf.setMaxWidth(100);
		authortf.setMaxWidth(100);
		editiontf.setMaxWidth(100);
		puptf.setMaxWidth(100);
		languagetf.setMaxWidth(100);
		
		// Prompt Text
		titletf.setPromptText("Title");
		authortf.setPromptText("Author");
		editiontf.setPromptText("Edition");
		puptf.setPromptText("Pulisher");
		languagetf.setPromptText("Language");
		
		// Foucs down
		titletf.setFocusTraversable(false);
		authortf.setFocusTraversable(false);
		editiontf.setFocusTraversable(false);
		puptf.setFocusTraversable(false);
		languagetf.setFocusTraversable(false);
		
		VBox vb1 = new VBox(15);
		vb1.getChildren().addAll(titlelabel, authorlabel, editionlabel, puplabel, languagelabel, maxlabel);
		
		VBox vb2 = new VBox(5);
		vb2.getChildren().addAll(titletf, authortf, editiontf, puptf, languagetf, totallabel);
		totallabel.setPadding(new Insets(9));
		
		HBox hb = new HBox(10);
		hb.getChildren().addAll(addbutton, borrowbutton, returnbutton);
		
		VBox vb3 = new VBox(10);
		vb3.getChildren().addAll(table, hb);
		
		HBox hb2 = new HBox(10);
		hb2.getChildren().addAll(vb1, vb2, vb3);
		hb2.setPadding(new Insets(20));
		
		Scene scene = new Scene(hb2, 650, 250);
		
		stage.setTitle("Libray");
		stage.setScene(scene);
		stage.show();
		
		addbutton.setOnAction(e -> { // Add Button Action
			String title = titletf.getText();
			String author = authortf.getText();
			int edition = Integer.parseInt(editiontf.getText());
			String puplisher = puptf.getText();
			String language = languagetf.getText();
			if(!title.isEmpty() && !author.isEmpty() && !editiontf.getText().isEmpty() && !puplisher.isEmpty() && !language.isEmpty()) {
				Book book = new Book(title, author, edition, puplisher, language);
				lib.newBook(book);
				data.add(book);
				titletf.setText("");
				authortf.setText("");
				editiontf.setText("");
				puptf.setText("");
				languagetf.setText("");
				totallabel.setText("Total Books: "+ lib.Size());
			}
			else
				new Alert(AlertType.WARNING, "Some Field is Empty!!!").show();
		}); // Add Button Action End
	}
	
	public static void main(String[] args) {
		launch(args);
	}

}
