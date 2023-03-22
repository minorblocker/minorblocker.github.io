
const primaryColorScheme = ""; // "light" | "dark"

// Get theme data from local storage
const currentTheme = localStorage.getItem("theme");

function getPreferTheme() {
  // return theme value in local storage if it is set
  if (currentTheme) return currentTheme;

  // return primary color scheme if it is set
  if (primaryColorScheme) return primaryColorScheme;

  // return user device's prefer color scheme
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let themeValue = getPreferTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
}

// https://github.com/giscus/giscus/issues/336
function changeGiscusTheme() {
  const theme = themeValue === 'dark' ? 'dark_dimmed' : 'light'

  function sendMessage(message) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
  }

  sendMessage({
    setConfig: {
      theme: theme
    }
  });
}



function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", themeValue);

  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);

  changeGiscusTheme()
}

// set early so no page flashes / CSS is made aware
reflectPreference();

function addCodyCopy() {
  const copyButtonLabel = "Copy";

  // use a class selector if available
  let blocks = document.querySelectorAll("pre");

  blocks.forEach((block) => {
    // only add button if browser supports Clipboard API
    if (navigator.clipboard) {
      let button = document.createElement("button");
      button.setAttribute('class', 'code-copy')

      button.innerText = copyButtonLabel;
      block.appendChild(button);

      button.addEventListener("click", async () => {
        await copyCode(block);
      });
    }
  });

  async function copyCode(block) {
    let code = block.querySelector("code");
    let text = code.innerText;

    await navigator.clipboard.writeText(text);
  }
}

window.onload = () => {
  // set on load so screen readers can get the latest value on the button
  reflectPreference();
  addCodyCopy();

  // now this script can find and listen for clicks on the control
  document.querySelector("#theme-btn")?.addEventListener("click", () => {
    themeValue = themeValue === "light" ? "dark" : "light";
    setPreference();
  });
};

// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });
