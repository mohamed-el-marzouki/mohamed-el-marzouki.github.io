/* ============ Tweaks panel ============ */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "accent": "#cdfb45",
  "displayFont": "Space Grotesk",
  "bodyFont": "grotesk",
  "headings": "default",
  "density": "comfortable",
  "radius": "sharp",
  "effects": "full",
  "background": "constellation",
  "cards": "bordered",
  "cursor": "glow",
  "grain": "on"
}/*EDITMODE-END*/;

function applyTweaks(t) {
  const r = document.documentElement;
  r.setAttribute('data-theme', t.theme);
  r.setAttribute('data-density', t.density);
  r.setAttribute('data-radius', t.radius);
  r.setAttribute('data-headings', t.headings);
  r.setAttribute('data-bodyfont', t.bodyFont);
  r.setAttribute('data-effects', t.effects);
  r.setAttribute('data-bg', t.background);
  r.setAttribute('data-cards', t.cards);
  r.setAttribute('data-cursor', t.cursor);
  r.setAttribute('data-grain', t.grain);
  r.style.setProperty('--accent', t.accent);
  const serif = /Serif|Newsreader|Instrument/.test(t.displayFont);
  r.style.setProperty('--font-display', `'${t.displayFont}', ${serif ? 'Georgia, serif' : 'system-ui, sans-serif'}`);
  if (window.refreshEffects) window.refreshEffects();
}

function PortfolioTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { applyTweaks(t); }, [
    t.theme, t.accent, t.displayFont, t.bodyFont, t.headings, t.density,
    t.radius, t.effects, t.background, t.cards, t.cursor, t.grain
  ]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Thème" />
      <TweakSelect label="Palette" value={t.theme}
        options={[
          { value: 'dark', label: 'Dark (défaut)' },
          { value: 'carbone', label: 'Carbone — noir pur' },
          { value: 'midnight', label: 'Midnight — bleu nuit' },
          { value: 'ardoise', label: 'Ardoise — gris froid' },
          { value: 'light', label: 'Light — clair' },
          { value: 'sable', label: 'Sable — crème chaud' }
        ]}
        onChange={(v) => setTweak('theme', v)} />
      <TweakColor label="Accent" value={t.accent}
        options={['#cdfb45', '#7cff9b', '#36e0c8', '#3ad6ff', '#6f8cff', '#b98cff', '#ff7ad1', '#ff6a3d', '#ffc24d', '#e6e4dd']}
        onChange={(v) => setTweak('accent', v)} />

      <TweakSection label="Typographie" />
      <TweakSelect label="Police titres" value={t.displayFont}
        options={[
          { value: 'Space Grotesk', label: 'Space Grotesk' },
          { value: 'Syne', label: 'Syne — display' },
          { value: 'Newsreader', label: 'Newsreader — serif' },
          { value: 'Instrument Serif', label: 'Instrument Serif' }
        ]}
        onChange={(v) => setTweak('displayFont', v)} />
      <TweakRadio label="Police texte" value={t.bodyFont}
        options={[{ value: 'grotesk', label: 'Grotesk' }, { value: 'serif', label: 'Sérif' }]}
        onChange={(v) => setTweak('bodyFont', v)} />
      <TweakRadio label="Couleur des titres" value={t.headings}
        options={[
          { value: 'default', label: 'Neutre' },
          { value: 'accent', label: 'Accent' },
          { value: 'gradient', label: 'Dégradé' }
        ]}
        onChange={(v) => setTweak('headings', v)} />

      <TweakSection label="Effets" />
      <TweakRadio label="Intensité" value={t.effects}
        options={[{ value: 'none', label: 'Aucun' }, { value: 'subtle', label: 'Subtil' }, { value: 'full', label: 'Complet' }]}
        onChange={(v) => setTweak('effects', v)} />
      <TweakSelect label="Fond du hero" value={t.background}
        options={[
          { value: 'constellation', label: 'Constellation' },
          { value: 'grid', label: 'Grille' },
          { value: 'dots', label: 'Points' },
          { value: 'aurora', label: 'Aurore' },
          { value: 'none', label: 'Vide' }
        ]}
        onChange={(v) => setTweak('background', v)} />
      <TweakSelect label="Cadres projet" value={t.cards}
        options={[
          { value: 'bordered', label: 'Bordure' },
          { value: 'glass', label: 'Verre' },
          { value: 'elevated', label: 'Relief' },
          { value: 'neon', label: 'Néon' }
        ]}
        onChange={(v) => setTweak('cards', v)} />
      <TweakRadio label="Curseur" value={t.cursor}
        options={[
          { value: 'default', label: 'Standard' },
          { value: 'glow', label: 'Lueur' },
          { value: 'ring', label: 'Anneau' }
        ]}
        onChange={(v) => setTweak('cursor', v)} />
      <TweakToggle label="Grain" value={t.grain === 'on'}
        onChange={(v) => setTweak('grain', v ? 'on' : 'off')} />

      <TweakSection label="Mise en page" />
      <TweakRadio label="Coins" value={t.radius}
        options={[{ value: 'sharp', label: 'Anguleux' }, { value: 'round', label: 'Arrondis' }]}
        onChange={(v) => setTweak('radius', v)} />
      <TweakRadio label="Densité" value={t.density}
        options={[{ value: 'comfortable', label: 'Aérée' }, { value: 'compact', label: 'Compacte' }]}
        onChange={(v) => setTweak('density', v)} />
    </TweaksPanel>
  );
}

// apply persisted defaults immediately (EDITMODE block is rewritten on disk by the host)
applyTweaks(TWEAK_DEFAULTS);

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<PortfolioTweaks />);
