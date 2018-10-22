import { EntityMetadataMap } from 'ngrx-data';

const entityMetadata: EntityMetadataMap = {
    Auth: {},
    Hero: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = { Hero: 'Heroes' };
// const pluralNames = {};

export const entityConfig = {
    entityMetadata,
    pluralNames
};
