import React from "react";
import '../../css/styles.css';

import { GetBooks } from "../../functions/getBooks";

export function ChooseBook({ activeBar, plan, changeActiveGenre, activeGenre, changeActiveBook, activeBook }){
    const bookGenres = ["Science Fiction",
    "Fantasy",
    "Romance",
    "Suspense",
    "Mystery",
    "Adventure",
    "Horror",
    "Drama",
    "Comedy",
    "Historical",
    "Crime",
    "Dystopia",
    "Thriller",
    "Action",
    "Supernatural",
    "Young Adult",
    "Children's",
    "Speculative Fiction",
    "Western",
    "Superheroes",
    "Steampunk",
    "Historical Fiction",
    "Magical Realism",
    "Literary Fiction"]

    const months  = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"]
    const currentDate = new Date();
    const currentMonth = months[currentDate.getMonth()];
  
    return(
        <React.Fragment>
            {activeBar === 'p3' && 
                <React.Fragment>
                    {plan === "Surprise Genre Book Plan" && 
                    <section className="genre-books">
                        <h1>Selected genre for {currentMonth}:</h1>
                        <h2>{activeGenre}</h2>
                        <div className="genres-grid">
                            {bookGenres.map((genre, index) => {
                                return(
                                    <button key={index} className={activeGenre === genre ? "active genre" : "genre"} onClick={() => {
                                        changeActiveGenre(genre);
                                    }}>{genre}</button>                           
                                )
                            })}
                        </div>
                    </section>}
                    {plan === "Select Your Book Plan" && 
                    <section className="select-book">
                        <h1>Selected Book for {currentMonth}:</h1>
                        <img src={activeBook[0] || GetBooks(1, "Fiction")} alt="book"/>
                        <h2>{activeBook[1]}</h2>
                        <div className="books-grid">
                            {GetBooks(40, "Fiction")
                            .filter((book) => {
                                return book?.volumeInfo?.imageLinks?.thumbnail;
                            })
                            .map((book, index) => {
                                const bookTitle = book.volumeInfo.title;
                                const bookImage = book.volumeInfo?.imageLinks?.thumbnail;
                                return(
                                    <div className="book" key={index}>
                                        <img src={bookImage} alt="book" width={200} height={284.38}/>
                                        <h2>{bookTitle}</h2>
                                        <button onClick={() => {
                                            changeActiveBook([bookImage, bookTitle]);
                                            window.scrollTo(0, 0)
                                        }}>Select</button>
                                    </div>
                                )
                            })}
                        </div>
                        
                    </section>}
                </React.Fragment>
            }
        </React.Fragment>
    )
}