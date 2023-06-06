import React, { useEffect } from "react";

const InstallPrompt = () => {
  useEffect(() => {
    let deferredPrompt;

    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      deferredPrompt = event;

      // Show your custom install prompt UI here
      const installButton = document.getElementById("install-button");
      installButton.addEventListener("click", handleInstallButtonClick);
      installButton.style.display = "block";
    };

    const handleInstallButtonClick = () => {
      // Trigger the installation
      deferredPrompt.prompt();

      // Wait for the user to respond to the installation prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the installation");
        } else {
          console.log("User dismissed the installation");
        }

        // Reset the install button display
        const installButton = document.getElementById("install-button");
        installButton.removeEventListener("click", handleInstallButtonClick);
        installButton.style.display = "none";

        // Clear the deferredPrompt variable
        deferredPrompt = null;
      });
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 7,
      }}
    >
      <button
        id="install-button"
        style={{
          display: "none",
          color: "white",
          background: "black",
          border: "2px solid white",
          borderRadius: 10,
          fontSize: "25px",
          padding: "5px 10px",
        }}
      >
        Install the App
      </button>
    </div>
  );
};

export default InstallPrompt;
