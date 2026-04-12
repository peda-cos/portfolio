<script lang="ts">
  interface Props {
    label: string;
    alternatePath: string;
  }

  const { label, alternatePath }: Props = $props();
</script>

<a
  href={alternatePath}
  aria-label={`Switch to ${label}`}
  class="inline-flex items-center gap-1.5 px-4 py-3.5 min-h-[44px] rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] font-[family-name:var(--font-ui)] text-xs font-medium tracking-wide transition-colors duration-[var(--duration-base)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:border-[var(--color-accent)] focus-visible:text-[var(--color-accent)] motion-reduce:transition-none"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path
      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    ></path>
  </svg>
  <span>{label}</span>
</a>
