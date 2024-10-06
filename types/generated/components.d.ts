import type { Struct, Schema } from '@strapi/strapi';

export interface TextBlockTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_text_block_text_blocks';
  info: {
    displayName: 'Text Block';
    icon: 'bold';
  };
  attributes: {};
}

export interface ContentItemsContentItems extends Struct.ComponentSchema {
  collectionName: 'components_content_items_content_items';
  info: {
    displayName: 'contentItems';
    icon: 'cog';
  };
  attributes: {
    contentBody: Schema.Attribute.RichText;
    contentHeading: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    linkLabel: Schema.Attribute.String;
    linkPath: Schema.Attribute.String;
  };
}

export interface ContentGridContentGrid extends Struct.ComponentSchema {
  collectionName: 'components_content_grid_content_grids';
  info: {
    displayName: 'Content Grid';
    icon: 'stack';
  };
  attributes: {
    title: Schema.Attribute.String;
    contentItems: Schema.Attribute.Component<
      'content-items.content-items',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'text-block.text-block': TextBlockTextBlock;
      'content-items.content-items': ContentItemsContentItems;
      'content-grid.content-grid': ContentGridContentGrid;
    }
  }
}
