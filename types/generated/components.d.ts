import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksSectionHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_heroes';
  info: {
    displayName: 'section-hero';
    icon: 'apps';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.section-hero': BlocksSectionHero;
    }
  }
}
