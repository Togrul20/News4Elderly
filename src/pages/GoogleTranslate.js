import { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import "../styles/GoogleTranslate.module.css";
import styles from "../styles/Navbar.module.css";
import languages from './languages'
import TextToSpeech from "./partials/useTextToSpeech";

const GoogleTranslate = () => {
  const sortedData = languages
    .slice()
    .sort((a, b) => a.label.localeCompare(b.label));

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "auto",
        autoDisplay: false,
        showOriginal: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  const langChange = (e, m, evt) => {
    evt.preventDefault();
    if (hasCookie("googtrans")) {
      setCookie("googtrans", decodeURI(e));
      setSelected(e);
    } else {
      setCookie("googtrans", e);
      setSelected(e);
    }
    window.location.reload();
  };

  const customMenuItemRenderer = (label, item) => {
    const color = "black";
    const fontSize = "20px";

    return <div style={{ color, fontSize }}>{label}</div>;
  };

  return (
    <>
      <div
        id="google_translate_element"
        style={{
          width: "0px",
          height: "0px",
          position: "absolute",
          left: "50%",
          zIndex: -99999,
          display: "none",
        }}
      ></div>
      <div className="googleSelectbox">
        <SelectPicker
          data={sortedData}
          renderMenuItem={customMenuItemRenderer}
          placement="bottomEnd"
          cleanable={false}
          value={selected}
          searchable={false}
          className={styles.languageSelector}
          menuClassName={"notranslate"}
          onSelect={(e, m, evt) => langChange(e, m, evt)}
          placeholder="Language"
        />
      </div>
    </>
  );
};

export default GoogleTranslate;
