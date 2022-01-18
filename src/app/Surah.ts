export interface Surah {
  code: number;
  data: [
    {
      number: number;
      name: string;
      englishName: string;
      englishNameTranslation: string;
      numberOfAyahs: number;
      revelationType: string;
    }
  ];
}
