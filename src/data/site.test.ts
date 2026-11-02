import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import { categories } from './law-types';
import { cast, howToUse, site } from './site';
import { characters } from './characters';
import { lawIconNames } from './law-icons';
import { orderedLaws } from './laws';

describe('site chrome', () => {
  it('gives every law a distinct glyph name', () => {
    expect(Object.keys(lawIconNames)).toHaveLength(orderedLaws.length);
    orderedLaws.forEach((law) => {
      expect(lawIconNames[law.slug], law.slug).toBeTruthy();
    });
  });

  it('only references glyphs that exist in LawGlyph', () => {
    const glyph = fs.readFileSync(new URL('../components/LawGlyph.astro', import.meta.url), 'utf8');
    Object.entries(lawIconNames).forEach(([slug, name]) => {
      expect(glyph.includes(name), `${slug} → ${name}`).toBe(true);
    });
  });

  it('groups every law into exactly one category', () => {
    const grouped = categories.flatMap((category) =>
      orderedLaws.filter((law) => law.category === category.id),
    );

    expect(grouped).toHaveLength(orderedLaws.length);
    expect(new Set(grouped.map((law) => law.slug)).size).toBe(orderedLaws.length);
  });

  it('keeps the site copy free of emoji icons', () => {
    const copy = JSON.stringify({ site, cast, howToUse, categories });
    expect(copy).not.toMatch(/\p{Extended_Pictographic}/u);
  });

  it('keeps cast in sync with the character registry', () => {
    expect(cast.map((person) => person.id).sort()).toEqual(Object.keys(characters).sort());
    cast.forEach((person) => {
      expect(characters[person.id as keyof typeof characters].name, person.id).toBe(person.name);
    });
  });

  it('casts only registered characters', () => {
    cast.forEach((person) => {
      expect(characters[person.id as keyof typeof characters], person.id).toBeTruthy();
    });
  });

  it('states the real total in the hero eyebrow and description', () => {
    expect(site.eyebrow).toContain(String(orderedLaws.length));
    expect(site.description).toContain(`${orderedLaws.length} 条`);
  });

  it('keeps the reading steps numbered in order', () => {
    expect(howToUse.map((step) => step.step)).toEqual(['01', '02', '03']);
  });
});
