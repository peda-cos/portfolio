<script lang="ts">
  import type { Project } from '../../data/projects';

  interface Props {
    projects: Project[];
    locale: 'en' | 'pt';
    labels: {
      rank: string;
      grade: string;
      workload: string;
      hours: string;
      bonus: string;
      filterAll: string;
      filterByRank: string;
      gradeNote: string;
    };
  }

  let { projects, locale, labels }: Props = $props();

  let selectedRank: number | null = $state(null);

  const ranks = [0, 1, 2, 3, 4, 5];

  let filtered = $derived(
    selectedRank === null
      ? projects
      : projects.filter((p) => p.rank === selectedRank)
  );

  let grouped = $derived(() => {
    const map = new Map<number, Project[]>();
    for (const p of filtered) {
      const existing = map.get(p.rank) || [];
      existing.push(p);
      map.set(p.rank, existing);
    }
    return map;
  });
</script>

<div>
  <div class="flex flex-wrap gap-[var(--spacing-sm)]" role="group" aria-label={labels.filterByRank}>
    <button
      onclick={() => selectedRank = null}
      class="chip min-h-[2.75rem] transition-opacity duration-[var(--duration-fast)]"
      class:chip-accent={selectedRank === null}
      type="button"
      aria-pressed={selectedRank === null}
    >
      {labels.filterAll}
    </button>
    {#each ranks as rank}
      <button
        onclick={() => selectedRank = rank}
        class="chip min-h-[2.75rem] transition-opacity duration-[var(--duration-fast)]"
        class:chip-accent={selectedRank === rank}
        type="button"
        aria-pressed={selectedRank === rank}
      >
        {labels.rank} {rank}
      </button>
    {/each}
  </div>

  {#each [...grouped().entries()].sort((a, b) => a[0] - b[0]) as [rank, rankProjects]}
    <div class="mt-[var(--spacing-2xl)]">
      <h3 class="text-[length:var(--font-size-title-lg)] font-semibold text-[color:var(--color-primary)] dark:text-[color:var(--color-dark-primary)]">
        {labels.rank} {rank}
      </h3>
      <ul role="list" class="mt-[var(--spacing-md)] grid gap-[var(--spacing-md)] sm:grid-cols-2 lg:grid-cols-3" style="list-style: none; margin-top: var(--spacing-md); padding: 0;">
        {#each rankProjects as project (project.slug)}
          <li>
            <article class="card flex flex-col gap-[var(--spacing-sm)]">
              <div class="flex items-start justify-between gap-[var(--spacing-sm)]">
                <h4 class="text-[length:var(--font-size-title-md)] font-semibold text-[color:var(--color-on-surface)] dark:text-[color:var(--color-dark-on-surface)]">
                  {project.name[locale]}
                </h4>
                {#if project.isBonus}
                  <span class="bonus-badge" aria-label="{labels.bonus}: {project.grade}">
                    {project.grade}
                  </span>
                {:else}
                  <span class="text-[length:var(--font-size-label-lg)] font-semibold text-[color:var(--color-on-surface-variant)] dark:text-[color:var(--color-dark-on-surface-variant)]">
                    {project.grade}
                  </span>
                {/if}
              </div>

              <p class="text-[length:var(--font-size-body-sm)] leading-relaxed text-[color:var(--color-on-surface-variant)] dark:text-[color:var(--color-dark-on-surface-variant)]">
                {project.description[locale]}
              </p>

              <div class="grade-bar" role="progressbar" aria-valuenow={Math.min(project.grade, 100)} aria-valuemin={0} aria-valuemax={100} aria-label="{labels.grade}: {project.grade}/100">
                <div class="grade-bar-fill" style="width: {Math.min(project.grade, 100)}%"></div>
              </div>

              <div class="flex items-center justify-between text-[length:var(--font-size-label-md)] text-[color:var(--color-on-surface-variant)] dark:text-[color:var(--color-dark-on-surface-variant)]">
                <span>{labels.grade}: {project.grade}/100</span>
                <span>{project.workload} {labels.hours}</span>
              </div>

              <ul role="list" class="flex flex-wrap gap-[var(--spacing-xs)]" style="list-style: none; padding: 0;">
                {#each project.technologies as tech}
                  <li><span class="chip" style="font-size: var(--font-size-label-sm);">{tech}</span></li>
                {/each}
              </ul>
            </article>
          </li>
        {/each}
      </ul>
    </div>
  {/each}

  <p class="mt-[var(--spacing-2xl)] text-[length:var(--font-size-body-sm)] text-[color:var(--color-on-surface-variant)] dark:text-[color:var(--color-dark-on-surface-variant)]">
    {labels.gradeNote}
  </p>
</div>

<style>
  :global(html.dark) .chip:not(.chip-accent) {
    background-color: var(--color-dark-surface-container-high);
    color: var(--color-dark-on-surface);
    border-color: var(--color-dark-outline-variant);
  }
  :global(html.dark) .chip-accent {
    background-color: var(--color-dark-primary-container);
    color: var(--color-dark-on-primary-container);
  }
</style>
