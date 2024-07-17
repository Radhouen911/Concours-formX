import React, { useState } from "react";
import Input from "./input";
import { FaUser, FaIdCard, FaBirthdayCake } from "react-icons/fa";

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
              <Input label="Nom" id="nom" icon={<FaUser />} />
              <Input label="Prénom" id="prenom" icon={<FaUser />} />
              <Input label="CIN" id="cin" icon={<FaIdCard />} />
              <Input
                label="Date de naissance"
                type="date"
                id="date-de-naissance"
                icon={<FaBirthdayCake />}
              />
              <div className="input-group">
                <div className="radio-container">
                  <label htmlFor="genre">Genre :</label>
                  <input type="radio" name="genre" id="M" />
                  <label htmlFor="M">Homme</label>
                  <input type="radio" name="genre" id="F" />
                  <label htmlFor="F">Femme</label>
                </div>
              </div>
              <div className="button-container">
                <button
                  type="button"
                  className="button-01"
                  onClick={nextStep}
                  style={{ marginTop: "9%" }}
                >
                  Continuer
                </button>
              </div>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="user-details">
              <Input label="Numéro de téléphone" type="tel" id="n-telephone" />
              <Input label="Adresse mail" type="email" id="email" />
              <Input label="Adresse" id="adresse" />
              <Input label="Niveau éducatif" id="niveau-educatif" />
              <Input
                label="Année de graduation"
                type="number"
                id="graduation-year"
              />
              <Input label="Expérience" id="experience" />
              <div className="button-container">
                <button type="button" className="button-01" onClick={prevStep}>
                  Retour
                </button>
                <button type="button" className="button-01" onClick={nextStep}>
                  Continuer
                </button>
              </div>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div className="user-details">
              <div className="dropzone">
                <input type="file" id="file-input" multiple />
                <div className="dropzone-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                    height="100px"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  <p>
                    Cliquez pour télécharger ou glisser-déposer
                    <br />
                  </p>
                </div>
              </div>
              <div className="button-container">
                <button type="button" className="button-01" onClick={prevStep}>
                  Retour
                </button>
                <button type="submit" className="button-01">
                  Envoyer
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
