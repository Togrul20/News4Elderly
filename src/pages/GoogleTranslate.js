import { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import "../styles/GoogleTranslate.module.css";

const languages = [
  { label: "English", value: "/auto/en" },
  { label: "Turkish", value: "/auto/tr" },
  { label: "Azerbaijani", value: "/auto/az" },
  { label: `Русский`, value: "/auto/ru" },
  { label: "Polski", value: "/auto/pl" },
  { label: "Arabic", value: "/auto/ar" },
  { label: "Czech", value: "/auto/cs" },
  { label: "Polish", value: "/auto/pl" },
  { label: "Danish", value: "/auto/da" },
  { label: "Dutch", value: "/auto/nl" },
  { label: "Finnish", value: "/auto/fi" },
  { label: "French", value: "/auto/fr" },
  { label: "German", value: "/auto/de" },
  { label: "Greek", value: "/auto/el" },
  { label: "Hebrew", value: "/auto/he" },
  { label: "Hungarian", value: "/auto/hu" },
  { label: "Italian", value: "/auto/it" },
  { label: "Japanese", value: "/auto/ja" },
  { label: "Korean", value: "/auto/ko" },
  { label: "Lithuanian", value: "/auto/lt" },
  { label: "Norwegian", value: "/auto/no" },
  { label: "Portuguese", value: "/auto/pt" },
  { label: "Chinese", value: "/auto/zho" },
  { label: "Spanish", value: "/auto/es" },
  { label: "Swedish", value: "/auto/sv" },
  { label: "Thai", value: "/auto/th" },
  { label: "Traditional Chinese", value: "/auto/tw" },
  { label: "Ukrainian", value: "/auto/uk" },
];

const GoogleTranslate = () => {
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
          data={languages}
          style={{ width: 140 }}
          placement="bottomEnd"
          cleanable={false}
          value={selected}
          searchable={false}
          className={"notranslate"}
          menuClassName={"notranslate"}
          onSelect={(e, m, evt) => langChange(e, m, evt)}
          placeholder="Language"
        />
      </div>
    </>
  );
};

export default GoogleTranslate;
