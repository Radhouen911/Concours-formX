import Input from "./input";
import React, { useState } from "react";

const Form = () => {
  const [step, setStep] = useState(1);
  const [animation, setAnimation] = useState("");

  const nextStep = () => {
    setAnimation("fade-out");
    setTimeout(() => {
      setStep(step + 1);
      setAnimation("fade-in");
    }, 500);
  };

  const prevStep = () => {
    setAnimation("fade-out");
    setTimeout(() => {
      setStep(step - 1);
      setAnimation("fade-in");
    }, 500);
  };

  return (
    <div className="Card">
      <div className="title">Concours</div>
      <form method="post" className={animation}>
        {step === 1 && (
          <>
            <div className="user-details">
              <div className="input-group">
                <Input label="Nom" id="nom" />
              </div>
              <div className="input-group">
                <Input label="Prénom" id="prenom" />
              </div>
              <div className="input-group">
                <Input label="CIN" id="cin" />
              </div>
              <div className="input-group">
                <Input
                  label="Date de naissance"
                  type="date"
                  id="date-de-naissance"
                />
              </div>
              <div className="input-group">
                <label htmlFor="genre">Genre</label>
                <div className="radio-container">
                  {" "}
                  <input type="radio" name="genre" id="M" />
                  <label htmlFor="M">Homme</label>
                  <input type="radio" name="genre" id="F" />
                  <label htmlFor="F"> Femme</label>
                </div>
              </div>
              <div className="button-container">
                <button type="button" className="button-01" onClick={nextStep}>
                  Continue
                </button>
              </div>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="user-details">
              <div className="input-group">
                <Input
                  label="Numéro de téléphone"
                  type="tel"
                  id="n-telephone"
                />
              </div>
              <div className="input-group">
                <Input label="Adresse mail" type="email" id="email" />
              </div>
              <div className="input-group">
                <Input label="Adresse" id="adresse" />
              </div>
              <div className="input-group">
                <Input label="Niveau éducatif" id="niveau-educatif" />
              </div>
              <div className="input-group">
                <Input
                  label="Année de graduation"
                  type="number"
                  id="graduation-year"
                />
              </div>
              <div className="input-group">
                <Input label="Expérience" id="experience" />
              </div>
              <div className="button-container">
                <button type="button" className="button-01" onClick={prevStep}>
                  Back
                </button>
                <button className="button-01" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
