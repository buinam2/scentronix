export type ServerObj = {
  url: string;
  priority: number;
};

export const servers: ServerObj[] = [
  {
    url: 'https://does-not-work.perfume.new',
    priority: 1,
  },
  {
    url: 'https://gitlab.com',
    priority: 4,
  },
  {
    url: 'http://app.scnt.me',
    priority: 3,
  },
  {
    url: 'https://offline.scentronix.com',
    priority: 2,
  },
  //   {
  //     url: 'https://httpbin.org/delay/10', // timeout test
  //     priority: 5,
  //   },
];
