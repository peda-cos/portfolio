<script lang="ts">
  interface NavLink {
    href: string;
    label: string;
  }

  interface Props {
    navLinks: NavLink[];
    openLabel: string;
    closeLabel: string;
    navLabel: string;
  }

  let { navLinks, openLabel, closeLabel, navLabel }: Props = $props();

  let isOpen = $state(false);
  let toggleButtonRef = $state<HTMLButtonElement | null>(null);
  let navRef = $state<HTMLElement | null>(null);
  let previousActiveElement: Element | null = null;

  function openMenu() {
    previousActiveElement = document.activeElement;
    isOpen = true;
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      const firstLink = navRef?.querySelector('a');
      firstLink?.focus();
    });
  }

  function closeMenu() {
    isOpen = false;
    document.body.style.overflow = '';

    if (previousActiveElement instanceof HTMLElement) {
      previousActiveElement.focus();
    } else {
      toggleButtonRef?.focus();
    }
    previousActiveElement = null;
  }

  function toggleMenu() {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function handleNavKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeMenu();
      return;
    }

    if (event.key !== 'Tab') return;

    const focusableElements = navRef?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusableElements || focusableElements.length === 0) return;

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  }

  function handleWindowKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && isOpen) {
      closeMenu();
    }
  }
</script>

<svelte:window onkeydown={handleWindowKeydown} />

<button
  bind:this={toggleButtonRef}
  onclick={toggleMenu}
  class="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] transition-opacity duration-[var(--duration-fast)] hover:opacity-70 md:hidden"
  aria-label={isOpen ? closeLabel : openLabel}
  aria-expanded={isOpen}
  aria-controls="mobile-nav"
  type="button"
>
  {#if isOpen}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M18 6 6 18"/>
      <path d="m6 6 12 12"/>
    </svg>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="4" x2="20" y1="12" y2="12"/>
      <line x1="4" x2="20" y1="6" y2="6"/>
      <line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
  {/if}
</button>

{#if isOpen}
  <div
    class="fixed inset-0 z-40 bg-black/50"
    onclick={closeMenu}
    role="none"
    style="opacity: {isOpen ? 1 : 0}; transition: opacity var(--duration-normal) ease;"
  ></div>
{/if}

<nav
  bind:this={navRef}
  id="mobile-nav"
  class="fixed right-0 top-0 z-50 flex h-full w-[min(20rem,80vw)] flex-col bg-[var(--color-surface)] p-[var(--spacing-xl)] pt-[5rem] shadow-[var(--shadow-level3)] md:hidden"
  class:translate-x-0={isOpen}
  class:translate-x-full={!isOpen}
  style="transition: transform var(--duration-normal) ease;"
  aria-label={navLabel}
  aria-hidden={!isOpen}
  onkeydown={handleNavKeydown}
>
  <ul role="list" class="flex flex-col gap-[var(--spacing-sm)]">
    {#each navLinks as link}
      <li>
        <a
          href={link.href}
          onclick={closeMenu}
          class="block rounded-[var(--radius-sm)] px-[var(--spacing-md)] py-[var(--spacing-md)] text-[length:var(--font-size-body-lg)] font-medium text-[color:var(--color-on-surface)] no-underline transition-opacity duration-[var(--duration-fast)] hover:opacity-70"
          tabindex={isOpen ? 0 : -1}
        >
          {link.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  :global(html.dark) nav {
    background-color: var(--color-dark-surface);
  }
  :global(html.dark) nav a {
    color: var(--color-dark-on-surface);
  }
</style>
