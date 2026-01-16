export type Language = 'vi' | 'en';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Content {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
  };
  home: {
    hero: {
      slogan: string;
      sub: string;
      cta: string;
    };
    values: {
      title: string;
      items: Array<{ title: string; desc: string }>;
    };
  };
  about: {
    title: string;
    history: string;
    infoTitle: string;
    taxCode: string;
    mission: string;
  };
  services: {
    title: string;
    subtitle: string;
    list: ServiceItem[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    items: PortfolioItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      service: string;
      message: string;
      submit: string;
      success: string;
    };
    info: {
      address: string;
      hotline: string;
      email: string;
      office: string;
    };
  };
  footer: {
    rights: string;
    quickLinks: string;
  };
}