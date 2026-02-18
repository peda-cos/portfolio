<script lang="ts">
  interface Props {
    currentLang: 'pt-br' | 'en';
    alternatePath: string;
  }

  const { currentLang, alternatePath }: Props = $props();

  const labels: Record<string, string> = {
    'pt-br': 'English',
    en: 'Português',
  };

  const label = $derived(labels[currentLang]);
</script>

<a href={alternatePath} class="language-switcher" aria-label={`Switch to ${label}`}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="globe-icon"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
  <span class="label">{label}</span>
</a>
