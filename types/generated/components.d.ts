import type { Schema, Struct } from '@strapi/strapi';

export interface BlockBenefitItem extends Struct.ComponentSchema {
  collectionName: 'components_block_benefit_items';
  info: {
    displayName: 'BenefitItem';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlockHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_block_hero_slides';
  info: {
    displayName: 'HeroSlide';
    icon: 'apps';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    image_alt: Schema.Attribute.String;
    link_internal: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.benefit-item': BlockBenefitItem;
      'block.hero-slide': BlockHeroSlide;
    }
  }
}
