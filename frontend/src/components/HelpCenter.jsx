import React, { useState, useEffect } from "react";
import HelpCenterNavbar from "./Navbar";
import HelpCenterFooter from "./Footer";
import HelpCenterModal from "./submitModal";
import { IoSearch } from "react-icons/io5";
import "../App.css";
import axios from "axios";

const HelpCenter = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalShow, setModalShow] = useState(false);

  // Fetch cards from the backend
  const fetchCards = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cards");
      setCards(response.data);
      setFilteredCards(response.data);
    } catch (error) {
      console.error("There was an error fetching the cards!", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  useEffect(() => {
    const filtered = cards.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filtered);
  }, [searchTerm, cards]);

  return (
    <div>
      <HelpCenterNavbar />
      <div className="help-center-container">
        <h1 className="body-heading">How can we help?</h1>
        <div className="search-container">
          <input
            type="search"
            className="search-bar"
            placeholder="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IoSearch className="icon-search" />
        </div>
      </div>
      <div className="card-bg-contianer">
        <div className="cards-container">
          <div className="row">
            {filteredCards.length === 0 ? (
              <p className="error-message">No cards found</p>
            ) : (
              filteredCards.map((card) => (
                <div key={card._id} className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{card.title}</h5>
                      <hr className="card-line" />
                      <p className="card-text">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="button-container">
        <button
          type="button"
          className="submit-button"
          onClick={() => setModalShow(true)}
        >
          Submit a request
        </button>
      </div>
      <HelpCenterModal
        show={modalShow}
        handleClose={() => setModalShow(false)}
        onSuccess={fetchCards}
      />
      <HelpCenterFooter />
    </div>
  );
};

export default HelpCenter;
