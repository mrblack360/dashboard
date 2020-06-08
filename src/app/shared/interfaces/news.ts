export interface News {
  timestamp?: number;
  articleCount?: number;
  articles?: [
    {
      title: string;
      description: string;
      url: string;
      image: string;
      publishedAt: string;
      source: {
        name: string;
        url: string;
      };
    }
  ];
}
