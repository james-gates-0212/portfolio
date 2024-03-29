var flowbitThemeMode = 'flowbite-theme-mode';
var flowbitDefaultThemeMode = window.localStorage.getItem(flowbitThemeMode) ?? 'dark';
window.localStorage.setItem(flowbitThemeMode, flowbitDefaultThemeMode);
