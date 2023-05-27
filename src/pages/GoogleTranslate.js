import { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import "../styles/GoogleTranslate.module.css";
import styles from "../styles/Navbar.module.css";

const languages = [
  { label: "Afrikaans", value: "/auto/af" },
  { label: "Albanian", value: "/auto/sq" },
  { label: "Amharic", value: "/auto/am" },
  { label: "Arabic", value: "/auto/ar" },
  { label: "Azerbaijani", value: "/auto/az" },
  { label: "Basque", value: "/auto/eu" },
  { label: "Belarusian", value: "/auto/be" },
  { label: "Bulgarian", value: "/auto/bg" },
  { label: "Bengali", value: "/auto/bn" },
  { label: "Catalan", value: "/auto/ca" },
  { label: "Croatian", value: "/auto/hr" },
  { label: "Chinese (Simplified)", value: "/auto/zh-CN" },
  { label: "Chinese (Traditional)", value: "/auto/zh-TW" },
  { label: "Czech", value: "/auto/cs" },
  { label: "Danish", value: "/auto/da" },
  { label: "Dutch", value: "/auto/nl" },
  { label: "English", value: "/auto/en" },
  { label: "Estonian", value: "/auto/et" },
  { label: "Finnish", value: "/auto/fi" },
  { label: "Filipino", value: "/auto/tl" },
  { label: "French", value: "/auto/fr" },
  { label: "Georgian", value: "/auto/ka" },
  { label: "German", value: "/auto/de" },
  { label: "Greek", value: "/auto/el" },
  { label: "Hebrew", value: "/auto/he" },
  { label: "Hindi", value: "/auto/hi" },
  { label: "Hungarian", value: "/auto/hu" },
  { label: "Irish", value: "/auto/ga" },
  { label: "Indonesian", value: "/auto/id" },
  { label: "Italian", value: "/auto/it" },
  { label: "Japanese", value: "/auto/ja" },
  { label: "Kannada", value: "/auto/kn" },
  { label: "Kurdish", value: "/auto/ku" },
  { label: "Korean", value: "/auto/ko" },
  { label: "Latvian", value: "/auto/lv" },
  { label: "Lithuanian", value: "/auto/lt" },
  { label: "Luxembourgish", value: "/auto/lb" },
  { label: "Macedonian", value: "/auto/mk" },
  { label: "Malagasy", value: "/auto/mg" },
  { label: "Malay", value: "/auto/ms" },
  { label: "Malayalam", value: "/auto/ml" },
  { label: "Maltese", value: "/auto/mt" },
  { label: "Maori", value: "/auto/mi" },
  { label: "Marathi", value: "/auto/mr" },
  { label: "Myanmar (Burmese)", value: "/auto/my" },
  { label: "Mongolian", value: "/auto/mn" },
  { label: "Nepali", value: "/auto/ne" },
  { label: "Norwegian", value: "/auto/no" },
  { label: "Pashto", value: "/auto/ps" },
  { label: "Polish", value: "/auto/pl" },
  { label: "Portuguese", value: "/auto/pt" },
  { label: "Persian", value: "/auto/fa" },
  { label: "Punjabi", value: "/auto/pa" },
  { label: "Romanian", value: "/auto/ro" },
  { label: "Russian", value: "/auto/ru" },
  { label: "Somali", value: "/auto/so" },
  { label: "Serbian", value: "/auto/sr" },
  { label: "Slovak", value: "/auto/sk" },
  { label: "Slovenian", value: "/auto/sl" },
  { label: "Spanish", value: "/auto/es" },
  { label: "Swahili", value: "/auto/sw" },
  { label: "Swedish", value: "/auto/sv" },
  { label: "Tamil", value: "/auto/ta" },
  { label: "Telugu", value: "/auto/te" },
  { label: "Thai", value: "/auto/th" },
  { label: "Turkish", value: "/auto/tr" },
  { label: "Ukrainian", value: "/auto/uk" },
  { label: "Vietnamese", value: "/auto/vi" },
  { label: "Welsh", value: "/auto/cy" },
  { label: "Xhosa", value: "/auto/xh" },
  { label: "Yoruba", value: "/auto/yo" },
  { label: "Zulu", value: "/auto/zu" },
];

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
