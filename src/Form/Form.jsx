import React, { useState } from "react";
import Input from "./input";

const Form = () => {
  const [step, setStep] = useState(1);
  const [animation, setAnimation] = useState("");
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    cin: "",
    dateDeNaissance: "",
    genre: "",
    telephone: "",
    email: "",
    adresse: "",
    niveauEducatif: "",
    graduationYear: "",
  });
  const [errors, setErrors] = useState({});

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 50 }, (_, i) => currentYear - i);
  const validGradDate = (date) => {
    const inputDate = new Date(date);
    const today = new Date();
    const age = today.getFullYear() - inputDate.getFullYear();
    const monthDiff = today.getMonth() - inputDate.getMonth();
    const dayDiff = today.getDate() - inputDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      return age - 1 >= 18;
    }

    return age >= 18;
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.nom) newErrors.nom = "Le nom est requis.";
    if (!formData.prenom) newErrors.prenom = "Le prénom est requis.";
    if (!formData.cin) newErrors.cin = "Le CIN est requis.";
    else if (!/^\d+$/.test(formData.cin))
      newErrors.cin = "Le CIN doit contenir uniquement des chiffres.";
    else if (formData.cin.length != 8)
      newErrors.cin = "Le CIN doit contenir 8 chiffres uniquement.";
    if (!formData.dateDeNaissance)
      newErrors.dateDeNaissance = "La date de naissance est requise.";
    else if (!validGradDate(formData.dateDeNaissance))
      newErrors.dateDeNaissance = "Vous devez avoir plus de 18 ans.";
    if (!formData.genre) newErrors.genre = "Le genre est requis.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.telephone)
      newErrors.telephone = "Le numéro de téléphone est requis.";
    else if (!/^\d{8}$/.test(formData.telephone))
      newErrors.telephone = "Le numéro de téléphone est invalide.";

    if (!formData.email) newErrors.email = "L'adresse e-mail est requise.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "L'adresse e-mail est invalide.";

    if (!formData.adresse) newErrors.adresse = "L'adresse est requise.";
    if (!formData.niveauEducatif)
      newErrors.niveauEducatif = "Le niveau éducatif est requis.";
    if (!formData.graduationYear)
      newErrors.graduationYear = "L'année de graduation est requise.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const [files, setFiles] = useState([]);
  const handleFileChange = (e) => {
    const selectedFiles = [...e.target.files];
    const validFiles = validateFiles(selectedFiles);
    setFiles(validFiles);
  };

  const validateFiles = (anyFiles) => {
    const maxSize = 5 * 1024 * 1024;
    const validatedFiles = [];
    for (let file of anyFiles) {
      if (file.size > maxSize) {
        alert(`${file.name} is too large. Max size is 5MB.`);
      } else {
        validateFiles.push(file);
      }
    }
    return validateFiles;
  };

  const nextStep = () => {
    if (step === 1) {
      if (validateStep1()) {
        setAnimation("fade-out");
        setTimeout(() => {
          setStep(step + 1);
          setAnimation("fade-in");
        }, 500);
      }
    } else if (step === 2) {
      if (validateStep2()) {
        setAnimation("fade-out");
        setTimeout(() => {
          setStep(step + 1);
          setAnimation("fade-in");
        }, 500);
      }
    }
  };

  const prevStep = () => {
    setAnimation("fade-out");
    setTimeout(() => {
      setStep(step - 1);
      setAnimation("fade-in");
    }, 500);
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === "radio") {
      setFormData({ ...formData, genre: value });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  return (
    <div className="Card">
      <div className="title">Concours</div>
      <form method="post" className={animation}>
        {step === 1 && (
          <div className="user-details">
            <Input
              label="Nom"
              id="nom"
              value={formData.nom}
              onChange={handleChange}
              error={errors.nom}
            />
            <Input
              label="Prénom"
              id="prenom"
              value={formData.prenom}
              onChange={handleChange}
              error={errors.prenom}
            />
            <Input
              label="CIN"
              id="cin"
              value={formData.cin}
              onChange={handleChange}
              error={errors.cin}
            />
            <Input
              label="Date de naissance"
              type="date"
              id="dateDeNaissance"
              value={formData.dateDeNaissance}
              onChange={handleChange}
              error={errors.dateDeNaissance}
            />
            <div className="input-group">
              <div className="radio-container">
                <label htmlFor="genre">Genre :</label>
                <input
                  type="radio"
                  name="genre"
                  id="Homme"
                  value="Homme"
                  checked={formData.genre === "Homme"}
                  onChange={handleChange}
                />
                <label htmlFor="Homme">Homme</label>
                <input
                  type="radio"
                  name="genre"
                  id="Femme"
                  value="Femme"
                  checked={formData.genre === "Femme"}
                  onChange={handleChange}
                />
                <label htmlFor="Femme">Femme</label>
              </div>
              {errors.genre && (
                <span className="error-message">{errors.genre}</span>
              )}
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
        )}
        {step === 2 && (
          <div className="user-details">
            <Input
              label="Numéro de téléphone"
              type="tel"
              id="telephone"
              value={formData.telephone}
              onChange={handleChange}
              error={errors.telephone}
            />
            <Input
              label="Adresse mail"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Input
              label="Adresse"
              id="adresse"
              value={formData.adresse}
              onChange={handleChange}
              error={errors.adresse}
            />
            <Input
              label="Niveau éducatif"
              id="niveauEducatif"
              value={formData.niveauEducatif}
              onChange={handleChange}
              error={errors.niveauEducatif}
            />
            <div className="input-group">
              <label htmlFor="graduationYear">Année de graduation</label>
              <select
                id="graduationYear"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
              >
                <option value="">Choisissez une année</option>
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              {errors.graduationYear && (
                <span className="error-message">{errors.graduationYear}</span>
              )}
            </div>
            <div className="button-container">
              <button type="button" className="button-01" onClick={prevStep}>
                Retour
              </button>
              <button type="button" className="button-01" onClick={nextStep}>
                Continuer
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="user-details">
            <div className="dropzone">
              <input
                type="file"
                id="file-input"
                multiple
                onChange={handleFileChange}
              />
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
        )}
      </form>
    </div>
  );
};

export default Form;
