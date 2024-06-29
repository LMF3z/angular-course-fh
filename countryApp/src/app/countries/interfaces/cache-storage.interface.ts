import { Country } from './country.interface';
import { Region } from './region.type';

export interface CacheStorage {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: TermRegions;
}

export interface TermCountries {
  term: string;
  countries: Country[];
}
export interface TermRegions {
  term: Region;
  countries: Country[];
}
